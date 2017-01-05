import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

/* Routing Module */
import { PanzersModule }      from './panzers/panzers.module';
import { TanksModule }      from './tanks/tanks.module';

@NgModule({
  imports: [
    BrowserModule,
    PanzersModule,
    TanksModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
