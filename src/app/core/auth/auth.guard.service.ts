import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../user/user.service';
import { Injectable } from '@angular/core';

@Injectable({
   providedIn: 'root' 
})
export class AuthGuardService implements CanActivate {
    constructor(private userService:UserService, private router:Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.userService.isLogged()) {
            this.router.navigate(['catalogo-produtos']);
            return false;
        }

        return true;
    }
}