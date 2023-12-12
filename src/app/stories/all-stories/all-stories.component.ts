import { Component, HostListener } from '@angular/core';
import { StoryServiceService } from 'src/app/services/story-service.service';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.css']
})
export class AllStoriesComponent {

  constructor(private service : StoryServiceService){}

  storiesArray : any [] = this.service.allStories ;
  currentIndex = 0;



  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event) {
    const windowHeight = window.innerHeight;
    const documentHeight = document.body.clientHeight;
    const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

    // Check if the user has scrolled to the bottom
    if (scrollPosition + windowHeight >= documentHeight) {
      this.nextImage();
    }
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.storiesArray.length;
  }









}
