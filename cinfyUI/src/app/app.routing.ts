import { Route, Routes } from '@angular/router';
import {AuthGuard} from 'src/app/core/auth/guards/auth.guard';
import {NoAuthGuard} from 'src/app/core/auth/guards/noAuth.guard';

import {SignInModule} from 'src/app/modules/auth/sign-in/sign-in.module'
import {SignUpModule} from 'src/app/modules/auth/sign-up/sign-up.module';
import {SignOutModule} from 'src/app/modules/auth/sign-out/sign-out.module'
import {HomeModule} from 'src/app/modules/admin/home/home.module'
import {StarredModule} from 'src/app/modules/admin/starred/starred.module'
export const appRoutes:Route[]=[
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/home'
    }
    ,
    // Routes for guest
    {
        path:'',
        children:[
            {
                path:'sign-in',loadChildren:()=> SignInModule
            },
            {
                path:'sign-up',loadChildren:()=> SignUpModule
            }
        ]
    },

    // Routes for autheticated users
    {
        path:'',
        children:[
            {
                path:'home',loadChildren:()=> import('./modules/admin/home/home.module').then(m=>m.HomeModule)
            },
            {
                path:'starred',loadChildren:()=>StarredModule
            }
        ]
    }
]
