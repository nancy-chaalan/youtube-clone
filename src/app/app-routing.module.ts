import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  {path:  '', component:HomeComponent},

  {path: "sidebar", component:SidebarComponent},

  { path: 'shared', loadChildren: () => import('./shared-module/shared-module.module').then(m => m.SharedModuleModule) },
  { path: 'videos', loadChildren: () => import('./videos/videos.module').then(m => m.VideosModule) },
  { path: 'loading', loadChildren: () => import('./loading/loading.module').then(m => m.LoadingModule) },
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'stories', loadChildren: () => import('./stories/stories.module').then(m => m.StoriesModule) },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
