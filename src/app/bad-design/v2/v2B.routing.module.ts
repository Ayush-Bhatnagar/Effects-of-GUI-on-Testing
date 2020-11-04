import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V2BComponent} from './v2B.component';

const routes: Routes = [
  {
        path: 'home/bad/v2', 
        component: V2BComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class V2BRoutingModule { }
