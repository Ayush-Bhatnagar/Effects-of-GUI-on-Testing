import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BadDesignRoutingModule } from './bad-design-routing.module';
import { BadDesignBaseComponent } from './bad-design-base.component';
import { V1BModule } from './v1/v1B.module';
import { V2BModule } from './v2/v2B.module';
import { V3BModule } from './v3/v3B.module';

@NgModule({
  declarations: [
    BadDesignBaseComponent
  ],
  imports: [
    BrowserModule,
    BadDesignRoutingModule,
    V1BModule,
    V2BModule,
    V3BModule
  ],
  providers: []
})
export class BadDesignModule { }
