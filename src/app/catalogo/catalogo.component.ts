import { Component, OnInit } from '@angular/core';
import { Produto } from './produto/produto';
import { Observable } from 'rxjs';
import { CatalogoService } from './catalogo.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  produtos$:Observable<Produto[]>;

  constructor(private catalogoService:CatalogoService) { }

  ngOnInit() {
    this.produtos$ = this.catalogoService.getProdutos();
    this.catalogoService.getProdutos().subscribe(resp => console.log(resp));
  }
}
