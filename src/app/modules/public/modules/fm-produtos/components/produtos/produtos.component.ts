import { Component, OnInit } from '@angular/core';
import { ProdutosModels } from '../../models/produtos.models';
import { ProdutosService } from '../../services/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {
  produtos:ProdutosModels[]
  constructor(private produtosService:ProdutosService) { }

  ngOnInit() {
   this.produtosService.getProdutos().subscribe(res =>{
     this.produtos = res;
   })
  }

}
