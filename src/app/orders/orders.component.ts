import { Component, OnInit, ViewChild } from '@angular/core';
import { OrderService } from "src/app/services/order.service";
import { OrderListModel } from "src/app/dataModel/orderListModel";
import { Router } from "@angular/router";
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from "@angular/material/table";


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  // orderList: OrderListModel[];
  orderListColumns: any;
  status: any;
  orderList = new MatTableDataSource<OrderListModel[]>();

  constructor(private orderService: OrderService, private router: Router) { }

 @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.orderList.paginator = this.paginator;
  }
  ngOnInit(): void {
    this.orderListColumns = [];
    this.status = ['Order Received', 'Preparing', 'Ready to serve'];
    this.orderService.getOrderList().subscribe(data => {

      for (let key in data[0]) {
        if (key !== 'orderId')
          this.orderListColumns.push(key)
      }
      this.orderList = new MatTableDataSource<OrderListModel[]>(data);
    })

  }
  gotoOrderDetails(event, row: OrderListModel) {

    this.router.navigate(['/orderDetails/' + row.orderId])
  }

  changeStatus(event, element: OrderListModel) {
    event.stopPropagation();
    let statusIndex = this.status.indexOf(element.orderStatus);
    if (statusIndex !== this.status.length - 1) {
      element.orderStatus = this.status[statusIndex + 1];
    }
  }
}
