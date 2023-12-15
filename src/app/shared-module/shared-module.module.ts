import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRouting } from './shared-routing';
import { AllvideosComponent } from './allvideosComponent/allvideos.component';
import { StoriesComponentComponent } from './stories-component/stories-component.component';
import { EverythingComponent } from './everything/everything.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingModule } from '../loading/loading.module';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    AllvideosComponent,
    StoriesComponentComponent,
    EverythingComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,

  ],
  
  exports:[
  AllvideosComponent,
  EverythingComponent,
  HeaderComponent,
  NavbarComponent,
  SidebarComponent,
   
  ],

  imports: [
    CommonModule,
    SharedRouting,
    LoadingModule,
    // BrowserModule,
    TranslateModule
  ]

})
export class SharedModuleModule { }
