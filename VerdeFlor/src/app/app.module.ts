import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SobreNosComponent } from './components/sobre-nos/sobre-nos.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { LocalizacaoComponent } from './components/localizacao/localizacao.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { HeaderComponent } from './components/header/header.component';
import { OrcamentoComponent } from './components/orcamento/orcamento.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SobreNosComponent,
    GaleriaComponent,
    LocalizacaoComponent,
    ContatoComponent,
    FooterComponent,
    HeaderComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    FlexLayoutModule, 
    MatSidenavModule,
    MatListModule
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
