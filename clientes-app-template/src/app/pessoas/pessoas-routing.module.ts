import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasFormComponent } from './pessoas-form/pessoas-form.component';
import { PessoasListaComponent } from './pessoas-lista/pessoas-lista.component';


const routes: Routes = [
  {path: 'pessoa-form', component: PessoasFormComponent},
  {path: 'pessoa-form/:id', component: PessoasFormComponent},
  {path: 'pessoas', component: PessoasListaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoasRoutingModule { }
