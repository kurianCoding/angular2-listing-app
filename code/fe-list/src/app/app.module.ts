import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {Ng2OrderModule} from 'ng2-order-pipe';
import { AppComponent } from './app.component';
import { List } from './list.component';
import { Table } from './table.component';

@NgModule({
  declarations: [
  AppComponent,
  List,
  Table
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
