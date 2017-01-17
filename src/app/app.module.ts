import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

import { Contacts } from './contacts/contacts.component';
import { Contacts2 } from './contacts2/contacts2.component';

/* Routing Module */
import { PanzersModule }      from './panzers/panzers.module';
import { TanksModule }      from './tanks/tanks.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    PanzersModule,
    TanksModule
  ],
  declarations: [
    AppComponent, Contacts, Contacts2
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
