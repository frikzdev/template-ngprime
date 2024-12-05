import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';




export enum AuthModuleRouteNames {
  signin ='sign-in',
}

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      {

        path: AuthModuleRouteNames.signin,
        component:SignInComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {
  constructor(){
    console.log("CARGO EL AUTH");
    
  }
 }
