import { Component , ViewChild,  } from '@angular/core';


import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  toggleSidenav() {
    this.sidenav.toggle();
  }
  teste= "teste"
  menuAtivo = false;

  title = 'app';

  
}
