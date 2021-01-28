import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TemplateModule } from './template/template.module';
import { HomeComponent } from './home/home.component'
import { PessoasModule } from './pessoas/pessoas.module';
import { PessoasService } from './pessoas.service';
import { LoginComponent } from './login/login.component';
import { LayoutComponent } from './layout/layout.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    TemplateModule,
    PessoasModule,

  ],
  providers: [
    PessoasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
