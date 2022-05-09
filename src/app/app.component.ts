import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  
  title = 'EXAMEN';
  edad = 15;
  mostrar = true;
  nombre="Nombre";

  usuarios = [
    {
      nombre: 'Alex',
      apellido: 'Capa'
    },
    {
      nombre: 'Alejandra',
      apellido: 'Tipan'
    }
  ]

  validarEdad() {

    if (this.edad >= 18) {

      return "Eres mayor de Edad";

    } else {
      return "Eres menor de Edad";
    }
  }

  mostrarTexto() {

    this.mostrar = !this.mostrar;

  }
}
