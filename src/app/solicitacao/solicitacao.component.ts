import { Router } from '@angular/router';
import { LoginService } from './../services/login-service/login.service';
import { Coleta } from './../data/coleta';
import { Component, OnInit } from '@angular/core';
import { ColetaService } from '../services/coleta-service/coleta.service';

@Component({
  selector: 'app-solicitacao',
  templateUrl: './solicitacao.component.html',
  styleUrls: ['./solicitacao.component.css'],
})
export class SolicitacaoComponent implements OnInit {
  constructor(
    private coletaService: ColetaService,
    private loginService: LoginService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.loginService.getStoredId());
    this.coleta.clienteId = this.loginService.getStoredId();
  }

  coleta: Coleta = {
    clienteId: '',
    nome: '',
    tipo: '',
    status: false,
  };

  solicitar() {
    if (this.coleta.nome && this.coleta.tipo) {
      this.coletaService
        .criar(this.coleta)
        .subscribe(() => this.router.navigate(['/mainpage']));
    } else {
      console.error('Campos não preenchidos');
    }
  }
}
