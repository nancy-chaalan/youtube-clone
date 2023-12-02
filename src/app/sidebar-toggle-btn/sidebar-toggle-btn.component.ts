import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar-toggle-btn',
  templateUrl: './sidebar-toggle-btn.component.html',
  styleUrls: ['./sidebar-toggle-btn.component.css']
})
export class SidebarToggleBtnComponent {

  constructor(private router: Router){

  }

  isSidebarClosed = false;

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
  
  
  // function for routing
moveToRoute(route:string){
  this.router.navigate([route]).then(() => {window.scrollTo(0, 0)});
}





}