import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HomeModule} from 'src/app/modules/admin/home/home.module'

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeModule
    ]
})
export class SharedModule
{
}
