import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs';
import { Motorista } from 'src/app/data/motorista';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common-service/common.service';

@Injectable({
  providedIn: 'root',
})
export class MotoristaService {
  constructor(private http: HttpClient, private common: CommonService) {}
  private cadastroUrl = environment.envURL + '/auth/v2/Motoristas'; // URL to web api
  private motoristaUrl = environment.envURL + '/api/v2/Motoristas'; // URL to web api

  cadastrar(motorista: Motorista) {
    return this.http
      .post(this.cadastroUrl, motorista)
      .pipe(retry(1), catchError(this.common.handleError));
  }

  atualizar(id: string, motorista: Motorista) {
    return this.http
      .put(`${this.motoristaUrl}/${id}`, motorista, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }

  remover(id: string) {
    return this.http
      .delete(`${this.motoristaUrl}/${id}`, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }

  consultar(id: string) {
    return this.http
      .get(`${this.motoristaUrl}/${id}`, this.common.authHeader())
      .pipe(retry(1), catchError(this.common.handleError));
  }
}
