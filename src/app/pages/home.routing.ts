import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { BidirectinalComponent } from './bidirectinal/bidirectinal.component';
import { ProyeccionComponent } from './proyeccion/proyeccion.component';
import { PipesComponent } from './pipes/pipes.component';
import { childLoadGuard } from '../guards/child-load.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivateChild: [childLoadGuard],
    children: [
      {
        path: 'bidi',
        data: { prm: 'xSF00' },
        component: BidirectinalComponent,
      },
      { path: 'pipe', data: { prm: 'xSF01' }, component: PipesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
