import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminPageComponent } from './pages/adminpage/adminpage.component';
import { ShopPageComponent } from './pages/shoppage/shoppage.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    ShopPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
