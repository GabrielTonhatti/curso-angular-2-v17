import { Pipe, PipeTransform } from '@angular/core';

// Comando para gerar o pipe: ng g pipe pipes/sexo
@Pipe({
  name: 'sexo',
})
export class SexoPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let sexo: string = 'Masculino';

    if (value === 'f') {
      sexo = 'Feminino';
    }

    return sexo;
  }
}
