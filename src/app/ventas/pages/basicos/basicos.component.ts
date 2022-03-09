import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent  {

  nombreLower: string = 'juan';
  nombreUpper: string = 'jUAn';
  nombreCompleto: string = 'jUan anTONio';

  fecha: Date = new Date(); // El día de hoy

}
