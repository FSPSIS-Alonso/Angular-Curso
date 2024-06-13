import { Component, inject } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private authService: AuthService = inject(AuthService);
  title = 'principiosNg';
  name: string = '';

  showText() {
    console.log(this.name);
  }
  getData() {
    return JSON.stringify({ name: 'pepe', edad: 34, skils: [1, 2, 3] });
  }

  giveAcces() {
    this.authService.isUserAuth = true;
  }
  get isAuthUser() {
    return this.authService.isUserAuth;
  }
}
