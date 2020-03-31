import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollableTabComponentComponent, ImageSliderComponent } from './components';

@NgModule({
  declarations: [
    AppComponent,
    ScrollableTabComponentComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
