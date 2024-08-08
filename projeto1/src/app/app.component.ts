import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

// 4 Tipos de data Binding
// 1 - Interpolation (Interpolação) - {{ title }}
// 2 - Property Binding (Vinculação de Propriedade) - <img [src]="imgUrl">
// 3 - Event Binding (Vinculação de Evento) - <button (click)="onClick($event)"> | <button (click)="chamarFuncao()">
// 4 - Two-way Data Binding (Vinculação de Dados de Duas Vias) - [(ngModel)]="title" - <input [(ngModel)]="title" />

/* Diretrivas de Decisão
 * 1 - ngIf usando complemento else, usamos para exibir ou ocultar elementos tomado por decisão lógica - <h1 *ngIf="title; else mensagemPadrao">{{ title }}</h1>
 * 2 - ngSwitchCase -
 * <span [ngSwitch]="title">
 *  <p *ngSwitchCase="'Olá'">Esse é um parágrafo verdadeiro.</p>
 *  <p *ngSwitchCase="false">Esse é um parágrafo falso.</p>
 *  <p *ngSwitchDefault>Esse é um parágrafo default.</p>
 * </span>
 */

/**
 * Diretivas Estruturais
 * 1 - ngFor - Itera sobre uma lista de elementos:
 *  <tr *ngFor="let cliente of clientes">
 *    <td>{{ cliente.nome }}</td>
 *    <td>{{ cliente.sexo }}</td>
 *    <td>{{ cliente.idade }}</td>
 *  </tr>
 */

/**
 * Pipes
 * 1 - uppercase - Transforma o texto em maiúsculo. - {{ cliente.nome | uppercase }}
 * 2 - lowercase - Transforma o texto em minúsculo. - {{ cliente.nome | lowercase }}
 * 3 - currency - Formata um número para moeda. - {{ cliente.salario | currency : "BRL" }}
 * 4 - date - Formata uma data. - {{ cliente.dataNascimento | date : "dd/MM/yyyy" }}
 * 5 - json - Formata um objeto para JSON. - {{ cliente | json }}
 * 6 - slice - Corta um texto. - {{ cliente.nome | slice : 0 : 3 }}
 * 7 - async - Trabalha com observables. - {{ cliente | async }}
 * 8 - percent - Formata um número para porcentagem. - {{ cliente.salario | percent }}
 * 9 - number - Formata um número. - {{ cliente.salario | number : "1.2-2" }}
 * 10 - decimal - Formata um número para decimal. - {{ cliente.salario | decimal : "1.2-2" }}
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Olá';
  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'Masculino',
      idade: 20,
      salario: 1000,
    },
    {
      nome: 'Roberto',
      sexo: 'Masculino',
      idade: 33,
      salario: 11000,
    },
    {
      nome: 'Maura',
      sexo: 'Feminino',
      idade: 23,
      salario: 12000,
    },
    {
      nome: 'Claúdia',
      sexo: 'Feminino',
      idade: 22,
      salario: 13000,
    },
  ];

  constructor() {}
}
