import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipesComponent } from './pages/pipes/pipes.component';
import { BindingComponent } from './pages/binding/binding.component';
import { BidirectinalComponent } from './pages/bidirectinal/bidirectinal.component';
import { ProyeccionComponent } from './pages/proyeccion/proyeccion.component';
import { NameListComponent } from './pages/name-list/name-list.component';
import { authGuard } from './guards/auth.guard';

const routes: Routes = [
  // { path: 'pipes', component: PipesComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    data: { Title: 'PAGINA INICIAL', code: 'xf1234' },
    canActivate: [authGuard],
    loadChildren: () =>
      import('./pages/pages.module').then((m) => m.PagesModule),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () =>
  //     import('./pages/pages.module').then((m) => m.PagesModule),
  // },

  // {
  //   path: 'pipes',
  //   children: [
  //     { path: '', component: BindingComponent },
  //     { path: 'pipes', component: PipesComponent },
  //   ],
  // },
  // { path: 'binding', component: BindingComponent },
  // { path: 'bidi', component: BidirectinalComponent },
  // { path: 'proyec/:idUser/:url', component: ProyeccionComponent },
  // { path: '**', redirectTo: 'pipes' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
