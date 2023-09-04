import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VerdeFlor';
  teste= "teste"
  menuAtivo = false;

  toggleMenu() {
    this.menuAtivo = !this.menuAtivo;
  }
}
