import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V3RoutingModule} from './v3.routing.module';
import { V3Component } from './v3.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    V3Component
  ],
  imports: [
    BrowserModule,
    V3RoutingModule,
    FontAwesomeModule
  ],
  providers: []
})
export class V3Module { }
