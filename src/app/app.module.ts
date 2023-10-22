import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioComponent } from './cardapio/cardapio.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { DescricaoComponent } from './descricao/descricao.component';
import { EscolherMesaComponent } from './escolher-mesa/escolher-mesa.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioComponent,
    CalendarioComponent,
    DescricaoComponent,
    EscolherMesaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
