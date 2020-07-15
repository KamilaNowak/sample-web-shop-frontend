import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { Item } from 'src/app/utils/item';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component-content.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemsList();
  }
  getItemsList() {
    this.itemService
        .getItems()
        .subscribe(response => {
            this.items = response
        })
  }

}
