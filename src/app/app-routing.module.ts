import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {OrdersComponent} from './orders/orders.component';
import {OrderDetailsComponent} from './order-details/order-details.component';

const routes: Routes = [
  {path:'orders', component:OrdersComponent},
  {path:'orderDetails/:orderId', component:OrderDetailsComponent}
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
