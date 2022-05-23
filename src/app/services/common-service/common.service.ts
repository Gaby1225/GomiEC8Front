import { JwtService } from './../security-services/jwt.service';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private jwt: JwtService) {}

  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('Ocorreu um erro:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend retornou código ${error.status}, body: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(
      () => new Error('Algo deu errado; tente novamente mais tarde.')
    );
  }

  authHeader() {
    return { headers: { Authorization: 'bearer ' + this.jwt.getToken() } };
  }
}
