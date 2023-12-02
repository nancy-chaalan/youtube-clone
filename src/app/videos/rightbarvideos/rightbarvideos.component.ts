import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from 'src/app/services/video-service.service';

@Component({
  selector: 'app-rightbarvideos',
  templateUrl: './rightbarvideos.component.html',
  styleUrls: ['./rightbarvideos.component.css']
})
export class RightbarvideosComponent {

  constructor(private service : VideoServiceService, private router:Router){}


  alllvideos : any [] = this.service.allVideos;

  
// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}

}
