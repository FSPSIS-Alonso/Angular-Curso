import { CanActivateChildFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const childLoadGuard: CanActivateChildFn = (childRoute, state) => {
  console.log(childRoute);
  console.log(state);
  let authService: AuthService = inject(AuthService);
  let data = childRoute.data;
  // let havePrm = false
  // for (let i = 0; i < authService.permisos.length; i++) {
  //   const element = authService.permisos;
  //   if(element === data['prm'])  havePrm = true

  // }
  return authService.permisos.some((e) => e === data['prm']);
  return false;
};
