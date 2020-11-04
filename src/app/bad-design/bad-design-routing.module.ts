import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadDesignBaseComponent} from './bad-design-base.component';

const routes: Routes = [
  {
        path: 'home/bad', 
        component: BadDesignBaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class BadDesignRoutingModule { }
