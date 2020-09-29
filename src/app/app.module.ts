import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './Componentes/home/home.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { PersonaComponent } from './Componentes/persona/persona.component';
import { ListaPersonaComponent } from './Componentes/lista-persona/lista-persona.component';

import { PersonaService } from './Servicios/persona.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PersonaComponent,
    ListaPersonaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PersonaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
