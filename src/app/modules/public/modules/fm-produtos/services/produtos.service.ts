import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { ProdutosModels } from '../models/produtos.models';

const PRODUTOS = '/produtos'
@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor( private http:HttpClient) { }

  getProdutos():Observable<ProdutosModels[]>{
    return this.http.get<ProdutosModels[]>(URL + PRODUTOS);
  }
}
