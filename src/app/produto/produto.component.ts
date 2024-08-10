import { Component } from '@angular/core';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {
  public nome?: string;
  public descricao?: string;
  public categoria?: string;


  salvar(){
    console.log(this.nome);
    console.log(this.descricao);
    console.log(this.categoria);
  }
}
