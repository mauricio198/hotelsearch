import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //Declarando variables.
  btnIniciarSesion:string;
  btnInicio:string;
  btnHoteles:string;
  btnQuienesSomos:string;
  btnContacto:string;
  
  

  constructor() { 
    this.btnIniciarSesion = "Iniciar Sesión."
    this.btnInicio = "Inicio";
    this.btnHoteles = "Hoteles";
    this.btnQuienesSomos: "Quiénes somos";
    this.btnContacto = "Contacto";
    
    this.btnCategorias = [
      'Una estrella',
      'Dos estrellas',
      'Tres estrellas',
      'Cuatro estrellas',
      'Cinco estrellas'
      ];
  }

  
  ngOnInit() {
  }

}
