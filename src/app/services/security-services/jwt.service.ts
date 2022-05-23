import { Injectable } from '@angular/core';
import { LocalSessionService } from './../storage-services/local-session.service';
import { LocalStorageService } from './../storage-services/local-storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";


@Injectable({
  providedIn: 'root',
})
export class JwtService {
  constructor(
    private localStorageServ: LocalStorageService,
    private localSessionServ: LocalSessionService,
  ) {}

  isTokenValid() {
    var token = this.getToken();

    if (token && !this.isTokenExpired(token)) {
      return true;
    } else {
      this.localSessionServ.remove('token');
      this.localStorageServ.remove('token');
      return false;
    }
  }

  getToken() {
    var sessionToken = this.localSessionServ.get('token');
    var storageToken = this.localStorageServ.get('token');

    if (sessionToken) {
      //Se não for nulo ou undefined
      return sessionToken;
    } else if (storageToken) {
      return storageToken;
    } else {
      return null;
    }
  }

  isTokenExpired(token: string): boolean {
    const jwtHelper = new JwtHelperService();

    return jwtHelper.isTokenExpired(token);
  }
}
