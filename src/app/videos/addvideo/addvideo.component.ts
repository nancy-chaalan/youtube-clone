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

      // Create an image element to get the natural dimensions
      const img = new Image();

      img.onload = () => {

        if (img.width > maxSizeWidth || img.height > maxSizeHeight) {
          // alert('The selected image dimensions are too large. Please choose an image with dimensions less than 16:9 ratio.');
         this.showAlert=true;
          // Clear the input field to allow the user to choose a different image
          fileInput.value = '';
          this.selectedImage = '../assets/selected.jpg';
        } 


        
        else {
          
          this.showAlert=false;

          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
  
          if (!context) {
            console.error('Unable to get 2D rendering context.');
            return;
          }
  
          // Set canvas dimensions to maintain specified width and height
          canvas.width = maxSizeWidth;
          canvas.height = maxSizeHeight;
  
          // Calculate the position to center the image
          const offsetX = (maxSizeWidth - img.width) / 2;
          const offsetY = (maxSizeHeight - img.height) / 2;
  
          // Draw the image on the canvas with black background
          context.fillStyle = 'black';
          context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);
          context.drawImage(img, offsetX, offsetY);
  
          // Convert canvas content to data URL and set as selectedImage
          this.selectedImage = canvas.toDataURL('image/png');

        }
      };

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
