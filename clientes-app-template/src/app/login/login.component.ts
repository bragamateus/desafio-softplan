import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { Usuario } from './usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string;
  password: string;
  mensagemErro: String[];
  existeCadastro: boolean;
  mensagemSucesso: string;

  constructor(
    private router: Router,
    private authService: AuthService
    ) { }
  
  onSubmit(){
    this.authService
        .tentarLogar(this.username, this.password)
        .subscribe( response => {
          const accessToken = JSON.stringify(response);
          localStorage.setItem('access_token', accessToken)
          
          this.router.navigate(['/home'])
        }, errorResponse => {
          this.mensagemErro = ['Usuário e/ou senha incorreto(s)'];
        }
          )
    
  }

  preparaCadastrar(event){
    event.preventDefault();
    this.existeCadastro = true;
  }

  cancelarCadastro(){
    this.existeCadastro = false;
  }

  cadastrar(){
    const usuario: Usuario = new Usuario();
    usuario.username = this.username;
    usuario.password = this.password;
    this.authService
      .salvar(usuario)
      .subscribe(response => {
          this.mensagemSucesso = "Cadastro realizado com sucesso! Faça o Login";
          this.existeCadastro = false;
          this.username = '';
          this.password = '';
          this.mensagemErro = [];
      }, errorResponse => {
          this.mensagemSucesso = null;
          this.mensagemErro = errorResponse.error.errors;
      })
  }
}
