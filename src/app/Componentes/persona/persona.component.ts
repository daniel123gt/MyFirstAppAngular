import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/Modelo/persona-data.model';
import { PersonaService } from '../../Servicios/persona.service';
@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input()
  Persona : Persona;

  deletePersona(id: string){
    let modal = document.getElementById('modalConfirm');
    let btn = document.getElementById('btn-confirm');
    let close = document.getElementById('btn-cancel');
    modal.style.display = "block";
    btn.onclick = () => {
      this.PersonaService.deletePersona(id);
      modal.style.display = "none";
    }
    close.onclick = () => {
      modal.style.display = "none";
    }
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }    
  }
  constructor(
    public PersonaService: PersonaService
  ) { }

  ngOnInit(): void {
  }

}
