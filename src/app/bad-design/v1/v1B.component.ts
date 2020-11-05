import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'v1',
  templateUrl: './v1B.component.html',
  styleUrls: ['./v1B.component.css']
})
export class V1BComponent {

    constructor(private router: Router) {
    }

    onChange($event) {
      debugger;
    }

}
