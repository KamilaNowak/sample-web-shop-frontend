import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http' //for HTTP Client
import { ItemService } from '../app/services/item.service'
import { MatTableModule } from '@angular/material/table'  

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
