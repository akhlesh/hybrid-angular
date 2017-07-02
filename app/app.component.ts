import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'my-app',
  template: `
    <h3 class="title">Angular Hybrid App with Router</h3>
    <nav>
      <a href="#/home" [ngClass]="{active: activeClass==='/home'}">Home</a>
      <a href="#/user" [ngClass]="{active: activeClass==='/user'}">User</a>
    </nav>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  activeClass: string;
  constructor(private location: Location) { }

  ngAfterViewInit() {
    this.activeClass = this.location.path();
    this.location.subscribe((t) => {
      this.activeClass = t.url;
    });
  }
}

