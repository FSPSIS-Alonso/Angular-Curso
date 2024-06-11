import { Component } from '@angular/core';

@Component({
  selector: 'app-name-list',
  templateUrl: './name-list.component.html',
  styleUrl: './name-list.component.scss',
})
export class NameListComponent {
  valorName: string = '';
  nameList: string[] = [];

  deleteName(name: string) {
    this.nameList = this.nameList.filter((n) => n !== name);
  }

  addName() {
    this.nameList.push(this.valorName);
    this.valorName = '';
  }
}
