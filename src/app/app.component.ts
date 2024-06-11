import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'principiosNg';
  name: string = '';

  showText() {
    console.log(this.name);
  }
  getData() {
    return JSON.stringify({ name: 'pepe', edad: 34, skils: [1, 2, 3] });
  }
}
