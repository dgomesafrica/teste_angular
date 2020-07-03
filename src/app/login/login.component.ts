import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../core/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin:FormGroup;

  constructor(private fb:FormBuilder, private router:Router, private userService:UserService) { }

  ngOnInit() {
    this.formLogin = this.fb.group({
      name: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    if(this.formLogin.valid) {
      //TODO: Chamar api de autenticação

      this.userService.setToken('valid');
      this.router.navigate(['catalogo-produtos']);
    }
  }
}
