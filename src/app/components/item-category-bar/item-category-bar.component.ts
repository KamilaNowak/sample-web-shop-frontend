import { Component, OnInit } from '@angular/core';
import { ItemCategory } from '../../utils/item-category'
import { ItemService } from 'src/app/services/item.service';

@Component({
  selector: 'app-item-category-bar',
  templateUrl: './item-category-bar.component.html',
  styleUrls: ['./item-category-bar.component.css']
})
export class ItemCategoryBarComponent implements OnInit {

  itemCategoryList: ItemCategory[]
  constructor(private itemService: ItemService) { }

  ngOnInit(): void {
    this.getItemCategoryList()
  }

  getItemCategoryList(){

    this.itemService.getItemCategoryList().subscribe(
      data => {
        this.itemCategoryList = data
      }
    )
  }
}
