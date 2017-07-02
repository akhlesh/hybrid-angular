import { Component } from '@angular/core';

@Component({
    template: `<h2>User Component</h2>
    <pre>user:- {{data | json}}</pre>
    <button (click)="changeMe()">Toggle user</button>`
})
export class UserComponent {
    data = { name: 'Jhon' };

    changeMe() {
        let userName = this.data.name === 'Jhon' ? 'Bravo' : 'Jhon';
        this.data = { name: userName }
        console.log(this.data);
    }
}
