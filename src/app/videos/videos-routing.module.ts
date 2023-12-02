import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvideosComponent } from './allvideos/allvideos.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { RightbarvideosComponent } from './rightbarvideos/rightbarvideos.component';

const routes: Routes = [
  {path:'all', component:AllvideosComponent},
  {path:'view', component:ViewvideoComponent},
  {path:'bar', component:RightbarvideosComponent},
  // {path:'view', component:ViewvideoComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class VideosRoutingModule {


 }
