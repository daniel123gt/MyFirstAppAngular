import { Component, Input, OnInit } from '@angular/core';
import { Persona } from '../../Modelo/persona-data.model';
import { v4 as uuidv4 } from 'uuid';
import { PersonaService } from '../../Servicios/persona.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Nombre : String = ""
  Amigos : String[] = []
  Persona : Persona

  agregarAmigo(newNombre, newEdad){
    this.PersonaService.addPersonas({
      nombre: newNombre.value,
      edad: newEdad.value,
      id: uuidv4()
    });
    newNombre.value = '';
    newEdad.value = '';
    newNombre.focus();
    return false
  }
  constructor(     
    public PersonaService: PersonaService
    ) { 
   }

  ngOnInit(): void {
  }

}
