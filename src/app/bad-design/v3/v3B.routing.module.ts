import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { V3BComponent} from './v3B.component';

const routes: Routes = [
  {
        path: 'home/bad/v3',
        component: V3BComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class V3BRoutingModule { }
