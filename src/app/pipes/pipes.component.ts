import { Component } from '@angular/core';
@Component({
selector: 'pipes',
templateUrl: './pipes.component.html',
styleUrls: ['./pipes.component.css'] })

export class PipesComponent {
   profile: any = {
       name: 'ernesto garcia gomez',
       fecha_ingreso: new Date(),
       edad: '23',
       saldo: 3.45467676,
       riesgo: 4.6623
   }
 }

