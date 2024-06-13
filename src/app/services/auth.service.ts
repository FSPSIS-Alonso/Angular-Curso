import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isUserAuth: boolean = false;
  public permisos: string[] = ['xSF00'];
  constructor() {}
}
