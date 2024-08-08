import { Component } from '@angular/core';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';

export interface Pessoa {
  nome: string;
  sexo: string;
  idade: number;
  salario: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  displayedColumns: Array<string> = ['nome', 'sexo', 'idade', 'salario'];
  clientes: Array<Pessoa> = [
    {
      nome: 'Alexandre',
      sexo: 'm',
      idade: 20,
      salario: 10000,
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
  dataSource!: MatTableDataSource<Pessoa, MatTableDataSourcePaginator>;

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.clientes);
  }
}
