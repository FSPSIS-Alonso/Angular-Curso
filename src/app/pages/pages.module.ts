import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/counter.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [CounterComponent, BindingComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ComponentsModule],
  exports: [CounterComponent, BindingComponent],
})
export class PagesModule {}
