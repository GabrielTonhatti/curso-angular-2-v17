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
export class AppComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    OnDestroy,
    AfterContentInit,
    AfterViewInit,
    AfterContentChecked,
    AfterViewChecked
{
  title = 'projeto1';

  constructor() {
    console.log('Componente construtor');
  }

  ngAfterContentChecked(): void {
    console.log('Componente AfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('Componente AfterViewChecked');
  }

  ngAfterViewInit(): void {
    console.log('Componente AfterViewInit');
  }

  ngOnDestroy(): void {
    console.log('Componente OnDestroy');
  }

  ngAfterContentInit(): void {
    console.log('Componente AfterContentInit');
  }

  ngDoCheck(): void {
    console.log('Componente DoCheck');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componente OnChanges');
  }

  ngOnInit(): void {
    console.log('Componente OnInit');
    this.title = 'Novo título';
  }

  mudarTexto(): void {
    this.title += 'a';
  }
}
