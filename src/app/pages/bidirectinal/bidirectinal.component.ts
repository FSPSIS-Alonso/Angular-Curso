import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-bidirectinal',
  templateUrl: './bidirectinal.component.html',
  styleUrl: './bidirectinal.component.scss',
})
export class BidirectinalComponent {
  @Input() name: string = '';
  @Output() nameChange: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    setInterval(() => {
      // console.log('info');
      this.sendInfo();
    }, 100);
  }

  sendInfo() {
    this.nameChange.next(this.name);
  }
}
