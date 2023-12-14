import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateChannelComponent } from './create-channel/create-channel.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateChannelComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class ChannelModule { }
