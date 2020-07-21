import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service'
import { Item } from 'src/app/utils/item';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component-content.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Item[];
  categoryId: number;
  private
  constructor(private itemService: ItemService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>{
    this.getItemsList();
  });
}
  getItemsList() {

    const categoryIdValue : boolean = this.route.snapshot.paramMap.has('id')

    if(categoryIdValue) {
      this.categoryId = +this.route.snapshot.paramMap.get('id');
    }
    else {
      this.categoryId = 1;
    }
    this.itemService
        .getItems(this.categoryId)
        .subscribe(response => {
            this.items = response
        })
  }

}
