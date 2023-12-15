import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
 
  constructor(private router: Router){

  }

  language : any;

  ngOnChanges(): void {
   this.language = localStorage.getItem('lang');
   console.log("on changes"+ this.language)
  }

  
isArabic(): boolean {
    if (localStorage.getItem('lang') == 'ar')
        return true;
     else
       return false;
 }
 

    // function for routing
moveToRoute(route:string){
  this.router.navigate([route]).then(() => {window.scrollTo(0, 0)});
}


  sidebarOpen = false;

toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

// Close the sidebar when clicking on the overlay
closeSidebar() {
  this.sidebarOpen = false;
}




// Define the isActive method to color the links in the sidebar
isActive(route: string): boolean {
    return this.router.isActive(route, true);
  }
  
  

  handleDocumentClick() {

    const sidebarNavWrapper = document.querySelector('.sidebar-nav-wrapper') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;
    const mainWrapper = document.querySelector('.main-wrapper') as HTMLElement;

    if (document.body.clientWidth < 1200) {
      // Check if the clicked element is not within the sidebar
        // Close the sidebar
        sidebarNavWrapper.classList.remove('active');
        overlay.classList.remove('active');
        mainWrapper.classList.remove('active');
      }

  }


}