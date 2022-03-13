import { Component } from '@angular/core';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan', 'Eduardo', 'Fernando'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando.'
  }

  cambiarCliente(){
    this.nombre = 'Marta';
    this.genero = 'femenino';
  }
  borrarCliente(){
    this.clientes.pop();
  }
 
}
