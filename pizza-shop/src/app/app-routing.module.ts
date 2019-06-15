import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';

const routes: Routes = [
  {path: 'admin', component: AdminPageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: '**', redirectTo: '/shop'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
