import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.scss',
})
export class BindingComponent {
  valorUsuario: string = '';
  aux: string = '';
  visible: boolean = true;
  listCount: number = 0;

  private _emitterTodoItems: EventEmitter<string> = new EventEmitter<string>();

  fireAlert() {
    this.aux = this.valorUsuario;
    this._emitterTodoItems.next(this.valorUsuario);
  }

  hideSection() {
    this.visible = !this.visible;
  }

  outputChild(e: number) {
    console.log(e);
    this.listCount = e;
  }

  get emitter() {
    return this._emitterTodoItems;
  }
}
