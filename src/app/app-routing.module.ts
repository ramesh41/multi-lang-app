import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RajbharHistoryComponent } from './core-components/rajbhar-history/rajbhar-history.component';
import { PhotoGalleryComponent } from './core-components/photo-gallery/photo-gallery.component';
import { SocialWorkerComponent } from './core-components/social-worker/social-worker.component';
import { ContactUsComponent } from './core-components/contact-us/contact-us.component';
import { ErrorC404Component } from './core-components/error-c404/error-c404.component';

const routes: Routes = [
  { path: '', redirectTo: 'history', pathMatch: 'full' },
  { path: 'about-us', component: ErrorC404Component },
  { path: 'history', loadChildren: () => import('./core-components/rajbhar-history/rajbhar-history.module').then(m => m.RajbharHistoryModule) },
  { path: 'social-worker', loadChildren: () => import('./core-components/social-worker/social-worker.module').then(m => m.SocialWorkerModule) },
  { path: 'contact-us', loadChildren: () => import('./core-components/contact-us/contact-us.module').then(m => m.ContactUsModule) },
  { path: 'gallery', component: PhotoGalleryComponent },
  { path: '**', component: ErrorC404Component },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
