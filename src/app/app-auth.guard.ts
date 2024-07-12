import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {JWTTokenService} from "./service/jwttoken.service";

export const appAuthGuard: CanActivateFn = (route, state) => {

  return inject(JWTTokenService).getUser() ? true : inject(Router).createUrlTree(['login']);
};
