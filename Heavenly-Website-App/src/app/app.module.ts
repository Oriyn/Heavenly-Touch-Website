import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { BellybindingComponent } from './bellybinding/bellybinding.component';
import { BirthComponent } from './birth/birth.component';
import { Fresh48Component } from './fresh48/fresh48.component';
import { MaternityComponent } from './maternity/maternity.component';
import { PackagesComponent } from './packages/packages.component';
import { PhotographyComponent } from './photography/photography.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    BellybindingComponent,
    BirthComponent,
    Fresh48Component,
    MaternityComponent,
    PackagesComponent,
    PhotographyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
