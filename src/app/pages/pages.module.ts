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
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ComponentsModule,
    PipesModule,
  ],
  exports: [
    CounterComponent,
    BindingComponent,
    NameListComponent,
    ProyeccionComponent,
    BidirectinalComponent,
    PipesComponent,
  ],
})
export class PagesModule {}
