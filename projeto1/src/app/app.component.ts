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
    },
    {
      nome: 'Roberto',
      sexo: 'Masculino',
      idade: 33,
    },
    {
      nome: 'Maura',
      sexo: 'Feminino',
      idade: 23,
    },
    {
      nome: 'Claúdia',
      sexo: 'Feminino',
      idade: 22,
    },
  ];

  constructor() {}

  /**
   * Diretivas Estruturais
   * 1 - ngFor - Itera sobre uma lista de elementos:
   *  <tr *ngFor="let cliente of clientes">
   *    <td>{{ cliente.nome }}</td>
   *    <td>{{ cliente.sexo }}</td>
   *    <td>{{ cliente.idade }}</td>
   *  </tr>
   */
}
