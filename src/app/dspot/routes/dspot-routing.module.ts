import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DspotViewComponent } from '../containers/dspot-view/dspot-view.component';

const routes : Routes = [
  {
    path: '',
    component : DspotViewComponent
  },
  {
    path: '**',
    component : DspotViewComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DspotRoutingModule { }
