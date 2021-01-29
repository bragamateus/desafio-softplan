import { Injectable } from '@angular/core';
import { HttpClient, HttpParams} from '@angular/common/http';
import { Usuario } from './login/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  tokenURL: string = 'http://localhost:8080/oauth/token';
  clientID: string = 'my-angular-app';
  clientSecret: string = '@321';


  constructor(
    private http: HttpClient
  ) { }

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
