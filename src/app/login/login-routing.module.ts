import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthGuardService } from '../core/auth/auth.guard.service';

const routes: Routes = [{path:'', component: LoginComponent, canActivate: [AuthGuardService]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
