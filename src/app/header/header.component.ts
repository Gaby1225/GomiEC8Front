import { Router } from '@angular/router';
import { LoginService } from './../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit(): void {}

  isLogado() {
    return this.loginService.isLoggedIn();
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
