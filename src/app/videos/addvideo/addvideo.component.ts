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

        const imgRatioNb = img.height / img.width;
        const imgRatio = Math.floor(imgRatioNb*100)/100;
  
        console.log(imgRatio)

        if (    img.width > maxSizeWidth
             || img.height > maxSizeHeight 
             || img.width < 250
             || img.height < 250  ) {

          this.showAlert=true;
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
  
          // Set canvas dimensions to the specified maximum width and height
          canvas.width = maxSizeWidth;
          canvas.height = maxSizeHeight;
    
          // Check if the image ratio matches the target ratio
    if (imgRatio === targetRatio) {
            context.drawImage(img, 0, 0, maxSizeWidth, maxSizeHeight);
            this.selectedImage = canvas.toDataURL('image/png');
      } 
          


else {

      if(img.width > img.height) {

        this.selectedImage = canvas.toDataURL('image/png');

        const drawHeight = img.height;
        const offsetY = (maxSizeHeight - drawHeight) / 2;
 
        context.fillStyle = 'black';
        context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);
 
        context.drawImage(img, 0, offsetY, maxSizeWidth, img.height);
         this.selectedImage = canvas.toDataURL('image/png');
       } 


    else {

           this.selectedImage = canvas.toDataURL('image/png');
            const drawWidth = img.width;
            const offsetx = (maxSizeWidth - drawWidth) / 2;
    
            // Fill the canvas with a black background
            context.fillStyle = 'black';
            context.fillRect(0, 0, maxSizeWidth, maxSizeHeight);
    
            // Draw the image on the canvas with the calculated offset
            context.drawImage(img, offsetx, 0, img.width, maxSizeHeight);
            this.selectedImage = canvas.toDataURL('image/png');
    }


           
          }  } };
  
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
