import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V3BRoutingModule} from './v3B.routing.module';
import { V3BComponent } from './v3B.component';

@NgModule({
  declarations: [
    V3BComponent
  ],
  imports: [
    BrowserModule,
    V3BRoutingModule
  ],
  providers: []
})
export class V3BModule { }
