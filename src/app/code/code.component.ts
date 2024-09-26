import { Component, OnInit, NgZone, NO_ERRORS_SCHEMA } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { Router, RouterModule } from '@angular/router';
import { ProdutoService } from '../produto/produto.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Produto } from '../produto/produto';
import { Carrinho } from '../carrinho/carrinho';
import { environment } from '../../environments/environment.prod';
import { CaminhoMenuComponent } from '../caminho-menu/caminho-menu.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { PhoneNumberComponent } from '../phone-number/phone-number.component';
import { StarComponent } from '../star/star.component';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  standalone: true,
  imports: [ 
    BrowserModule,
    CaminhoMenuComponent,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatRadioModule,
    
    PhoneNumberComponent,
    ReactiveFormsModule,
    RouterModule,
    StarComponent,
   ],
   schemas: [ NO_ERRORS_SCHEMA ]

})
export class CodeComponent implements OnInit {
  otp!: string;
  verify: any;

  // tslint:disable-next-line:variable-name
  produto = {} as Produto;

  // tslint:disable-next-line:variable-name
  carrinho = {} as Carrinho;

  codigo: number = 0;


  constructor(private router: Router,
              private ngZone: NgZone,
              private produtoService: ProdutoService,
              private carrinhoService: CarrinhoService,
) {}

  configCode = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '35px',
      height: '35px',
    },
  };

  ngOnInit() {
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
  }

  onOtpChange(otp: string) {
    this.otp = otp;
  }

  handleClick() {
    console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    console.log(credential);
    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        console.log(response);
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          environment.login = true;

          this.router.navigate(['carrinho']);
        });
      })
      .catch((error) => {
        console.log(error);
        alert(error.message);
      });
  }

  validarCodigo(produtoId: number): void {


    console.log('teste');

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

    });

    if (environment.codigo > 0) {
      environment.codigo = this.codigo;
      // tslint:disable-next-line:semicolon
      // this.updateClassDisabled();
      this.carrinhoCreate(produtoId);
      environment.login = true;
      // window.alert('Logged in');


    }
  }

  carrinhoCreate(produtoId: number): void {

    // tslint:disable-next-line:no-unused-expression
    this.produtoService.readById(produtoId).subscribe(product => {
      this.produto = product;

      this.carrinho.enviado = false;
      this.carrinho.isencao = false;
      this.carrinho.local = environment.local;
      this.carrinho.dataCriacao = new Date();
      this.carrinho.telefone = environment.telefone;
      this.carrinho.status = 'Pendente';

      this.carrinho.produto = this.produto;

      this.carrinhoService.create(this.carrinho).subscribe(() => {
        this.carrinhoService.showMessage('Produto adicionado no pedido');
      });
    });
  }
}
