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

allVideos: any [] = [
    {id: 1, videoID:"2X5g0nUojA4", img:"./assets/videos/img1.jpeg",title:"C3D Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 2, videoID:"5bTw_Q9po_s", img:"./assets/videos/img2.jpeg",title:"bla bla bla", channelName:"youtube", date:"1/7/2023", views:17,smallImg: 'assets/videos/profilePic/b.png',  videoTime: '12:30', subscribers: 43, likes: 1200},
    {id: 3, videoID:"KgA2TpKJC30", img:"assets/videos/img3.png",title:"Create 3D Site with Spline and React - Full Course",  channelName:"word", date:"5/1/2023",  views:13,smallImg:'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 63, likes: 3002},
    {id: 4, videoID:'472324', img:"./assets/videos/img33.png",title:"Site with Spline and React - Full Course", channelName:"excel", date:"9/1/2023", views:22,smallImg: 'assets/videos/profilePic/c.png', videoTime: '9:00', subscribers: 3453, likes: 2467},
    {id: 5, videoID:'472324', img:"./assets/videos/img35.png",title:"3ite with Spline and React - Full Course", channelName:"hishd", date:"7/1/2023", views:62,smallImg: 'assets/videos/profilePic/d.png',  videoTime: '1:15:30', subscribers: 32, likes: 312},
    {id: 6, videoID:'472324', img:"./assets/videos/img36.png",title:"Create 3D Site with Spline and React - Full Course", channelName:"quorey", date:"12/1/2020", views:32,smallImg: 'assets/videos/profilePic/a.png', videoTime: '18:30', subscribers: 82, likes: 12},
    {id: 7, videoID:'472324', img:"./assets/videos/img3.png",title:"3D Site with Spline and React - Full Course",  channelName:"chaneel L", date:"1/1/2013",  views:1332,smallImg:'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 234, likes: 72},
    {id: 8, videoID:"2X5g0nUojA4", img:"./assets/videos/img10.png",title:"Full Course-C3D Site with Spline and React", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 9, videoID:"2X5g0nUojA4", img:"./assets/videos/img11.jpeg",title:"React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 10, videoID:"2X5g0nUojA4", img:"./assets/videos/img12.png",title:"Cand React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 11, videoID:"2X5g0nUojA4", img:"./assets/videos/img13.png",title:"Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 12, videoID:"2X5g0nUojA4", img:"./assets/videos/img104.png",title:"Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
    {id: 13, videoID:"2X5g0nUojA4", img:"./assets/videos/img111.png",title:"with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', videoTime: '4:30', subscribers: 43, likes: 12},
   
  ]

  //getting the array filled from the service 
// allVideos: any [] = this.service.allVideos;

// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}

  
isArabic(): boolean {
  if (localStorage.getItem('lang') == 'ar')
      return true;
   else
     return false;
}

  
}
