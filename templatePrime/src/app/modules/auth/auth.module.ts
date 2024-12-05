import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { SignInComponent } from './sign-in/sign-in.component';

@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AuthRoutingModule,
        InputTextModule,
        CheckboxModule,
        ButtonModule,
        RippleModule
    ],
    exports: [],
    providers: [],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AuthModule { }
