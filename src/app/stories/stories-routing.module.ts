import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllStoriesComponent } from './all-stories/all-stories.component';

const routes: Routes = [

  {path: "all", component:AllStoriesComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class storiesRoutingModule { }
