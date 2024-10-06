import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, switchMap, throwError } from 'rxjs';
import { AuthUtils } from 'src/app/core/auth/auth.util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authenticated: boolean = false;

    constructor(
        private _httpClient: HttpClient,
    )
    {
    }

    set accessToken(token: string)
    {
        localStorage.setItem('accessToken', token);
    }

    get accessToken(): string
    {
        return localStorage.getItem('accessToken') ?? '';
    }

    forgotPassword(email: string): Observable<any>
    {
        return this._httpClient.post('api/auth/forgot-password', email);
    }

    resetPassword(password: string): Observable<any>
    {
        return this._httpClient.post('api/auth/reset-password', password);
    }

    signIn(credentials: { email: string; password: string }): Observable<any>
    {
        // Throw error, if the user is already logged in
        if ( this._authenticated )
        {
            return throwError('User is already logged in.');
        }

        return this._httpClient.post('api/auth/sign-in', credentials).pipe(
            switchMap((response: any) => {

                // Store the access token in the local storage
                this.accessToken = response.accessToken;

                // Set the authenticated flag to true
                this._authenticated = true;

                // Store the user on the user service

                // Return a new observable with the response
                return of(response);
            })
        );
    }

    signInUsingToken(): Observable<any>
    {

        return this._httpClient.post('api/auth/sign-in-with-token', {
            accessToken: this.accessToken
        }).pipe(
            catchError(() =>

                of(false)
            ),
            switchMap((response: any) => {

                if ( response.accessToken )
                {
                    this.accessToken = response.accessToken;
                }
                this._authenticated = true;

                return of(true);
            })
        );
    }

    signOut(): Observable<any>
    {
        localStorage.removeItem('accessToken');
        this._authenticated = false;
        return of(true);
    }

    signUp(user: { name: string; email: string; password: string; company: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/sign-up', user);
    }

    unlockSession(credentials: { email: string; password: string }): Observable<any>
    {
        return this._httpClient.post('api/auth/unlock-session', credentials);
    }

    check(): Observable<boolean>
    {
        if ( this._authenticated )
        {
            return of(true);
        }

        if ( !this.accessToken )
        {
            return of(false);
        }

        if ( AuthUtils.isTokenExpired(this.accessToken) )
        {
            return of(false);
        }

        return this.signInUsingToken();
    }

}
