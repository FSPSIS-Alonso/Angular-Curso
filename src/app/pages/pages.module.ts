import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';
import { NameListComponent } from './name-list/name-list.component';

@NgModule({
  declarations: [CounterComponent, BindingComponent, NameListComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
  exports: [CounterComponent, BindingComponent, NameListComponent],
})
export class PagesModule {}
