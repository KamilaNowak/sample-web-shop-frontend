import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCategoryBarComponent } from './item-category-bar.component';

describe('ItemCategoryBarComponent', () => {
  let component: ItemCategoryBarComponent;
  let fixture: ComponentFixture<ItemCategoryBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemCategoryBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCategoryBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
