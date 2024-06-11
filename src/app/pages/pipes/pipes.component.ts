import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  formatNumbers = '1.2-4';
  price: number = 20.789234;
  priceFloat: number = 145.65;
  name: string = 'PEPE';
  nameLower: string = 'jose';
  person = {
    name: 'Test',
    edad: 35,
  };
  today: Date = new Date();
  numbers: number[] = [1, 2, 3, 4, 5];
  total = Math.ceil(this.price);
}
