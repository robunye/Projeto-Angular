import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Produto } from 'src/app/models/produto';
import { ProdutosService } from 'src/app/shared/services/produtos/produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  constructor(private produtosService: ProdutosService) { }

  produtos: Produto[] = [];
  carrinho: Produto[] = [];

  @Output('onCarrinho') onCarrinho = new EventEmitter<Produto>();

  addCarrinho(produto: Produto) {
    this.carrinho.push(produto);
  }

  produtoNoCarrinho(produto: Produto): boolean {
    return this.carrinho.includes(produto);
  }

  ngOnInit(): void {
    this.produtosService.getProdutos().subscribe(produto => {
      console.log(produto);
      this.produtos = produto;
    })
  }
}
