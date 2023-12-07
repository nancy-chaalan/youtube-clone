import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStoriesComponent } from './all-stories/all-stories.component';
import { storiesRoutingModule } from './stories-routing.module';


@NgModule({
  declarations: [
    AllStoriesComponent
  ],
  imports: [
    CommonModule,
    storiesRoutingModule,
  ]
})


export class StoriesModule { }
