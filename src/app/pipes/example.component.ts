import { Component } from '@angular/core';
import { Observer, Observable } from 'rxjs';
@Component({
selector: 'example',
templateUrl: './example.component.html',
styleUrls: ['./pipes.component.css'] })

export class ExampleComponent {
  date: Date =  new Date();
  percentage: Number = 0.25;
  currency: Number = 200;
  decimal: Number = 23.2323043;
  json: Object = {
      nombre: 'Nombre de ejemplo',
      apellido: 'Apellido ej'
  };
  lowerCase: String = 'ESTO SON MAYUSCULAS'
  upperCase: String = 'esto son minusculas'
  limitTo: String = 'Este string tiene más de 20 caracteres pero lo veras reducido'
  asyncData = new Observable<string>((observer: Observer<string>) => {
    setInterval(() => observer.next(new Date().toString()), 1000);
  });

}

