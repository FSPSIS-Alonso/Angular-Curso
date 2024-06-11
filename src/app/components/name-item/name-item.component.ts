import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-name-item',
  templateUrl: './name-item.component.html',
  styleUrl: './name-item.component.scss',
})

export class NameItemComponent {
  @Input() name: string = '';
  @Output() delete = new EventEmitter<string>();

  deleteName() {
    this.delete.emit(this.name);
  }
}
