import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'view1',
    loadChildren: () => import('./view1/view1.module').then(m => m.View1PageModule)
  },
  {
    path: '',
    redirectTo: '/global/view1',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class GlobalPageRoutingModule { }
