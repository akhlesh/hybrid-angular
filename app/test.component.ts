import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Component({
    selector: 'test',
    template: `
    <div style="border:1px solid grey;width:300px;padding:10px">
    <p>Asynch Data</p>
    <pre>testData: {{data | json}}</pre>
    </div>
    `
})
export class TestComponent {
    @Input() testData: any;
    data = [];
    ngOnChanges(change) {
        console.log(change);
        this.data.push(change.testData.currentValue || 0);
    }
    name: string = 'World';
}
