import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Video } from 'src/app/Classes';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.css']
})
export class AllvideosComponent {
  
  done:boolean = false;
  
  constructor(private router : Router, private service: VideoServiceService){
    setTimeout(() => {  this.done = false }, 1000);
  }


  //getting the array filled from the service 
allVideos: any [] = this.service.allVideos;

// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}



  


}
