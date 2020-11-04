import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GoodDesignRoutingModule } from './good-design-routing.module';
import { GoodDesignBaseComponent } from './good-design-base.component';
import { V1Module } from './v1/v1.module';
import { V2Module } from './v2/v2.module';
import { V3Module } from './v3/v3.module';
//import {AngularDropDownSearchComponent} from "angular-dropdown-search/projects/angular-drop-down-search/src/lib/angular-drop-down-search.component";

@NgModule({
  declarations: [
    GoodDesignBaseComponent
  ],
  imports: [
    BrowserModule,
    GoodDesignRoutingModule,
    V1Module,
    V2Module,
    V3Module
  ],
  providers: []
})
export class GoodDesignModule { }
