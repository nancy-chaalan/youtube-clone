import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChannelServiceService {

  constructor() { }

  
  allChannels: any [] = [
    {id: 1, channelName:"Channel", img:"assets/videos/img1.jpeg", userName:"Course",  date:"12/1/2023", videos:12, views: 460, country: 'lebanon', subscribers: 43, About: "hello, i'm blabla uguughhb"},
    {id: 2, channelName:"youtube", img:"assets/videos/img2.jpeg",userName:"labla",  date:"1/7/2023", videos:17,  views: 12,   country: 'lebanon',subscribers: 43, About: "hello, i'm blabla uguughhb"},
    {id: 3, channelName:"word", img:"assets/videos/img3.png",userName:"bitet",   date:"5/1/2023",  videos:13, views: 4,  country: 'lebanon',subscribers: 63, About: "hello, i'm blabla uguughhb"},
    {id: 4, channelName:"excel", img:"assets/videos/img4.jpeg",userName:"Site",  date:"9/1/2023", videos:22, views: 900,  country: 'lebanon', subscribers: 3453, About: "hello, i'm blabla uguughhb"},
   ]
  
  
  // indexToFind: Video = {id: 1, img:'',title:'', channelName:'', date:'', views:0, smallImg: ''};
  arrayNeeded: any [] = [];
  

  // DONE get Medicine by id
public GetChannelById(id:number){
  
    for(let i = 0 ; i < this.allChannels.length ; i++){
      if(this.allChannels[i].id == id)
           this.arrayNeeded = this.allChannels[i];
    }
        return this.arrayNeeded;
  
    // let indexToFind = this.allVideos.find(item => item.id = id);
    // console.log("service "+ JSON.stringify(indexToFind));
    // return indexToFind;



  }
  
  

}
