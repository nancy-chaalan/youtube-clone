import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideosRoutingModule } from './videos-routing.module';
import { AllvideosComponent } from './allvideos/allvideos.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { RightbarvideosComponent } from './rightbarvideos/rightbarvideos.component';
import { ShowVideoComponent } from './show-video/show-video.component';
import { AppModule } from '../app.module';
import { AddvideoComponent } from './addvideo/addvideo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    ViewvideoComponent,
    AllvideosComponent,
    RightbarvideosComponent,
    ShowVideoComponent,
    AddvideoComponent,
  ],

  imports: [
  CommonModule,    
  SharedModuleModule,
  VideosRoutingModule,
  ReactiveFormsModule,
  TranslateModule
  ],

  exports: [
  ],
  
})

export class VideosModule { }
