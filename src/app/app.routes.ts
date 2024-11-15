import { RouterModule, Routes } from '@angular/router';

import { FamiliarComponent } from './familiar/familiar.component';
import { MayoresComponent } from './mayores/mayores.component';
import { TcgComponent } from './tcg/tcg.component';
import { NacionalesComponent } from './nacionales/nacionales.component';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { RegistrarseComponent } from './registrarse/registrarse.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },  // Home route
  { path: 'familiar', component: FamiliarComponent },
  { path: 'mayores', component: MayoresComponent },
  { path: 'tcg', component: TcgComponent },
  { path: 'nacional', component: NacionalesComponent },
  {path: 'login', component: LoginComponent},
  {path: 'registrarse', component: RegistrarseComponent},
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard redirect
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
