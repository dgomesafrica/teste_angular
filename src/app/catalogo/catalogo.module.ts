import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogoComponent } from './catalogo.component';
import { ProdutoComponent } from './produto/produto.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CatalogoComponent,
    ProdutoComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ]
})
export class CatalogoModule { }
