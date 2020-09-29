import { Injectable } from '@angular/core';
import { Persona } from '../Modelo/persona-data.model'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  Personas: Persona[]

  constructor() {
    this.Personas = [

    ];
  }

   getPersonas(){
     if(localStorage.getItem('personas') === null){
      return this.Personas;
     }else{
       this.Personas = JSON.parse(localStorage.getItem('personas'));
       return this.Personas;
     }
   }

   addPersonas(persona: Persona){
     this.Personas.push(persona);
    let personas = [];
     if(localStorage.getItem('personas') === null){
      personas.push(persona);
      localStorage.setItem('personas', JSON.stringify(personas));
     }else{
       personas = JSON.parse(localStorage.getItem('personas'));
       personas.push(persona);
       localStorage.setItem('personas', JSON.stringify(personas));
     }
   }

   deletePersona(id: string){
      for(let i = 0; i < this.Personas.length; i++){
        if(id == this.Personas[i].id){
          this.Personas.splice(i, 1);
          localStorage.setItem('personas',JSON.stringify(this.Personas));
        }
      }
   }
}
