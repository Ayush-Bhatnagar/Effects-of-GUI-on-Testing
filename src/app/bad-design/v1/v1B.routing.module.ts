import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V1BComponent} from './v1B.component';

const routes: Routes = [
  {
        path: 'home/bad/v1', 
        component: V1BComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class V1BRoutingModule { }
