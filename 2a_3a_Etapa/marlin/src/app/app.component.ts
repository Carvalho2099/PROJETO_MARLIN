import { ItemService } from './service/item.service';
import { Item } from './models/item';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'marlin';

  item = {} as Item;
  items: Item[];

  constructor(private itemService: ItemService) {}
  
  ngOnInit(){
    this.getItems();
  }

  getItems(){
    this.itemService.getItems().subscribe((items:Item[]) => {
      this.items = items
      console.log(this.items)
    })
  }
  saveItem(){
    this.itemService.saveItem(this.item).subscribe(() => {
 
    })
  }


}
