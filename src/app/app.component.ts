import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  lang : any;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'ar']);

    if(localStorage.getItem('lang') == null)
        localStorage.setItem('lang',"en");
  }


  isArabic(): boolean {
    if (localStorage.getItem('lang') == 'ar')
        return true;
     else
       return false;
 }
  
}
