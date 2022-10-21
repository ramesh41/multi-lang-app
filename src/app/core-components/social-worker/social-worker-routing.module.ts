import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialWorkerComponent } from './social-worker.component';

const routes: Routes = [
  { path: '', component: SocialWorkerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialWorkerRoutingModule { }
