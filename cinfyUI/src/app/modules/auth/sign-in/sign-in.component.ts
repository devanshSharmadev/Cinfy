import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {

  logoImageSrc:string;
  tagline:string;
  constructor() {
    this.logoImageSrc="/assets/logos/LogoWithText.png"
    this.tagline="Access Anywhere, Achieve Everywhere"
   }

  ngOnInit(): void {
  }

}
