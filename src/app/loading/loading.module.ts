import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoriesLoadComponent } from './stories-load/stories-load.component';
import { VideosLoadComponent } from './videos-load/videos-load.component';
import { ShimmerComponent } from './shimmer/shimmer.component';

@NgModule({
  declarations: [
    StoriesLoadComponent,
    VideosLoadComponent,
    ShimmerComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    ShimmerComponent,
  ]
})


export class LoadingModule { }
