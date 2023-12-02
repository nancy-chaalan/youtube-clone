import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosLoadComponent } from './videos-load/videos-load.component';
import { StoriesLoadComponent } from './stories-load/stories-load.component';
import { ShimmerComponent } from './shimmer/shimmer.component';


const routes: Routes = [
  {path:'vid', component:VideosLoadComponent},
  {path:'story', component:StoriesLoadComponent},
  {path: 'shimmer', component:ShimmerComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class loadingRoutingModule {


 }
