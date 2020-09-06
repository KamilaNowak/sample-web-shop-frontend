import {Item} from "./item" 
export class CartItem{

    id:number;
    serialNumber: string;
    title: string;
    price: number;
    imageUrl: string;
    quantity:number;

    constructor(item:Item){
        this.id=item.id
        this.serialNumber=item.serialNumber
        this.title=item.title
        this.price= item.price
        this.imageUrl= item.imageUrl
        this.quantity=1;
    }
}
