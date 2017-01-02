import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
//import { AppRoutingModule } from './app.routing';
import { TigerComponent } from './panzers/tiger/tiger.component';
import { PantherComponent } from './panzers/panther/panther.component';
import { PzivComponent } from './panzers/pziv/pziv.component';


@NgModule({
  declarations: [
    AppComponent,
    TigerComponent,
    PantherComponent,
    PzivComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
    //AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
