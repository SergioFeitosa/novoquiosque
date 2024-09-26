import { Component, OnInit, Injectable } from '@angular/core';
import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { environment } from '../../environments/environment';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-caminho-menu',
  standalone: true,
  
  templateUrl: './caminho-menu.component.html',
  styleUrls: ['./caminho-menu.component.css'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    RouterModule,
    RouterLinkActive,
    MatCardModule, 
    MatButtonModule,
    MatRadioModule,
    MatSnackBarModule,
    MatGridListModule,
    MatIconModule,
  ],
})

@Injectable({
  providedIn: 'root'
})

export class CaminhoMenuComponent implements OnInit {

  fundoColoridoCardapio = environment.fundoColoridoCardapio;
  fundoColoridoPedido = environment.fundoColoridoPedido;
  fundoColoridoCozinha = environment.fundoColoridoCozinha;
  fundoColoridoBar = environment.fundoColoridoBar;
  fundoColoridoEntrega = environment.fundoColoridoEntrega;
  fundoColoridoConta = environment.fundoColoridoConta;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  pedido!: Pedido;
  telefone: number = 0;
  codigo: number = 0;
  produto!: Produto;

  contaValorTotal: number = 0;


  constructor(
  ) { 
  }

  ngOnInit(): void {

    this.fundoColoridoCardapio = environment.fundoColoridoCardapio;
    this.fundoColoridoPedido = environment.fundoColoridoPedido;
    this.fundoColoridoCozinha = environment.fundoColoridoCozinha;
    this.fundoColoridoBar = environment.fundoColoridoBar;
    this.fundoColoridoEntrega = environment.fundoColoridoEntrega;
    this.fundoColoridoConta = environment.fundoColoridoConta;
  }

}
