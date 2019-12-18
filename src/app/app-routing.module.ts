
import { ItemPreviewResolver } from './services/item-preview.resolve';
import { ItemPreviewComponent } from './item-preview/item-preview.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', loadChildren: () => import('./auth/auth.module')
      .then(m => m.AuthModule)
  },

  { path: 'feed', component: FeedComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'item/:id', component: ItemPreviewComponent,
    resolve: { item: ItemPreviewResolver }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
