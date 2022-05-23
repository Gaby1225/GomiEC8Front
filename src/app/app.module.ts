import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { SolicitacaoComponent } from './solicitacao/solicitacao.component';
import { UserpageComponent } from './userpage/userpage.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { HeaderComponent } from './header/header.component';
import { MatCommonModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatRadioButton, MatRadioGroup, MatRadioModule, _MatRadioButtonBase} from '@angular/material/radio';
import {MatDatepicker, MatDatepickerContent, MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { RecuperarComponent } from './recuperar/recuperar.component';





@NgModule({
  declarations: [
    AppComponent,
    AgendamentoComponent,
    CadastroComponent,
    CancelarComponent,
    ChatComponent,
    ColetacanceladaComponent,
    ConfirmacaoComponent,
    EncontradoComponent,
    InformacoespedidoComponent,
    LoginComponent,
    MainfuncComponent,
    MainpageComponent,
    MapaComponent,
    ProcuraComponent,
    QrComponent,
    SolicitacaoComponent,
    UserpageComponent,
    HeaderComponent,
    RecuperarComponent,
  ],
  imports: [
    MatInputModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    MatRadioModule,
    MatDatepickerModule,
    BrowserModule,
    MatSliderModule,
    MatCardModule,
    FormsModule,
    AppRoutingModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCheckboxModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: 'register', component: LoginComponent },
    ]),
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
