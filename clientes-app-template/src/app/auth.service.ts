import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenURL: string = 'http://localhost:8080/oauth/token';
  clientID: string = 'my-angular-app';
  clientSecret: string = '@321';
  jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient
  ) { }

  obterToken(){
    const tokenString = localStorage.getItem("access_token");
    if(tokenString){

      const token = JSON.parse(tokenString).access_token;
      return token;

    }

    return null;
  }

  isAuthenticated(): boolean{
    const token = this.obterToken();
    if(token){
      const expired = this.jwtHelper.isTokenExpired(token);
      return !expired;
    }
    return false;

  }

  salvar(usuario: Usuario): Observable<any> {
    return this.http.post<any>('http://localhost:8080/api/usuarios', usuario)
  }

  tentarLogar(username: string, password: string) : Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password)
      .set('grant_type', 'password');
    const headers = {
      'Authorization' : 'Basic ' + btoa(`${this.clientID}:${this.clientSecret}`),
      'Content-Type': 'application/x-www-form-urlencoded'
    }  

    return this.http.post(this.tokenURL, params.toString() , { headers })
  }
}
