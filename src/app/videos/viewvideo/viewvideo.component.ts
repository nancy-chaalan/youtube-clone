import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Video } from 'src/app/Classes';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-viewvideo',
  templateUrl: './viewvideo.component.html',
  styleUrls: ['./viewvideo.component.css']
})
export class ViewvideoComponent{

  // title = "PAPAYA";
  // rating: number = 0;
  
  // Comments : any;
  // alllvideos : any [] = this.service.allVideos;

  
  // viewedVideo : any =  {id: 0, videoID: '', img:'',title:'', channelName:'', date:'', views:0, smallImg: ''};
  
  // videoUrl: any;
  // sanitizedVideoID: any;
  

  // constructor(private router:Router, private fb: FormBuilder, private route: ActivatedRoute, private service: VideoServiceService,private sanitizer: DomSanitizer){
  // }


// function for editing the selected item
// moveToRouteWithIndex(route:string, id:number){
//   this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
// }


// Assuming viewedVideo.videoID is your dynamic video ID


// ngOnInit(): void {
// this.route.queryParams.subscribe(params => {
//   const productid = params['id'];
//   this.getVidByID(productid);
// })

// }


// getVidByID(id : number){
// this.viewedVideo = this.service.GetVideoById(id);
// console.log(this.viewedVideo.videoID);
// this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.viewedVideo.videoID);
// }




}