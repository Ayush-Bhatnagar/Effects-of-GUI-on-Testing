import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'bad-design-base',
  templateUrl: './bad-design-base.component.html',
  styleUrls: ['./bad-design-base.component.css']
})
export class BadDesignBaseComponent {

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
