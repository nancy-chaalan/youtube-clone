import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  
  done:boolean = true;


allVideos: any [] = [
    {id: 1, videoID:"2X5g0nUojA4", img:"./assets/videos/img2.png",title:"C3D Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 2, videoID:"5bTw_Q9po_s", img:"./assets/videos/img1.png",title:"bla bla bla", channelName:"youtube", date:"1/7/2023", views:17,smallImg: 'assets/videos/profilePic/b.png',  videoTime: '12:30', subscribers: 43, likes: 1200},
    {id: 3, videoID:"KgA2TpKJC30", img:"assets/videos/img3.png",title:"Create 3D Site with Spline and React - Full Course",  channelName:"word", date:"5/1/2023",  views:13,smallImg:'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 63, likes: 3002},
    {id: 4, videoID:"5bTw_Q9po_s", img:"./assets/videos/img13.png",title:"bla bla bla", channelName:"youtube", date:"1/7/2023", views:17,smallImg: 'assets/videos/profilePic/b.png',  videoTime: '12:30', subscribers: 43, likes: 1200},
    {id: 5, videoID:"KgA2TpKJC30", img:"assets/videos/img11.jpeg",title:"Create 3D Site with Spline and React - Full Course",  channelName:"word", date:"5/1/2023",  views:13,smallImg:'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 63, likes: 3002},
    {id: 6, videoID:"2X5g0nUojA4", img:"./assets/videos/img8.png",title:"Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 7, videoID:"2X5g0nUojA4", img:"./assets/videos/img9.png",title:"Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 8, videoID:"2X5g0nUojA4", img:"./assets/videos/img4.png",title:"Full Course-C3D Site with Spline and React", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 9, videoID:"2X5g0nUojA4", img:"./assets/videos/img5.png",title:"React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 10, videoID:"2X5g0nUojA4", img:"./assets/videos/img6.png",title:"Cand React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 11, videoID:"2X5g0nUojA4", img:"./assets/videos/img7.png",title:"Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 12, videoID:"2X5g0nUojA4", img:"./assets/videos/img10.png",title:"Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 13, videoID:"2X5g0nUojA4", img:"./assets/videos/img12.png",title:"with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
  ]
  

constructor(private router : Router, private service: VideoServiceService){

}


// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}


editedArray: any []=[];


ngOnInit(): void {
  this.editedArray = this.service.resizeImages(this.allVideos);console.log(this.editedArray)
  // this.done = false
   setTimeout(() => {  this.done = false }, 1500);
}








}