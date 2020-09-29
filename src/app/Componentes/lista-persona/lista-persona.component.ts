import { Component, OnInit } from '@angular/core';

import { PersonaService } from '../../Servicios/persona.service';
import { Persona } from '../../Modelo/persona-data.model';

@Component({
  selector: 'app-lista-persona',
  templateUrl: './lista-persona.component.html',
  styleUrls: ['./lista-persona.component.css']
})
export class ListaPersonaComponent implements OnInit {

  personas: Persona[];

  constructor(
    public PersonaService: PersonaService
  ) { }

  ngOnInit(): void {
    this.personas = this.PersonaService.getPersonas();
  }

}
