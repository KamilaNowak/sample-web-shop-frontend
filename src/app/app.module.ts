import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ItemsListComponent } from './components/items-list/items-list.component';
import { HttpClientModule } from '@angular/common/http' //for HTTP Client
import { ItemService } from '../app/services/item.service'
import { MatTableModule } from '@angular/material/table'
import { Routes, RouterModule } from '@angular/router';
import { ItemCategoryBarComponent } from './components/item-category-bar/item-category-bar.component';
import { SearchComponent } from './components/search/search.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartBadgeComponent } from './components/cart-badge/cart-badge.component';
import { CartComponent } from './components/cart/cart.component';
import { PurchaseComponent } from './components/purchase/purchase.component';
import { ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  { path: 'search/:query', component: ItemsListComponent },
  { path: 'cart', component: CartComponent },
  { path: 'items/:id', component: ItemDetailsComponent },
  { path: 'category/:id', component: ItemsListComponent },
  { path: 'category', component: ItemsListComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'purchase', component: PurchaseComponent },
  { path: '', redirectTo: '/items', pathMatch: 'full' },
  { path: '**', redirectTo: '/items', pathMatch: 'full' },

]

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemCategoryBarComponent,
    SearchComponent,
    ItemDetailsComponent,
    CartBadgeComponent,
    CartComponent,
    PurchaseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    NgbModule,
    ReactiveFormsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]

})
export class AppModule { }
