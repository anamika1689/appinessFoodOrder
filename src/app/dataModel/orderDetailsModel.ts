export class OrderDetailsModel {
items:Item[];
customerName:string;
deliveryAddress: Address;
}

export class Item{
    itemName:string;
    itemPrice:number
}

export class Address {
    buildingNo: string;
    street: string;
    pincode: string;
    city: string;
    state: string
}