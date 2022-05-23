import { LoginService } from './../services/login-service/login.service';
import { Component, OnInit } from '@angular/core';
import { throwToolbarMixedModesError } from '@angular/material/toolbar';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Coleta } from '../data/coleta';
import { ColetaService } from '../services/coleta-service/coleta.service';
import { MotoristaService } from '../services/usuarios-services/motorista.service';

@Component({
  selector: 'app-informacoespedido',
  templateUrl: './informacoespedido.component.html',
  styleUrls: ['./informacoespedido.component.css'],
})
export class InformacoespedidoComponent implements OnInit {
  constructor(
    private coletaService: ColetaService,
    private route: ActivatedRoute,
    private motoristaService: MotoristaService,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      var id = params.get('id');
      if (id) {
        this.coletaId = id;
        this.coletaService.consultar(id).subscribe((response: any) => {
          this.coleta = response;
          this.getMotorista();
        });
      }
    });
  }

  coletaId: string = '';
  motorista: string = '';

  coleta: Coleta = {
    nome: '',
    tipo: '',
  };

  isUsuarioCliente() {
    return this.loginService.isUsuarioCliente();
  }
  isUsuarioMotorista() {
    return this.loginService.isUsuarioMotorista();
  }

  isAceita(): boolean {
    if (this.coleta.motoristaId) {
      return true;
    } else {
      return false;
    }
  }

  isConfirmavel(): boolean {
    if (this.coleta.motoristaId && !this.coleta.status) {
      return true;
    } else {
      return false;
    }
  }

  isAceitavel(): boolean {
    if (this.coleta.motoristaId) {
      return false;
    } else if (this.coleta.status) {
      return false;
    } else {
      return true;
    }
  }

  getMotorista() {
    var idMotorista = this.coleta.motoristaId;
    if (idMotorista) {
      this.motoristaService
        .consultar(idMotorista)
        .subscribe((response: any) => {
          this.motorista = response.nome;
        });
    }
  }

  confirmar() {
    this.coletaService.confirmar(this.coletaId).subscribe(() => {
      this.router.navigate(['/mainpage']);
    });
  }

  aceitar() {
    var motoristaId = this.loginService.getStoredId();
    this.coletaService.aceitar(this.coletaId, motoristaId).subscribe(() => this.router.navigate(['/mainpage']));
  }
}
