import { Component, OnInit } from '@angular/core';

import { FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { Video } from 'src/app/Classes';
import { VideoServiceService } from 'src/app/services/video-service.service';

declare const require: any;
const Crop = require('tinycrop');

@Component({
  selector: 'app-addvideo',
  templateUrl: './addvideo.component.html',
  styleUrls: ['./addvideo.component.css']
})

export class AddvideoComponent implements OnInit {

  myForm: FormGroup;

  video: any [] =[];

  videoTitle: string = '';
  videoDescription: string = '';

  showAlert : boolean = false;

  currentDate: Date = new Date();

  selectedImage: string = '../assets/selected.jpg'; 
  // To store the selected image data URL

  showProgressBar:boolean = false;
  message:string = "";
  error:string = "";

  messageDosageEmpty:boolean= false;
  isSomethingEmpty: boolean = false;
  messageCategoryEmpty:boolean = false;
  dosageAlreadyExist:boolean = false;
  categoryAleadyExist: boolean = false;

  
constructor(private fb: UntypedFormBuilder, private service: VideoServiceService){
    
    this.myForm  = this.fb.group({
      img: ['',Validators.required],
      title: ['',Validators.required],
      description: ['',Validators.required],
      channelName: ['',Validators.required],
      date: ['',Validators.required],
      smallImg: ['',Validators.required],
      videoTime: ['', Validators.required]
    });

}


onFieldChange(fieldName: string, value: string) {
      //  this.video![fieldName] = value
}


ngOnInit() {

}


removeAlert(){
  this.showAlert = false;
}


onFileChange(event: any): void {
    const fileInput = event.target;
    const file = fileInput.files?.[0];

    if (file) {
      const maxSizeWidth = 1920;
      const maxSizeHeight = 1080;
      const targetRatio = 0.56;

   // Create an image element to get the natural dimensions
      const img = new Image();
  
      img.onload = () => {
  
        const imgRatio = img.height / img.width;
  
        
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
  
     
        if (!context) {
          console.error('Unable to get 2D rendering context.');
          return;
        }
  
        // Set canvas dimensions to the specified maximum width and height
        canvas.width = maxSizeWidth;
        canvas.height = maxSizeHeight;
  
        // Check if the image ratio matches the target ratio
  
  // If the image's height-to-width ratio is very close to the target ratio (0.56), we can use it as is.
  // If not, we need to resize the image to fit it within the canvas.
      if (Math.abs(imgRatio - targetRatio) < 0.01) {
          context.drawImage(img, 0, 0, maxSizeWidth, maxSizeHeight);
          this.selectedImage = canvas.toDataURL('image/png');
      } 
        
  
      else {
  
        //Calculate a scaling factor (scaleFactor) that ensures the entire image fits within the canvas.
        // scaleFactor to calculate the scale needed to fit the entire image within the canvas. 
        const scaleFactor = Math.min(maxSizeWidth / img.width, maxSizeHeight / img.height);
  
        // The drawWidth and drawHeight are then calculated based on this scale, and the image is drawn accordingly.
        //  This should ensure that the entire image fits within the canvas without cropping. 
        // Adjust the targetRatio value as needed.   
        //Determine the dimensions (drawWidth and drawHeight) of the resized image based on this scaling factor.
          const drawWidth = img.width * scaleFactor;
          const drawHeight = img.height * scaleFactor;
  
  
          //Calculate the offsets (offsetX and offsetY) to center the resized image within the canvas.
          const offsetX = (maxSizeWidth - drawWidth) / 2;
          const offsetY = (maxSizeHeight - drawHeight) / 2;
  
          context.fillStyle = 'black';
          context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);
  
          context.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
          this.selectedImage = canvas.toDataURL('image/png');
        }
    }
  
      // Set the source of the image element to the selected file
      img.src = URL.createObjectURL(file);
    }
  }
  


vid : Video = new Video();

onSubmit(): void {

    this.error = ""
    this.message = ""

    // if(this.vid.title == '' || this.vid.location == '' || this.item.notes == ''|| this.item.itemValidity == 0 ||
    //     this.item.quantity == 0 || this.item.variants?.length == 0 || this.item.categories.length == 0)
    // {
    //   this.isSomethingEmpty = true;
    //   return
    // }

    // this.showProgressBar = true;
    // this.service.addVideo(this.vid).subscribe({
    //   next:(response:any) => {
    //     this.error = "";
    //     this.message = response.data;
    //     this.showProgressBar = false;
    //     this.myForm.reset();
    //     this.isSomethingEmpty = false
    //   },

    //   error:(error:any) => {
    //     this.error = error;
    //     this.showProgressBar = false;
    //   },

    //   complete:() => {}
    // });
  }






}
