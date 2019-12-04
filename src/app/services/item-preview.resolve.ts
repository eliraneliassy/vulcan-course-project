import { switchMap } from 'rxjs/operators';
import { FeedService } from './feed.service';
import { Item } from './../item.interface';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, combineLatest, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemPreviewResolver implements Resolve<Item> {

    constructor(
        private feedService: FeedService
    ) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Item | Observable<Item> | Promise<Item> {
        return this.feedService.getFeed(0)
            .pipe(
                switchMap((items: Item[]) => {
                    const item: Item = items.find(x => x._id === route.params.id);
                    return of(item);
                })
            );
    }

}
