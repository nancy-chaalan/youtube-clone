import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { HomeComponent } from './home/home.component';
import { LoadingModule } from './loading/loading.module';
import { AuthModule } from './auth/auth.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';


export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModuleModule,
    LoadingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
         loader: {
             provide: TranslateLoader,
             useFactory: httpTranslateLoader,
             deps: [HttpClient]
         }
     })
  ],

  exports:[
    TranslateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
