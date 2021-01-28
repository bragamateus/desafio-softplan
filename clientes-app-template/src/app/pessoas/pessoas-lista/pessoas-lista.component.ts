import { Component, OnInit } from '@angular/core';
import { PessoasService } from 'src/app/pessoas.service';
import { Pessoa } from '../pessoa';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pessoas-lista',
  templateUrl: './pessoas-lista.component.html',
  styleUrls: ['./pessoas-lista.component.css']
})
export class PessoasListaComponent implements OnInit {

  pessoas: Pessoa[] = [];

  constructor(
    private service: PessoasService,
    private router: Router) { }

  ngOnInit(): void {
    this.service
      .getPessoas()
      .subscribe(response => this.pessoas = response);
  }

  novoCadastro(){
    this.router.navigate(['/pessoas/form'])
  }

}
