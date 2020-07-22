import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http' //for HTTP Client
import { ItemService } from '../app/services/item.service'
import { MatTableModule } from '@angular/material/table'  
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryBarComponent } from './components/item-category-bar/item-category-bar.component'

const routes : Routes= [
  {path: 'category/:id', component: ItemsListComponent},
  {path: 'category', component: ItemsListComponent},
  {path: 'items', component: ItemsListComponent},
  {path: '', redirectTo:'/items', pathMatch:'full'},
  {path: '**', redirectTo:'/items', pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCategoryBarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
