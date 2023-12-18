import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {HttpClient} from '@angular/common/http';
import {switchMap} from 'rxjs/operators'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'youtube';
  lang : any;
  userIp = '';

ngOnInit(): void{
    this.loadUserInfo();
}

constructor(public translate: TranslateService, private httpClient: HttpClient) {
    translate.addLangs(['en', 'ar']);
  }


loadUserInfo(){

  this.httpClient.get('https://jsonip.com')
  .pipe (
    switchMap((value: any) =>
    {  this.userIp = value.ip;
       localStorage.setItem("ip", value.ip);
       let url= `http://api.ipstack.com/${value.ip}?access_key=c5dd16974a9b01b58f5d4fe20b4412ec`;
      
      return this.httpClient.get(url);

    })
  )
  .subscribe (
    (response: any) => 
          { console.log(response); 
            console.log(response.country_code);


    if(localStorage.getItem('lang') == null || response.country_code=='LB')
        {
          localStorage.setItem('lang','ar');  
          this.translate.use("ar");
      }

      else if (response.country_code == 'US' || localStorage.getItem('lang')){
        localStorage.setItem('lang','en');  
        this.translate.use("en");
      }

      else
      {
        localStorage.setItem('lang','en');  
        this.translate.use("en");
      }
          },


    (error) => {  console.log(error)  }

  )
 } 


isArabic(): boolean {
    if (localStorage.getItem('lang') == 'ar')
        return true;
     else
       return false;
 }
  
}
