import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FmProdutosRoutingModule } from './fm-produtos-routing.module';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './components/atualizar-produto/atualizar-produto.component';
import { HttpClientModule } from '@angular/common/http';
import { ProdutosService } from './services/produtos.service';

@NgModule({
  declarations: [ProdutosComponent, CadastrarProdutoComponent, AtualizarProdutoComponent],
  imports: [
    CommonModule,
    FmProdutosRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ], providers: [ProdutosService]
})
export class FmProdutosModule { }
