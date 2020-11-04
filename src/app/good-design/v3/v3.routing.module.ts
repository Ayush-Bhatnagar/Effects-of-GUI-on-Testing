import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V3Component} from './v3.component';

const routes: Routes = [
  {
        path: 'home/good/v3',
        component: V3Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class V3RoutingModule { }
