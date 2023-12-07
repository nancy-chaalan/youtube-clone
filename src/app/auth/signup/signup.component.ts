import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  report:File | null = null;
  reportFileName:string = "";


  imageUrl: string = '../../../assets/insert-image-icon-14.jpg';

  constructor(){}


  // handleFileInput(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const selectedFile = inputElement.files ? inputElement.files[0] : null;
  
  //   if (selectedFile) {
  //     const fileName = selectedFile.name;
  //     const fileExtension = fileName.split('.').pop()!.toLowerCase();
  
  //     // Check file extension
  //     if (fileExtension === 'pdf' || fileExtension === 'docx' || fileExtension === 'jpeg' || fileExtension === 'png') {
  //         this.report = selectedFile;
  //         this.reportFileName = fileName;
  
  //   }else{
  //     this.report = null;
  //   }
  // }
  // }



  openFileExplorer(): void {
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput?.click();
  }

  handleFileInput(event: any): void {
    const selectedFile = event.target.files[0];
    
    // Assuming you want to display the selected image directly without uploading to a server
    const imageUrl = URL.createObjectURL(selectedFile);
    
    // Update the image source
    this.imageUrl = imageUrl;

    // Optionally: You may want to reset the file input to allow selecting the same file again
    const fileInput = document.querySelector('input[type="file"]') as HTMLInputElement;
    fileInput.value = '';

    // Add your logic to handle the selected file, e.g., upload it to your server.
  }

}
