import { Component } from '@angular/core';
import { StoryServiceService } from 'src/app/services/story-service.service';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent {

  constructor(private service : StoryServiceService){}

  storiesArray : any [] = this.service.allStories ;

}
