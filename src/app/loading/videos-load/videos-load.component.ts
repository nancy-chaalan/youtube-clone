import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-videos-load',
  templateUrl: './videos-load.component.html',
  styleUrls: ['./videos-load.component.css']
})
export class VideosLoadComponent {
 
  constructor(private router : Router, private service: VideoServiceService){

  }

  //getting the array filled from the service 
allVideos: any [] = this.service.allVideos;

// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}


  
}
