import { LocalSessionService } from './../services/storage-services/local-session.service';
import { LocalStorageService } from './../services/storage-services/local-storage.service';
import { LoginService } from './../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private localStorageServ: LocalStorageService,
    private localSessionServ: LocalSessionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.router.navigate(['/mainpage']);
    }
  }

  rememberLogin: boolean = true;

  logar(email: string, senha: string) {
    //Horrivel, mas é o que tem por enquanto
    this.loginService.login(email, senha).subscribe((response: any) => {
      if (this.rememberLogin) {
        this.localStorageServ.set('token', response.token);
        if (response.usuarioC) {
          this.localStorageServ.set('tipo', 'cliente');
          this.localStorageServ.set('id', response.usuarioC.id);
        } else if (response.usuarioM) {
          this.localStorageServ.set('tipo', 'motorista');
          this.localStorageServ.set('id', response.usuarioM.id);
        }
      } else {
        this.localSessionServ.set('token', response.token);
        if (response.usuarioC) {
          this.localSessionServ.set('tipo', 'cliente');
          this.localSessionServ.set('id', response.usuarioC.id);
        } else if (response.usuarioM) {
          this.localSessionServ.set('tipo', 'motorista');
          this.localSessionServ.set('id', response.usuarioM.id);
        }
      }
      this.router.navigate(['/mainpage']);
    });
  }
}
