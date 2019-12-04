import { Item } from './../item.interface';
import { FeedService } from './../services/feed.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { forkJoin, combineLatest } from 'rxjs';

@Component({
  selector: 'app-item-preview',
  templateUrl: './item-preview.component.html',
  styleUrls: ['./item-preview.component.scss']
})
export class ItemPreviewComponent implements OnInit {

  item: Item;

  constructor(
    private feedService: FeedService,
    private route: ActivatedRoute) { }

  ngOnInit() {


    // this.route.params.subscribe((params: Params) => {
    //   this.feedService.getFeed(0).subscribe((items: Item[]) => {
    //     this.item = items.find(x => x._id === params.id);
    //   });
    // });

    combineLatest([this.route.params, this.feedService.getFeed(0)])
      .subscribe((res: any) => {
        this.item = res[1].find(x => x._id === res[0].id);
      });


  }

}
