import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-conteiner-padrao',
  templateUrl: './conteiner-padrao.component.html',
  styleUrls: ['./conteiner-padrao.component.css']
})
export class ConteinerPadraoComponent implements OnInit {
  @Input()
  titulo="";
  constructor() { }

  ngOnInit() {
  }

}
