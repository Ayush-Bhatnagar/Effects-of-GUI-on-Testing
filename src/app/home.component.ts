import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    proceed(flag: number): void {
        if(!flag) this.router.navigate(['good'], { relativeTo: this.route });
        else this.router.navigate(['bad'], { relativeTo: this.route });
    }
}
