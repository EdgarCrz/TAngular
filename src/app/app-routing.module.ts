import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent },
  // { path: 'inicio', component: InicioComponent },
  // { path: 'remplazar', component: remplazar },
  // { path: 'remplazar', component: remplazar },
  
  { path: '', component: InicioComponent },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
