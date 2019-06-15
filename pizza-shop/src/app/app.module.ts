import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { PizzaItemComponent } from './components/pizza-item/pizza-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    ShopPageComponent,
    PizzaItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
