import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-show-video',
  templateUrl: './show-video.component.html',
  styleUrls: ['./show-video.component.css']
})
export class ShowVideoComponent {


  isThumbsUpClicked: boolean = false;
  thumbsUpCount: number = 0;

  isThumbsDownClicked: boolean = false;

  title = "PAPAYA";
  rating: number = 0;
  
  Comments : any;

  viewedVideo : any =  {id: 0, videoID: '', img:'',title:'', channelName:'', date:'', views:0, smallImg: '', subscribers: 0};

  videoUrl: any;
  sanitizedVideoID: any;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private service: VideoServiceService,private sanitizer: DomSanitizer){

    // this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.viewedVideo.videoID);
    // this.sanitizedVideoID = this.sanitizer.bypassSecurityTrustResourceUrl(this.viewedVideo.videoID);
    // console.log(this.videoUrl)
  }

  // Assuming viewedVideo.videoID is your dynamic video ID


handleThumbsUpClick() {
    this.isThumbsUpClicked = !this.isThumbsUpClicked;
    // this.thumbsUpCount += this.isThumbsUpClicked ? 1 : -1;
  }

  handleThumbsDownClick() {
    this.isThumbsDownClicked = !this.isThumbsDownClicked;
    // this.thumbsUpCount += this.isThumbsUpClicked ? 1 : -1;
  }


ngOnInit(): void {
  this.route.queryParams.subscribe(params => {
    const productid = params['id'];
    this.getVidByID(productid);
  })
  

}


getVidByID(id : number){
  this.viewedVideo = this.service.GetVideoById(id);
  // console.log(this.viewedVideo.videoID);
  this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/'+this.viewedVideo.videoID);
}



//commenting
comment (angForm1: FormGroup) { 
  // ViewPostID
// var storedValueUser = localStorage.getItem('currentUserID');

//   if (storedValueUser !== null) 
  // {
  //    var UserID = parseInt(storedValueUser, 10); // Use parseFloat() if a decimal number
   
  //   this.api.CommentUser(UserID , this.postId, angForm1.value.content )
  //     .pipe(first()).subscribe(

  //       data => {  
  //         alert ("Your message was sent! Wait for our reply.");
  //           },
     
  //       error => {  alert ("error : Please fill the empty fields");  });   
  //   }
  }


  

onStarClick(rating: number) {
  this.rating = rating;
}



saveReview() {
  // var storedValueUser = localStorage.getItem('currentUserID');

  //  if(storedValueUser !== null) 
  // {
  //    var UserID = parseInt(storedValueUser, 10); // Use parseFloat() if a decimal number
  // this.api.RateUser(UserID , this.postId, this.rating).pipe(first()).subscribe(
  //   data => {  alert ("you rated this post " + this.rating);   
  // },
   
  //   error => { alert ("already added");  }); 
  // }

 }


}