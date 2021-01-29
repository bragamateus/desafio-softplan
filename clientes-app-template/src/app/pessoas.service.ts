import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Pessoa } from './pessoas/pessoa';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private http: HttpClient) { }

  salvar(pessoa: Pessoa) : Observable<Pessoa>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.post<Pessoa>('http://localhost:8080/api/pessoas', pessoa, { headers });
  }

  atualizar(pessoa: Pessoa) : Observable<any>{
    return this.http.put<Pessoa>(`http://localhost:8080/api/pessoas/${pessoa.id}`, pessoa);
  }

  getPessoas(): Observable<Pessoa[]>{
    const tokenString = localStorage.getItem('access_token')
    const token = JSON.parse(tokenString)
    const headers = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<Pessoa[]>('http://localhost:8080/api/pessoas', { headers });
  }

  getPessoasPorId(id: number): Observable<Pessoa>{
    return this.http.get<any>(`http://localhost:8000/api/pessoas/${id}`);
  }
}
