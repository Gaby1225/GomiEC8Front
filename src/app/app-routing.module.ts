import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { CancelarComponent } from './cancelar/cancelar.component';
import { ChatComponent } from './chat/chat.component';
import { ColetacanceladaComponent } from './coletacancelada/coletacancelada.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { EncontradoComponent } from './encontrado/encontrado.component';
import { InformacoespedidoComponent } from './informacoespedido/informacoespedido.component';
import { LoginComponent } from './login/login.component';
import { MainfuncComponent } from './mainfunc/mainfunc.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MapaComponent } from './mapa/mapa.component';
import { ProcuraComponent } from './procura/procura.component';
import { QrComponent } from './qr/qr.component';
import { RecuperarComponent } from './recuperar/recuperar.component';
import { AuthorizeGuard } from './services/security-services/authorize-guard.service';
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { UserpageComponent } from './userpage/userpage.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'agendamento', component: AgendamentoComponent, canActivate: [AuthorizeGuard] },
  { path: 'cadastro', component: CadastroComponent },
  { path: 'cancelar', component: CancelarComponent, canActivate: [AuthorizeGuard] },
  { path: 'chat', component: ChatComponent, canActivate: [AuthorizeGuard] },
  { path: 'coletacancelada', component: ColetacanceladaComponent, canActivate: [AuthorizeGuard]},
  { path: 'confirmacao', component: ConfirmacaoComponent, canActivate: [AuthorizeGuard] },
  { path: 'encontrado', component: EncontradoComponent, canActivate: [AuthorizeGuard] },
  { path: 'informacoespedido/:id', component: InformacoespedidoComponent, canActivate: [AuthorizeGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'mainfunc', component: MainfuncComponent, canActivate: [AuthorizeGuard] },
  { path: 'mainpage', component: MainpageComponent, canActivate: [AuthorizeGuard] },
  { path: 'mapa', component: MapaComponent, canActivate: [AuthorizeGuard] },
  { path: 'procura', component: ProcuraComponent, canActivate: [AuthorizeGuard] },
  { path: 'qr', component: QrComponent, canActivate: [AuthorizeGuard] },
  { path: 'recuperar', component: RecuperarComponent},
  { path: 'solicitacao', component: SolicitacaoComponent, canActivate: [AuthorizeGuard] },
  { path: 'userpage', component: UserpageComponent, canActivate: [AuthorizeGuard]},
  { path: '**', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routing = RouterModule.forRoot(routes);
