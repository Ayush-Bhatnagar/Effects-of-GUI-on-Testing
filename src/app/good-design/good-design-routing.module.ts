import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodDesignBaseComponent} from './good-design-base.component';

const routes: Routes = [
  {
        path: 'home/good', 
        component: GoodDesignBaseComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class GoodDesignRoutingModule { }
