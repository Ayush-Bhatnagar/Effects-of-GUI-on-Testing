import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V1RoutingModule} from './v1.routing.module';
import { V1Component } from './v1.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    V1Component
  ],
  imports: [
    BrowserModule,
    V1RoutingModule,
    FontAwesomeModule
  ],
  providers: []
})
export class V1Module { }
