import { ClienteService } from './../services/usuarios-services/cliente.service';
import { Cliente } from './../data/cliente';
import { CommonService } from './../services/common-service/common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Motorista } from '../data/motorista';
import { MotoristaService } from '../services/usuarios-services/motorista.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
})
export class CadastroComponent implements OnInit {
  constructor(
    private clienteService: ClienteService,
    private motoristaService: MotoristaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  usuario = {
    email: '',
    senha: '',
    nome: '',
    nascimento: new Date(),
    cpf: '',
    telefone: '',
  };

  cliente = {
    rua: '',
    numero: 0,
    complemento: '',
    bairro: '',
    cidade: '',
    cep: '',
  };

  motorista = {
    tipoVeiculo: '',
    cnh: '',
    expiracao: new Date(),
    categoria: '',
    carga: 0,
  };

  seletorUsuario: number = -1;

  clienteSelecionado() {
    return this.seletorUsuario == 0;
  }
  motoristaSelecionado() {
    return this.seletorUsuario == 1;
  }
  seletorSelecionado() {
    return this.seletorUsuario != -1;
  }

  cadastrar() {
    var usuario = this.usuario;
    var cliente = this.cliente;
    var motorista = this.motorista;
    //Horrivel, mas vai ter de dar pra agora
    if (
      usuario.email &&
      usuario.senha &&
      usuario.nome &&
      usuario.cpf &&
      usuario.nascimento &&
      usuario.telefone &&
      ((this.clienteSelecionado() &&
        cliente.rua &&
        cliente.numero &&
        cliente.bairro &&
        cliente.cidade &&
        cliente.cep) ||
        (this.motoristaSelecionado() &&
          motorista.tipoVeiculo &&
          motorista.carga &&
          motorista.cnh &&
          motorista.categoria &&
          motorista.expiracao))
    ) {
      if (this.clienteSelecionado()) {
        var cadastroCliente: Cliente = {
          email: usuario.email,
          senha: usuario.senha,
          nome: usuario.nome,
          nascimento: usuario.nascimento,
          cpf: usuario.cpf,
          telefone: usuario.telefone,
          rua: cliente.rua,
          numero: cliente.numero,
          bairro: cliente.bairro,
          cidade: cliente.cidade,
          cep: cliente.cep,
        };

        this.clienteService.cadastrar(cadastroCliente).subscribe(() => {
          this.router.navigate(['/login']);
        });
      } else {
        var cadastroMotorista: Motorista = {
          email: usuario.email,
          senha: usuario.senha,
          nome: usuario.nome,
          nascimento: usuario.nascimento,
          cpf: usuario.cpf,
          telefone: usuario.telefone,
          tipoVeiculo: motorista.tipoVeiculo,
          carga: motorista.carga,
          cnh: motorista.cnh,
          expiracao: motorista.expiracao,
          categoria: motorista.categoria,
        };

        this.motoristaService.cadastrar(cadastroMotorista).subscribe(() => {
          this.router.navigate(['/login']);
        });
      }
    } else {
      console.error('Campos não preenchidos');
    }
  }
}
