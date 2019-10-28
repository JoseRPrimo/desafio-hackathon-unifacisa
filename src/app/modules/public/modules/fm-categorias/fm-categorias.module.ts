import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FmCategoriasRoutingModule } from './fm-categorias-routing.module';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { AtualizarCategoriasComponent } from './components/atualizar-categorias/atualizar-categorias.component';
import { CadastrarCategoriasComponent } from './components/cadastrar-categorias/cadastrar-categorias.component';
import { from } from 'rxjs';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
  declarations: [CategoriasComponent, AtualizarCategoriasComponent, CadastrarCategoriasComponent],
  imports: [
    CommonModule,
    FmCategoriasRoutingModule,
    SharedComponentsModule
  ]
})
export class FmCategoriasModule { }
