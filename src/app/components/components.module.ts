import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './todo-list/todo-list.component';
import { NameItemComponent } from './name-item/name-item.component';

@NgModule({
  declarations: [TodoListComponent, NameItemComponent],
  imports: [CommonModule],
  exports: [TodoListComponent, NameItemComponent],
})
export class ComponentsModule {}
