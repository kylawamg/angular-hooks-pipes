import { Component, OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
    SimpleChanges, Input } from '@angular/core';
@Component({
selector: 'counter',
templateUrl: './counter.component.html',
styleUrls: ['./counter.component.css'] })

export class CounterComponent implements OnInit, OnDestroy, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked{
    @Input() public count: any;
    ngOnChanges(changes: SimpleChanges) {
        console.log('Counter ngOnChanges', changes) 
    }
        
    ngOnInit() { 
        console.log('Counter ngOnInit')    
    }
    ngDoCheck() { 
        console.log('Counter ngDoCheck')
    }
    ngAfterContentInit() { 
        console.log('Counter ngAfterContentInit')
    }
    ngAfterContentChecked() {
        console.log('Counter ngAfterContentChecked')
    }
    ngAfterViewInit() {
        console.log('Counter ngAfterViewInit')
    }
    ngAfterViewChecked() {
        console.log('Counter ngAfterViewChecked')
    }
    ngOnDestroy() {
        console.log('Counter ngOnDestroy')
    }
 }

