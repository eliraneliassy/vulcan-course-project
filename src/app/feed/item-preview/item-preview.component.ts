import { Item } from './../../shared/item.interface';


import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Data } from '@angular/router';


@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {

  item: Item;

  constructor(
    private route: ActivatedRoute) { }

  ngOnInit() {

    this.route.data.subscribe((data: Data) => {
      this.item = data.item;
    });


    // this.route.params.subscribe((params: Params) => {
    //   this.feedService.getFeed(0).subscribe((items: Item[]) => {
    //     this.item = items.find(x => x._id === params.id);
    //   });
    // });




  }

}
