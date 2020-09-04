import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/utils/item';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../services/item.service'
import { CartItem } from '../../utils/CartItem'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  item: Item = new Item();

  constructor(private itemService: ItemService, private cartService: CartService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        this.getItemDetails()
      }
    )
  }

  getItemDetails() {
    const itemId: number = +this.route.snapshot.paramMap.get('id')

    this.itemService.getItemById(itemId).subscribe(
      json => {
        this.item = json
        console.log(JSON.stringify(this.item))
      }
    )
  }
  addItemToCart(item: Item) {

    const cartItem = new CartItem(item)
    this.cartService.addItem(cartItem);

  }

}
