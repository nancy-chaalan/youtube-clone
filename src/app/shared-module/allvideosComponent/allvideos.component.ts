import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoServiceService } from 'src/app/services/video-service.service';

declare const require: any;
const Crop = require('tinycrop');

@Component({
  selector: 'app-allvideos',
  templateUrl: './allvideos.component.html',
  styleUrls: ['./allvideos.component.css']
})
export class AllvideosComponent implements OnInit{
  
  selectedImage: string = '../assets/selected.jpg'; 
  done:boolean = true;
  
constructor(private router : Router, private service: VideoServiceService){
    setTimeout(() => {  this.done = false }, 1500);
  }

  //getting the array filled from the service 
allVideos: any [] = this.service.allVideos;

// function for editing the selected item
moveToRouteWithIndex(route:string, id:number){
  this.router.navigate( [route], { queryParams: { id: id } }).then(() => window.scrollTo(0,0));
}


ngOnInit(): void {
  // Call the image resizing function for each video
  this.resizeImages();
}


resizeImages(): void {
  // Define maximum dimensions for the images
  const maxSizeWidth = 1920;
  const maxSizeHeight = 1080;

  // go through each video Image in the allVideos array
  this.allVideos.forEach((vid) => {

    // Create a new Image object for each video
    const img = new Image();

    // Set up the onload event handler for the image
    img.onload = () => {

      // Check if the image dimensions exceed the maximum size
      if (img.width > maxSizeWidth || img.height > maxSizeHeight) {
        console.log('Image dimensions exceed maximum size.');
      } 
      

  

      // If the image is within the allowed dimensions
      else {
        // Create a canvas element and get its 2D rendering context
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');

        // Check if the 2D rendering context is available
        if (!context) {
          console.error('Unable to get 2D rendering context.');
          return;
        }

        // Set canvas dimensions to the specified maximum width and height
        canvas.width = maxSizeWidth;
        canvas.height = maxSizeHeight;

       


if( img.width > img.height){
       const offsetY = (maxSizeHeight - img.height) / 2;

       // Fill the canvas with a black background
       context.fillStyle = 'black';
       context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);

      // Draw the image on the canvas with the calculated offset
       context.drawImage(img, 0, offsetY, maxSizeWidth, img.height);
 }


else if (img.width == maxSizeWidth && img.height == maxSizeHeight) {
        context.drawImage(img, maxSizeWidth, maxSizeHeight);
} 


else if( img.width < img.height){
       // Calculate the offset to center the image on the canvas
       const offsetX = (maxSizeWidth - img.width) / 2;

       // Fill the canvas with a black background
       context.fillStyle = 'black';
       context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);


      // Draw the image on the canvas with the calculated offset
       context.drawImage(img, offsetX, 0, img.width, maxSizeHeight);
      }
 
       // Convert canvas content to a data URL and set it as the new image source
       vid.img = canvas.toDataURL('image/png');

      }
    };




    // Set the source of the image element to the current image source
    img.src = vid.img;
  });
}




}
  

