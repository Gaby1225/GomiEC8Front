import { environment } from './../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtService } from '../security-services/jwt.service';
import { LocalStorageService } from '../storage-services/local-storage.service';
import { LocalSessionService } from '../storage-services/local-session.service';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(
    private http: HttpClient,
    private jwt: JwtService,
    private localStorageService: LocalStorageService,
    private localSessionService: LocalSessionService
  ) {}

  private loginUrl = environment.envURL + '/auth/v2/Login'; // URL to web api
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(email: string, senha: string) {
    return this.http.post(this.loginUrl, { email, senha }, this.httpOptions);
  }

  isLoggedIn(): boolean {
    return this.jwt.isTokenValid();
  }

  isUsuarioCliente() {
    var storageTipo = this.localStorageService.get('tipo');
    var sessionTipo = this.localSessionService.get('tipo');
    return storageTipo == 'cliente' || sessionTipo == 'cliente';
  }

  isUsuarioMotorista() {
    var storageTipo = this.localStorageService.get('tipo');
    var sessionTipo = this.localSessionService.get('tipo');
    return storageTipo == 'motorista' || sessionTipo == 'motorista';
  }

  getStoredId(): string {
    var storageId = this.localStorageService.get('id');
    var sessionId = this.localSessionService.get('id');
    if (storageId) {
      return storageId;
    } else if (sessionId) {
      return sessionId;
    } else {
      return '';
    }
  }

  logout(){
    this.localStorageService.clear();
    this.localSessionService.clear();
  }
}
