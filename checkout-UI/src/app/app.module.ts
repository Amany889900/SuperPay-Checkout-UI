import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BodyComponent } from './Components/body/body.component';

import { FrameComponent } from './Components/frame/frame.component';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
