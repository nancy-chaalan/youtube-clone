import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllvideosComponent } from './allvideosComponent/allvideos.component';
import { StoriesComponentComponent } from './stories-component/stories-component.component';
import { EverythingComponent } from './everything/everything.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from '../sidebar/sidebar.component';


const routes: Routes = [
  {path: "shared", component: EverythingComponent},
  {path: "navbar", component:NavbarComponent},
  {path: "header", component:HeaderComponent},
  {path: "sidebar", component:SidebarComponent},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRouting { }
