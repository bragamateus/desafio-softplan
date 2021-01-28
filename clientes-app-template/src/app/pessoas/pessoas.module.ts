import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { PessoasRoutingModule } from './pessoas-routing.module';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';


@NgModule({
  declarations: [PessoasFormComponent, PessoasListaComponent],
  imports: [
    CommonModule,
    PessoasRoutingModule,
    FormsModule
  ], exports:[
    PessoasFormComponent,
    PessoasListaComponent
  ]
})
export class PessoasModule { }
