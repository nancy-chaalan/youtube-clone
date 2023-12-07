import { Component } from '@angular/core';

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})
export class AddvideoComponent {
  
  videoTitle: string = '';
  videoDescription: string = '';

  onSubmit() {
    // Implement video upload logic here
    console.log('Video Title:', this.videoTitle);
    console.log('Video Description:', this.videoDescription);
    // You can add further logic to handle the video upload process
  }
}

