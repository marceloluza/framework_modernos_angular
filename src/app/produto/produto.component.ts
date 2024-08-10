import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../services/produto/produto.service';
import { Produto } from './model/produto.model';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css',
})
export class ProdutoComponent implements OnInit {
  public produto: Produto = new Produto();

  public nome?: string;
  public descricao?: string;
  public categoria?: string;
  public loading?: boolean;
  public mensagem?: string;

  public constructor(private produtoService: ProdutoService) {}

  ngOnInit(): void {}

  salvar() {
    this.mensagem = '';
    this.loading = true;
    this.produto.nome = this.nome;
    this.produto.descricao = this.descricao;
    this.produto.categoria = this.categoria;
    this.produtoService.salvar(this.produto).subscribe(
      (produto) => {
        this.mensagem = `Produto ${produto.id} salvo com sucesso`;
        this.loading = false;
      },
      (error) => {
        this.loading = false;
        console.log(error);
        this.mensagem = `Erro: ${error.message}`;
      }
    );
  }
}
