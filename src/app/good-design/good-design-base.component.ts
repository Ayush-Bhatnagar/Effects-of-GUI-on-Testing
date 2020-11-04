import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'good-design-base',
  templateUrl: './good-design-base.component.html',
  styleUrls: ['./good-design-base.component.css']
})
export class GoodDesignBaseComponent {

    constructor(private router: Router, private route: ActivatedRoute) {
    }

    proceed(flag: number) {
        switch(flag) {
          case 1:
            this.router.navigate(['v1'], { relativeTo: this.route });
            break;
          case 2:
            this.router.navigate(['v2'], { relativeTo: this.route });
            break;
          case 3:
            this.router.navigate(['v3'], { relativeTo: this.route });
            break;
        }
    }
}
