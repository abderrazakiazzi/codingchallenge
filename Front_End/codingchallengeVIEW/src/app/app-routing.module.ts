import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './services/authentiGuard';
import { ShopComponent } from './shop/shop.component';
import { PreferedShop } from './Shared/preferedShop';
import { PreferedshopComponent } from './preferedshop/preferedshop.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'shops', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'preferedShops', component: PreferedshopComponent, canActivate: [AuthGuard] },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 



}
