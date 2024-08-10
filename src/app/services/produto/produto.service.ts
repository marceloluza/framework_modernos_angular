import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produto } from '../../produto/model/produto.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private httpClient: HttpClient) { }

  salvar(produto: Produto) : Observable<Produto> {
    return this.httpClient.post('http://localhost:8080/api/produto', produto);
  }
}
