import { Component, OnChanges, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnChanges{

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
  
}
