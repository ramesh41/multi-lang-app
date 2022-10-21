import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RajbharHistoryComponent } from './rajbhar-history.component';

const routes: Routes = [
  {path: '', component: RajbharHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RajbharHistoryRoutingModule { }
