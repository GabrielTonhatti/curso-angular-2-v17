import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  clientes = [
    {
      nome: 'Alexandre',
      sexo: 'm',
      idade: 20,
      salario: 1000,
    },
    {
      nome: 'Roberto',
      sexo: 'm',
      idade: 33,
      salario: 11000,
    },
    {
      nome: 'Maura',
      sexo: 'f',
      idade: 23,
      salario: 12000,
    },
    {
      nome: 'Claúdia',
      sexo: 'f',
      idade: 22,
      salario: 13000,
    },
  ];
}
