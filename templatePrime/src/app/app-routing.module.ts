import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



export enum AppRoutesNames {
 
  app = '',
  auth = 'auth'
}

const routes: Routes = [
  {
    path: AppRoutesNames.auth,

    
    loadChildren: () =>
      import('./modules/auth/auth.module').then(
        (m) => m.AuthModule
      ),
  },

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
