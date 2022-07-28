import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'item1',
        loadChildren: () => import('./item1/item1.module').then(m => m.Item1Module),
      },
      {
        path: 'item2',
        loadChildren: () => import('./item2/item2.module').then(m => m.Item2Module),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1/item1',
        pathMatch: 'full'
      }
    ])
  ],
})
export class Tab1PageModule { }
