import { Component, HostListener, NgZone, OnInit } from '@angular/core'

import { Item } from './item'
import { ItemService } from './item.service'
import { DemoSharedFirebaseMessaging} from '../service';
import { HttpContent, Page } from '@nativescript/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>
  demo: DemoSharedFirebaseMessaging;
  
  constructor(private itemService: ItemService, private page: Page,  private ngZone: NgZone, private httpClient: HttpClient) {

   // page.on("navigatedTo", ()=> this.load());
  }

  ngOnInit(): void {
    this.items = this.itemService.getItems()
    this.demo = new DemoSharedFirebaseMessaging();
  }

  clickit() {
    this.demo.testIt2(this.ngZone, this.httpClient).finally(()=>console.log("FINALLY"));
  }
}
