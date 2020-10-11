import { Component, OnInit } from '@angular/core';
import { OrderService } from "src/app/services/order.service";
import { OrderDetailsModel } from "src/app/dataModel/orderDetailsModel";
import { ActivatedRoute } from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId: any;
  totalPrice:number;
orderDetails:OrderDetailsModel;
  constructor(private order:OrderService, private route:ActivatedRoute, private _location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(data=>{
      this.orderId=data.orderId;
      this.order.getOrderDetails(this.orderId).subscribe(data=>{
        this.orderDetails = data;
        let items:any=[];
        items=this.orderDetails.items;
        this.totalPrice = items.reduce((sum,el)=>sum=sum+el.itemPrice,0);
        console.log('orderDetails',this.orderDetails,items)
      })
    })

  }
goBack(){
this._location.back();
}
}
