import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRouting } from './shared-routing';
import { AllvideosComponent } from './allvideosComponent/allvideos.component';
import { StoriesComponentComponent } from './stories-component/stories-component.component';
import { EverythingComponent } from './everything/everything.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { SidebarToggleBtnComponent } from '../sidebar-toggle-btn/sidebar-toggle-btn.component';
import { FooterComponent } from './footer/footer.component';
import { loadingRoutingModule } from '../loading/loading-routing.module';
import { LoadingModule } from '../loading/loading.module';


@NgModule({
  declarations: [
    AllvideosComponent,
    StoriesComponentComponent,
    EverythingComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    SidebarToggleBtnComponent,
    FooterComponent,

  ],
  
  exports:[
  AllvideosComponent,
  EverythingComponent,
  HeaderComponent,
  NavbarComponent,
  SidebarComponent,
  SidebarToggleBtnComponent
  ],

  imports: [
    CommonModule,
    SharedRouting,
    LoadingModule
  ]
})
export class SharedModuleModule { }
