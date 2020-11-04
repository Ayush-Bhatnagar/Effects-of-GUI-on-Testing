import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2Component} from './v2.component';

const routes: Routes = [
  {
        path: 'home/good/v2', 
        component: V2Component,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class V2RoutingModule { }
