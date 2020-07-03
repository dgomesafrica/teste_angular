import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from './user';
import { TokenService } from '../token/token.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private userSubject = new BehaviorSubject<User>(null);
    private userName:string;

    constructor(private tokenService:TokenService) {
        if(this.tokenService.hasToken()) {
            this.decodeNotify();
        }  
    }

    setToken(token:string) {
        this.tokenService.setToken(token);
        this.decodeNotify();
    }

    getUser():Observable<User> {
        return this.userSubject.asObservable();
    }

    getUserName():string {
        return this.userName;
    }

    isLogged():boolean {
        return this.tokenService.hasToken();
    }

    loggout() {
        this.tokenService.removeToken();
        this.decodeNotify();
    }

    private decodeNotify() {
        const token = this.tokenService.getToken();

        //TODO: Decodificação do Token
        let user:User;
        if(token == 'valid') {
            user = {
                nome: 'teste',
                email: 'teste@email.com',
                id: 1
            };

            this.userName = user.nome;
        }

        this.userSubject.next(user);
    }
}