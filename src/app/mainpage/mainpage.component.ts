import { LoginService } from './../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { Coleta } from '../data/coleta';
import { ColetaService } from '../services/coleta-service/coleta.service';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css'],
})
export class MainpageComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private coletaService: ColetaService
  ) {}

  ngOnInit(): void {
    this.obterColetas();
  }

  coletas: Coleta[] = [];
  coletasAceitas: Coleta[] = [];

  isUsuarioCliente() {
    return this.loginService.isUsuarioCliente();
  }
  isUsuarioMotorista() {
    return this.loginService.isUsuarioMotorista();
  }

  async obterColetas() {
    if (this.isUsuarioCliente()) {
      while (true) {
        var id = this.loginService.getStoredId();
        this.coletaService
          .listarColetasCliente(id)
          .subscribe((response: any) => {
            this.coletas = response;
          });
        await new Promise((f) => setTimeout(f, 10000));
      }
    } else {
      while (true) {
        var id = this.loginService.getStoredId();
        this.coletaService.listarDisponiveis().subscribe((response: any) => {
          this.coletas = response;
        });
        this.coletaService
          .listarColetasMotorista(id)
          .subscribe((response: any) => {
            this.coletasAceitas = response;
          });

        await new Promise((f) => setTimeout(f, 10000));
      }
    }
  }

  getStatus(coleta: any): string {
    if (coleta.status) {
      return 'Concluída';
    } else if (coleta.motoristaId) {
      return 'Aceita';
    } else {
      return 'Aberta';
    }
  }
}
