import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Produto } from './produto/produto';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CatalogoService {
    constructor(private http:HttpClient) {}

    getProdutos():Observable<Produto[]> {
        let url = environment.API;
        return this.http.get<Produto[]>(`${url}/produtos`);
    }
}