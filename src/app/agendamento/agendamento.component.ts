import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{
}from '@angular/material';

/*import 'hammerjs';*/

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from '../app.component';


@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.css']
})
export class AgendamentoComponent implements OnInit {
  Exemplo: any;
  constructor() { }

  ngOnInit(): void {
  }
  title = 'reactive';

  onSubmit() {
    alert("Thanks for submitting! Data: " + JSON.stringify(this.Exemplo));
  }

}



export class InputPrefixSuffixExample {}
export class DateRangePickerOverviewExample {}
