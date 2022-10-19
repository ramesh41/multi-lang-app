import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RajbharHistoryComponent } from './core-components/rajbhar-history/rajbhar-history.component';
import { PhotoGalleryComponent } from './core-components/photo-gallery/photo-gallery.component';
import { SocialWorkerComponent } from './core-components/social-worker/social-worker.component';
import { ContactUsComponent } from './core-components/contact-us/contact-us.component';

const routes: Routes = [
  { path: 'history', component: RajbharHistoryComponent },
  { path: 'photo-gallery', component: PhotoGalleryComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '', redirectTo: 'history', pathMatch: 'full' },
  { path: '**', component: SocialWorkerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
