import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryServiceService {

  constructor() { }

  allStories: any [] = [
    {id: 1, videoID:"2X5g0nUojA4", img:"./assets/videos/img1.png",title:"Create 3D Site with Spline and React - Full Course", channelName:"Channel", date:"12/1/2023", views:12,smallImg: 'assets/videos/profilePic/a.png', likes: 460, comments: 460, subscribers: 43},
    {id: 2, videoID:"5bTw_Q9po_s", img:"./assets/videos/img2.png",title:"bla bla bla", channelName:"youtube", date:"1/7/2023", views:17,smallImg: 'assets/videos/profilePic/b.png',  likes: 12,  comments: 460,subscribers: 43},
    {id: 3, videoID:"KgA2TpKJC30", img:"./assets/videos/img3.png",title:"Citet - Full Course",  channelName:"word", date:"5/1/2023",  views:13,smallImg:'assets/videos/profilePic/a.png', likes: 4,  comments: 460,subscribers: 63},
    {id: 4, videoID:'472324', img:"./assets/videos/img4.png",title:"Create Site with Spline and React - Full Course", channelName:"excel", date:"9/1/2023", views:22,smallImg: 'assets/videos/profilePic/c.png', likes: 900, comments: 460, subscribers: 3453},
    {id: 5, videoID:'472324', img:"./assets/videos/img5.png",title:"3D Site with Spline and React - Full Course", channelName:"hishd", date:"7/1/2023", views:62,smallImg: 'assets/videos/profilePic/d.png',  likes: 10,  comments: 460, subscribers: 32},
    {id: 6, videoID:'472324', img:"./assets/videos/img6.png",title:"Site with Spline and React - Full Course", channelName:"quorey", date:"12/1/2020", views:32,smallImg: 'assets/videos/profilePic/a.png', likes: 1830,  comments: 460, subscribers: 82},
    {id: 7, videoID:'472324', img:"./assets/videos/img7.png",title:"with Spline and React - Full Course", channelName:"filtew", date:"12/1/2006", views:512,smallImg: 'assets/videos/profilePic/a.png', likes: 683,   comments: 460, subscribers: 108},
    {id: 8, videoID:'472324', img:"./assets/videos/img8.png",title:"Spline and React - Full Course", channelName:"sdcee", date:"17/1/2022", views:132,smallImg: 'assets/videos/profilePic/b.png', likes: 8,  comments: 460, subscribers: 102834},
    {id: 9, videoID:'472324', img:"./assets/videos/img9.png",title:"Cline and React - Full Course",  channelName:"chaneel L", date:"1/1/2013",  views:1332,smallImg:'assets/videos/profilePic/a.png', likes: 40,  comments: 460, subscribers: 234},
  ]
  
  // indexToFind: Video = {id: 1, img:'',title:'', channelName:'', date:'', views:0, smallImg: ''};
  arrayNeeded: any [] = [];
  

  // DONE get Medicine by id
  public GetStoryById(id:number){
  
    for(let i = 0 ; i < this.allStories.length ; i++){
      if(this.allStories[i].id == id)
           this.arrayNeeded = this.allStories[i];
    }
        return this.arrayNeeded;
      }
  
}
