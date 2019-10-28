import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { AtualizarCategoriasComponent } from './components/atualizar-categorias/atualizar-categorias.component';
import { CadastrarCategoriasComponent } from './components/cadastrar-categorias/cadastrar-categorias.component';

const routes: Routes = [{
  path:'',
  component: CategoriasComponent},
  {path:'atualizarcategorias', component: AtualizarCategoriasComponent},
  {path:'cadastrarcategorias', component: CadastrarCategoriasComponent},
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FmCategoriasRoutingModule { }
