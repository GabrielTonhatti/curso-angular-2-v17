import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';

// Comando para gerar o componente: ng g m features/produto --routing (g = generate, m = module, --routing = com rota)
@NgModule({
  declarations: [
    CadastroComponent,
    ListagemComponent
  ],
  imports: [CommonModule, ProdutoRoutingModule],
})
export class ProdutoModule {}
