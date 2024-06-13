import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NameListComponent } from './name-list/name-list.component';
import { ProyeccionComponent } from './proyeccion/proyeccion.component';
import { BidirectinalComponent } from './bidirectinal/bidirectinal.component';
import { PipesComponent } from './pipes/pipes.component';
import { PipesModule } from '../pipes/pipes.module';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing';
import { AuthService } from '../services/auth.service';

@NgModule({
  declarations: [
    CounterComponent,
    BindingComponent,
    NameListComponent,
    ProyeccionComponent,
    BidirectinalComponent,
    PipesComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
    HomeRoutingModule,
  ],
  exports: [
    CounterComponent,
    BindingComponent,
    NameListComponent,
    ProyeccionComponent,
    BidirectinalComponent,
    PipesComponent,
  ],
  providers: [AuthService],
})
export class PagesModule {}
