
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { CardapioPrincipalComponent } from './cardapioprincipal/cardapio-principal.component';
import { CarrinhoCreateComponent } from './carrinho/carrinho-create.component';
import { CarrinhoDeleteComponent } from './carrinho/carrinho-delete.component';
import { CarrinhoListComponent } from './carrinho/carrinho-list.component';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CarrinhoReadComponent } from './carrinho/carrinho-read.component';
import { CarrinhoUpdateComponent } from './carrinho/carrinho-update.component';
import { CodeComponent } from './code/code.component';
import { ContaListComponent } from './conta/conta-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EntregaUpdateComponent } from './entrega/entrega-update.component';
import { EntregaListComponent } from './entrega/entrega-list.component';
import { Error404Component } from './Error404/error-404.component';
import { FechamentoListComponent } from './fechamento/fechamento-list.component';
import { LoginComponent } from './login/login.component';
import { ModalModule } from './modal/modal.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { PedidoCreateComponent } from './pedido/pedido-create.component';
import { PedidoDeleteComponent } from './pedido/pedido-delete.component';
import { PedidoListComponent } from './pedido/pedido-list.component';
import { PedidoReadComponent } from './pedido/pedido-read.component';
import { PedidoUpdateComponent } from './pedido/pedido-update.component';
import { PedidoBarCreateComponent } from './pedidoBar/pedidoBar-create.component';
import { PedidoBarDeleteComponent } from './pedidoBar/pedidoBar-delete.component';
import { PedidoBarListComponent } from './pedidoBar/pedidoBar-list.component';
import { PedidoBarReadComponent } from './pedidoBar/pedidoBar-read.component';
import { PedidoBarUpdateComponent } from './pedidoBar/pedidoBar-update.component';
import { ProdutoCreateComponent } from './produto/produto-create.component';
import { ProdutoListComponent } from './produto/produto-list.component';
import { ProdutoReadComponent } from './produto/produto-read.component';
import { ReplacePipe } from './pipe/replace.pipe';
import { StarComponent } from './star/star.component';
import { TelefoneValidacaoComponent } from './telefone/telefone-validacao/telefone-validacao.component';



@NgModule({ declarations: [
        CardapioPrincipalComponent,
        CarrinhoListComponent,
        CarrinhoCreateComponent,
        CarrinhoReadComponent,
        CarrinhoUpdateComponent,
        CarrinhoDeleteComponent,
        CodeComponent,
        ContaListComponent,
        DashboardComponent,
        EntregaListComponent,
        EntregaUpdateComponent,
        Error404Component,
        FechamentoListComponent,
        LoginComponent,
        NavBarComponent,
        PedidoCreateComponent,
        PedidoDeleteComponent,
        PedidoListComponent,
        PedidoReadComponent,
        PedidoUpdateComponent,
        PedidoBarCreateComponent,
        PedidoBarDeleteComponent,
        PedidoBarListComponent,
        PedidoBarReadComponent,
        PedidoBarUpdateComponent,
        ProdutoListComponent,
        ProdutoReadComponent,
        ProdutoCreateComponent,
        ReplacePipe,
        StarComponent,
        TelefoneValidacaoComponent
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    exports: [ CommonModule ],
    imports: [AppRoutingModule,
        RouterModule,
        BrowserModule,
        CarrinhoModule,
        CommonModule,
        FormsModule,
        ModalModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatRadioModule,
        MatSnackBarModule,
        NgMaterialModule,
        NoopAnimationsModule], 
        providers: [
            
            { provide: LocationStrategy, useClass: HashLocationStrategy }, provideHttpClient(withInterceptorsFromDi())] })

export class AppModule { }
