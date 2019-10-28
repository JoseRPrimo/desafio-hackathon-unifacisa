import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { CadastrarProdutoComponent } from './components/cadastrar-produto/cadastrar-produto.component';
import { AtualizarProdutoComponent } from './components/atualizar-produto/atualizar-produto.component';

const routes: Routes = [ {
  path: '',
  component: ProdutosComponent},
  {path: 'cadastrarprodutos', component: CadastrarProdutoComponent},
  {path: 'atualizarprodutos', component: AtualizarProdutoComponent},];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmProdutosRoutingModule { }
