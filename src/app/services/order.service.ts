import {Injectable} from '@angular/core'
import {orderData} from '../dataModel/orderData';
import {OrderListModel } from '../dataModel/orderListModel';
import {OrderDetailsModel} from '../dataModel/orderDetailsModel';
import {orderDetails} from '../dataModel/orderDetailsData';
import { Observable } from 'rxjs';


@Injectable({providedIn:'root'})

export class OrderService{

orderData: OrderListModel[];
constructor(){}

getOrderList():Observable<OrderListModel[]>{
    let data = Observable.create((obs)=>{
        obs.next(orderData);
    })
return data;
}

getOrderDetails(orderId):Observable<OrderDetailsModel>{
    let data = Observable.create((obs)=>{
        obs.next(orderDetails);
    })
return data;
}

}