import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { ShoppingCartService } from './services/shopping-cart/shopping-cart.service';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    ShopPageComponent,
    PizzaItemComponent,
    ShoppingCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ShoppingCartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
