import { Injectable } from '@angular/core';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import {LocalStorageService} from "./local-storage.service";
import {AppCookieService} from "./app-cookie.service";

@Injectable({
  providedIn: 'root'
})
export class JWTTokenService {

  jwtToken: string | null | undefined;
  decodedToken: JwtPayload & {name: string; email: string} | undefined;

  constructor(private authStorageService: LocalStorageService)
  {
    this.jwtToken = this.authStorageService.get("jwt-token");
    if (this.jwtToken) {
      this.decodedToken = jwtDecode(this.jwtToken)
    }
  }

  getUser() {
    console.log(this.decodedToken);
    return this.decodedToken ? this.decodedToken.name : null;
  }

  getEmail() {
    return this.decodedToken ? this.decodedToken.email : null;
  }
}
