import { CommonService } from './../common-service/common.service';
import { Cliente } from './../../data/cliente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  constructor(private http: HttpClient, private common: CommonService) {}
  private cadastroUrl = environment.envURL + '/auth/v2/Clientes'; // URL to web api
  private loginUrl = environment.envURL + '/api/v2/Clientes'; // URL to web api

  cadastrar(cliente: Cliente) {
    return this.http
      .post(this.cadastroUrl, cliente)
      .pipe(retry(1), catchError(this.common.handleError));
  }

  atualizar(id: string, cliente: Cliente) {
    return this.http
      .put(`${this.loginUrl}/${id}`, cliente, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }

  remover(id: string) {
    return this.http
      .delete(`${this.loginUrl}/${id}`, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }

  consultar(id: string) {
    return this.http
      .get(`${this.loginUrl}/${id}`, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }
}
