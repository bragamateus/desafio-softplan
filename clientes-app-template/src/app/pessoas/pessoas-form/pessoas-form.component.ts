import { Component, OnInit } from '@angular/core';

import {Pessoa} from '../pessoa';
import {PessoasService} from '../../pessoas.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pessoas-form',
  templateUrl: './pessoas-form.component.html',
  styleUrls: ['./pessoas-form.component.css']
})
export class PessoasFormComponent implements OnInit {

  pessoa: Pessoa;
  mensagemSucesso: boolean = false;
  mensagensErro: String[];
  id: number;

  constructor( 
      private service: PessoasService,
      private router: Router,
      private activatedRoute: ActivatedRoute
    ) { 
    this.pessoa = new Pessoa();
  }

  ngOnInit(): void {
    let params : Observable<Params> = this.activatedRoute.params;
    params.subscribe( urlParams => {
      this.id = urlParams['id'];
      if(this.id){
      this.service
      this.service
        .getPessoasPorId(this.id)
        .subscribe(
           response => this.pessoa = response,
            errorResponse => this.pessoa = new Pessoa()
     );

    }
      
    });
    
    
  }

  cadastrar(){

    if(this.id){
      this.service.atualizar(this.pessoa)
      .subscribe(response => {
        this.mensagemSucesso = true;
        this.mensagensErro = null
      }, errorResponse => {
        this.mensagensErro = ['Erro ao atualizar a pessoa']
      })
    }
    this.service
    .salvar(this.pessoa)
    .subscribe(response => {
      this.mensagemSucesso = true;
      this.mensagensErro = null;
      this.pessoa = response;
    }, errorResponse => {
      this.mensagemSucesso = false;
      this.mensagensErro = errorResponse.error.errors;      
    })
    
  }

  voltarParaListagem(){
    this.router.navigate(['/pessoas']);
  }

}
