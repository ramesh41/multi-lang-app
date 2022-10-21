import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocialWorkerRoutingModule } from './social-worker-routing.module';

console.log('Social Worker Module Loaded...');
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SocialWorkerRoutingModule
  ]
})
export class SocialWorkerModule { }
