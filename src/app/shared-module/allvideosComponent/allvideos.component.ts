import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from 'src/app/services/video-service.service';

// declare const require: any;
// const Crop = require('tinycrop');

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.css']
})
export class AllvideosComponent implements OnInit{
  
  done:boolean = false;

  allVideos : any [] = [];
  
constructor(private router : Router, private service: VideoServiceService){
}


// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}


ngOnInit(): void {
  // this.resizeImages();
  //  this.service.resizeImages();
  setTimeout(() => {  this.done = false }, 1000);
  // this.resizeImages();
  this.allVideos = this.service.allVideos;

}







}