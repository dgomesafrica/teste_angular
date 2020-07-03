import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { PedidoModule } from './pedido/pedido.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    CatalogoModule,
    CarrinhoModule,
    PedidoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
