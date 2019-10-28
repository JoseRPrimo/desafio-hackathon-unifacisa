import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ConteinerPadraoComponent } from './conteiner-padrao/conteiner-padrao.component';


@NgModule({
  declarations: [

  ConteinerPadraoComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ConteinerPadraoComponent,
    CommonModule
  ]
})
export class SharedComponentsModule { }
