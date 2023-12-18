import { Component, Input } from '@angular/core';
import { StoryServiceService } from 'src/app/services/story-service.service';

@Component({
  selector: 'app-stories-component',
  templateUrl: './stories-component.component.html',
  styleUrls: ['./stories-component.component.css']
})
export class StoriesComponentComponent {

 @Input() shorts: boolean = false;

  constructor(private service : StoryServiceService){}

  storiesArray : any [] = this.service.allStories ;



  
  isArabic(): boolean {
    if (localStorage.getItem('lang') == 'ar')
        return true;
     else
       return false;
  }
  
  
}

