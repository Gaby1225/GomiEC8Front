import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizeGuard implements CanActivate {
  constructor(private jwtService: JwtService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.jwtService.isTokenValid()) {
      //possivel relogin automatico
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

    /*if (this.jwtService.getUser()) {
          if (this.jwtService.isTokenExpired()) {
            // Should Redirect Sig-In Page
          } else {
            return true;
          }
      } else {
        return new Promise((resolve) => {
          this.loginService.signIncallBack().then((e) => {
             resolve(true);
          }).catch((e) => {
            // Should Redirect Sign-In Page
          });
        });
      }*/
  }
}
