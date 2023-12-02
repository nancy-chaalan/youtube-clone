import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  
  constructor(private router: Router){
  }

  isSidebarClosed = false;
  isClicked = false;



  // Define the isActive method to color the links in the sidebar
  isActive(route: string): boolean {
      return this.router.isActive(route, true);
    }
    
    
    // function for routing
  moveToRoute(route:string){
    this.router.navigate([route]).then(() => {window.scrollTo(0, 0)});
  }
  
  
  
  handleMenuToggleClick() {
    this.isClicked = !this.isClicked;
    
    const sidebarNavWrapper = document.querySelector(".sidebar-nav-wrapper") as HTMLElement; // this is the whole SideBar
    const mainWrapper = document.querySelector(".main-wrapper") as HTMLElement; // this is the class in app.component holding the whole routing body
    const menuToggleButtonIcon = document.querySelector("#menu-toggle") as HTMLElement; // this is the btn for the sidebar
    const overlay = document.querySelector(".overlay") as HTMLElement;// this is a div in the sidebar component which is empty
  
    sidebarNavWrapper.classList.toggle("active");
    overlay.classList.add("active");
    mainWrapper.classList.toggle("active");
  
    //if screen if larger than 1200px
    if (document.body.clientWidth > 1200)
     {
      if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
        menuToggleButtonIcon.classList.remove("lni-chevron-left");
        menuToggleButtonIcon.classList.add("lni-menu");
      }

      else {
        menuToggleButtonIcon.classList.remove("lni-menu");
        menuToggleButtonIcon.classList.add("lni-chevron-left");
      }
    }
    
     //else if screen if smaller than 1200px
    else {
  
      if (menuToggleButtonIcon.classList.contains("lni-chevron-left")) {
        menuToggleButtonIcon.classList.remove("lni-chevron-left");
        menuToggleButtonIcon.classList.add("lni-menu");
      }
    }
  }
  
  
  
  @HostListener('document:click', ['$event'])
  handleDocumentClick(event: MouseEvent) {
    const sidebarNavWrapper = document.querySelector('.sidebar-nav-wrapper') as HTMLElement;
    const overlay = document.querySelector('.overlay') as HTMLElement;
    const mainWrapper = document.querySelector('.main-wrapper') as HTMLElement;
    const bu = document.querySelector('.col .mainbtn') as HTMLElement;
  
    if (document.body.clientWidth < 1200) {
      // Check if the clicked element is not within the sidebar
      if (!sidebarNavWrapper.contains(event.target as Node) && !bu?.contains(event.target as Node)) {
        // Close the sidebar
        sidebarNavWrapper.classList.remove('active');
        overlay.classList.remove('active');
        mainWrapper.classList.remove('active');
      }
    }
  
  }
  
  
  }