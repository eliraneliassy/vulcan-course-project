import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedComponent } from './feed/feed.component';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { ItemPreviewResolver } from './item-preview.resolve';


const routes: Routes = [
  { path: '', component: FeedComponent },
  {
    path: 'item/:id', component: ItemPreviewComponent,
    resolve: { item: ItemPreviewResolver },
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeedRoutingModule { }
