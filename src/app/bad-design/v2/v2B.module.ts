import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V2BRoutingModule} from './v2B.routing.module';
import { V2BComponent } from './v2B.component';

@NgModule({
  declarations: [
    V2BComponent
  ],
  imports: [
    BrowserModule,
    V2BRoutingModule
  ],
  providers: []
})
export class V2BModule { }
