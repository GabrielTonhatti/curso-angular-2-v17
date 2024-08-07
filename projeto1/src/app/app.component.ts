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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title: string = 'Angular';
  imgUrl: string =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

  constructor() {}

  chamarFuncao(): void {
    console.log('Esse é um click');
  }

  // 4 Tipos de data Binding
  // 1 - Interpolation (Interpolação) - {{ title }}
  // 2 - Property Binding (Vinculação de Propriedade) - <img [src]="imgUrl">
  // 3 - Event Binding (Vinculação de Evento) - <button (click)="onClick($event)"> | <button (click)="chamarFuncao()">
  // 4 - Two-way Data Binding (Vinculação de Dados de Duas Vias) - [(ngModel)]="title" - <input [(ngModel)]="title" />
}
