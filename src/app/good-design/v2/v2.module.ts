import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { V2RoutingModule} from './v2.routing.module';
import { V2Component } from './v2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    V2Component
  ],
  imports: [
    BrowserModule,
    V2RoutingModule,
    FontAwesomeModule
  ],
  providers: []
})
export class V2Module { }
