import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { PedidoComponent } from './pedido/pedido.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login'
  },
  { 
    path: 'login', 
    loadChildren: './login/login.module#LoginModule' 
  },
  { 
    path: 'catalogo-produtos', 
    component: CatalogoComponent 
  },
  { 
    path: 'meu-carrinho', 
    component: CarrinhoComponent 
  },
  { 
    path: 'pedidos', 
    component: PedidoComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
