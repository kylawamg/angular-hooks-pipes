import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
    num: any = 0 
    showCounter: boolean = true
    increment() {
        this.num++;
    }
    ngOnInit() { 
        console.log('APP ngOnInit')    
    }
}
