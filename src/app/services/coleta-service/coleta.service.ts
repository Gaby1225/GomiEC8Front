import { Coleta } from './../../data/coleta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CommonService } from '../common-service/common.service';

@Injectable({
  providedIn: 'root',
})
export class ColetaService {
  constructor(private http: HttpClient, private common: CommonService) {}

  private coletaUrl = environment.envURL + '/api/v2/Coletas';

  criar(coleta: Coleta) {
    return this.http.post(this.coletaUrl, coleta, this.common.authHeader());
  }

  aceitar(coletaId: string, motoristaId: string) {
    return this.http.put(
      `${this.coletaUrl}/${coletaId}/Motorista`,
      {
        motoristaId: motoristaId,
      },
      this.common.authHeader()
    );
  }

  confirmar(id: string) {
    return this.http.put(
      `${this.coletaUrl}/${id}/Confirmacao`,
      {},
      this.common.authHeader()
    );
  }

  alterar(id: string, coleta: Coleta) {
    return this.http.put(
      `${this.coletaUrl}/${id}`,
      coleta,
      this.common.authHeader()
    );
  }

  remover(id: string) {
    return this.http.delete(
      `${this.coletaUrl}/${id}`,
      this.common.authHeader()
    );
  }

  listarDisponiveis() {
    return this.http.get(
      `${this.coletaUrl}/disponivel`,
      this.common.authHeader()
    );
  }

  consultar(id: string) {
    return this.http.get(`${this.coletaUrl}/${id}`, this.common.authHeader());
  }

  listarColetasCliente(id: string) {
    return this.listarColetas('cliente', id);
  }

  listarColetasMotorista(id: string) {
    return this.listarColetas('motorista', id);
  }

  private listarColetas(tipo: string, id: string) {
    return this.http.get(
      `${this.coletaUrl}?${tipo}=${id}`,
      this.common.authHeader()
    );
  }
}
