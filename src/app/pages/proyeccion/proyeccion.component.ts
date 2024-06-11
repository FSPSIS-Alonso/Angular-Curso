import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-proyeccion',
  templateUrl: './proyeccion.component.html',
  styleUrl: './proyeccion.component.scss',
})
export class ProyeccionComponent {
  private router: Router = inject(Router);
  private activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  constructor() {
    this.activatedRoute.paramMap.subscribe(({ params }: any) => {
      console.log(params);
      console.log(JSON.parse(params['idUser']));
    });
  }

  navigateToHome() {
    this.router.navigate(['/pipes'], {
      queryParams: { idUser: 2, url: 'hola.es' },
    });
  }
}
