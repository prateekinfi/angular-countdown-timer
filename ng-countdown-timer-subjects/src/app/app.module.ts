import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogComponent } from './log/log.component';
import { CountsComponent } from './counts/counts.component';
import { CountDownTimerComponent } from './count-down-timer/count-down-timer.component';
import { CountDownDisplayComponent } from './count-down-display/count-down-display.component';

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    CountsComponent,
    CountDownTimerComponent,
    CountDownDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
