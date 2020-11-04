import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V1BRoutingModule} from './v1B.routing.module';
import { V1BComponent } from './v1B.component';

@NgModule({
  declarations: [
    V1BComponent
  ],
  imports: [
    BrowserModule,
    V1BRoutingModule
  ],
  providers: []
})
export class V1BModule { }
