import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aplicación Angular';
  personas: String[] = ["Carlos", "July", "Victor", "Alex", "Daniel", "Jefrey"];
  valido: boolean = true
}
