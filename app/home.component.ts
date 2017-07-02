import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    template: `
    <h2>Home Component</h2>
    <pre>count:- {{count}}</pre>
    <button (click)="increment()">Increase count</button>
    <br/><br/>
    <test [testData]="data | async"></test>    
  `
})
export class HomeComponent implements OnInit {
    data: Observable<any>;
    count = 20;

    increment() {
        this.count++;
    }

    ngOnInit() {
        this.data = new Observable(observer => {
            setTimeout(() => {
                observer.next(42);
            }, 1000);

            setTimeout(() => {
                observer.next(43);
            }, 2000);

            setTimeout(() => {
                observer.complete();
            }, 3000);
        });
    }
}
