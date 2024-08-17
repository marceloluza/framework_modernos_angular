import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/model/produto.model';
import { ProdutoService } from '../../app/services/produto/produto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrl: './listar-produto.component.css'
})
export class ListarProdutoComponent implements OnInit {

  public produtos : Produto [] = [];

  public constructor(private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(produtos => {
      this.produtos = produtos;      
    });
  }

  carregar(produto: Produto) {    
    this.router.navigate([`/produto/${produto.id}`]);
  }
}
