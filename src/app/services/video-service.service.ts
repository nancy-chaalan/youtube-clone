import { Injectable, OnInit } from '@angular/core';
import { Video } from '../Classes';

@Injectable({
  providedIn: 'root'
})
export class VideoServiceService{


  constructor() { 
  
  }

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
  

arrayNeeded: any [] = [];

// DONE get Medicine by id
public GetVideoById(id:number){

  for(let i = 0 ; i < this.allVideos.length ; i++){
    if(this.allVideos[i].id == id)
         this.arrayNeeded = this.allVideos[i];
  }
      return this.arrayNeeded;
}


public addVideo(medicine:Video){
}




resizeImages(array : any []): any [] {

 let tempArray: any = [];

  const maxSizeWidth = 1920;
  const maxSizeHeight = 1080;
  const targetRatio = 0.56;


  array.forEach((vid) => {
  
    const img = new Image();

    img.onload = () => {

      const imgRatio = img.height / img.width;

      
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');

   
      if (!context) {
        console.error('Unable to get 2D rendering context.');
        return;
      }

     
      canvas.width = maxSizeWidth;
      canvas.height = maxSizeHeight;
     

  if (Math.abs(imgRatio - targetRatio) < 0.01) {
        context.drawImage(img, 0, 0, maxSizeWidth, maxSizeHeight);
   } 
      

    else {
      const scaleFactor = Math.min(maxSizeWidth / img.width, maxSizeHeight / img.height);

      const drawWidth = img.width * scaleFactor;
      const drawHeight = img.height * scaleFactor;

      const offsetX = (maxSizeWidth - drawWidth) / 2;
      const offsetY = (maxSizeHeight - drawHeight) / 2;

        context.fillStyle = 'black';
        context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);

        context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      }

      vid.img = canvas.toDataURL('image/png');
    };

    img.src = vid.img;

     tempArray.push(vid);
   
  });
  return tempArray;
} 


}