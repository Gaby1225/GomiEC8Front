import { ColetaService } from './services/coleta-service/coleta.service';
import { Motorista } from './data/motorista';
import { MotoristaService } from './services/usuarios-services/motorista.service';
import { LocalSessionService } from './services/storage-services/local-session.service';
import { LoginService } from './services/login-service/login.service';
import { ClienteService } from './services/usuarios-services/cliente.service';
import { Cliente } from './data/cliente';
import { Component, OnInit } from '@angular/core';
import {} from '@angular/material';
import { Coleta } from './data/coleta';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private clienteService: ClienteService,
    private loginService: LoginService,
    private localSessionService: LocalSessionService,
    private motoristaService: MotoristaService,
    private coletaService: ColetaService
  ) {}

  title = 'app';

  // Provisorio //

  usuarioId: string = '';
  usuarioNome: string = '';
  tipoUsuario: string = 'Ninguém';

  //#region Cliente

  cliente: Cliente = {
    email: 'clienteteste@cliente.com',
    senha: 'SenhaSegura',
    nome: 'Fulanor Teste da Silva',
    nascimento: new Date('01/01/2001'),
    cpf: '11111111111',
    telefone: '(11) 9 9999-9999',
    rua: 'Rua do teste',
    numero: 11,
    bairro: 'Bairro do teste',
    cidade: 'Cidade do teste',
    cep: '09944-000',
  };

  cadastrarCliente() {
    this.clienteService.cadastrar(this.cliente).subscribe((retorno: any) => {
      this.usuarioId = retorno.id;
      console.log('Criado com sucesso');
    });
  }

  logarUsuario() {
    this.loginService
      .login(this.cliente.email, this.cliente.senha)
      .subscribe((response: any) => {
        console.log(response);
        this.localSessionService.set('token', response.token);
        this.tipoUsuario = 'Cliente';
        this.usuarioId = response.usuarioC.id;
        this.usuarioNome = response.usuarioC.nome;
        console.log(`id: ${response.usuarioC.id}`);
        console.log('Login efetuado com sucesso! Token salvo.');
      });
  }

  alterarCliente() {
    this.cliente.nome = 'Ciclanor Alterado de Souza';
    this.clienteService
      .atualizar(this.usuarioId, this.cliente)
      .subscribe((response: any) => {
        this.usuarioNome = response.nome;
        console.log('Alterado com sucesso');
      });
  }

  excluirCliente() {
    this.clienteService.remover(this.usuarioId).subscribe(() => {
      console.log('Excluído com sucesso');
    });
  }

  consultarCliente() {
    this.clienteService.consultar(this.usuarioId).subscribe((response) => {
      console.log('cliente encontrado:');
      console.log(response);
    });
  }
  //#endregion

  //#region Motorista

  motorista: Motorista = {
    email: 'motoristateste@motorista.com',
    senha: 'SenhaFlopada',
    nome: 'Motorista Teste da Silva',
    nascimento: new Date('10/10/1991'),
    cpf: '99999999999',
    telefone: '(11) 9 8888-8888',
    tipoVeiculo: 'Veicular',
    cnh: '000123456789',
    expiracao: new Date('12/31/2099'),
    categoria: 'c',
    carga: 200,
  };

  cadastrarMotorista() {
    this.motoristaService
      .cadastrar(this.motorista)
      .subscribe((retorno: any) => {
        this.usuarioId = retorno.id;
        console.log('Criado com sucesso');
      });
  }

  logarMotorista() {
    this.loginService
      .login(this.motorista.email, this.motorista.senha)
      .subscribe((response: any) => {
        console.log(response);
        this.localSessionService.set('token', response.token);
        this.tipoUsuario = 'Motorista';
        this.usuarioId = response.usuarioM.id;
        this.usuarioNome = response.usuarioM.nome;
        console.log(`id: ${response.usuarioM.id}`);
        console.log('Login efetuado com sucesso! Token salvo.');
      });
  }

  alterarMotorista() {
    this.motorista.nome = 'Dirigidor Alterado de Souza';
    this.motoristaService
      .atualizar(this.usuarioId, this.motorista)
      .subscribe((response: any) => {
        this.usuarioNome = response.nome;
        console.log('Alterado com sucesso');
      });
  }

  excluirMotorista() {
    this.motoristaService.remover(this.usuarioId).subscribe(() => {
      console.log('Excluído com sucesso');
    });
  }

  consultarMotorista() {
    this.motoristaService.consultar(this.usuarioId).subscribe((response) => {
      console.log('motorista encontrado:');
      console.log(response);
    });
  }

  //#endregion

  coletaId: string = '';

  coleta: Coleta = {
    nome: 'Coleta de Post',
    tipo: 'Outros: Post',
    peso: 100,
    clienteId: '',
    status: false,
  };

  criarColeta() {
    this.coleta.clienteId = this.usuarioId;
    this.coletaService.criar(this.coleta).subscribe((response: any) => {
      this.coletaId = response.id;
      console.log(response);
      console.log('Coleta criada');
    });
  }

  listarColetasDisponiveis() {
    this.coletaService
      .listarDisponiveis()
      .subscribe((response) => console.log(response));
  }

  aceitarColeta(id: string) {
    this.coletaService.aceitar(id, this.usuarioId).subscribe((response) => {
      console.log(response);
      console.log('coleta aceita');
    });
  }

  confirmarColeta(id: string) {
    this.coletaService.confirmar(id).subscribe((response) => {
      console.log(response);
      console.log('coleta confirmada');
    });
  }

  consultarColeta(id: string) {
    this.coletaService
      .consultar(id)
      .subscribe((response) => console.log(response));
  }

  listarColetasMotorista() {
    this.coletaService
      .listarColetasMotorista(this.usuarioId)
      .subscribe((response) => console.log(response));
  }

  listarColetasCliente() {
    this.coletaService
      .listarColetasCliente(this.usuarioId)
      .subscribe((response) => console.log(response));
  }

  alterarColeta(id: string) {
    var coleta = this.coleta;
    coleta.nome = 'Coleta de PUT';
    coleta.tipo = 'Outros: PUT';
    this.coletaService.alterar(id, coleta).subscribe((response) => {
      console.log(response);
      console.log('Alterado');
    });
  }

  removerColeta(id: string) {
    this.coletaService.remover(id).subscribe((response) => {
      console.log(response);
      console.log('Removido');
    });
  }
  // Provisorio //
}
