import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyJumbotronComponent } from './my-jumbotron/my-jumbotron.component';
import { MyAboutComponent } from './my-about/my-about.component';
import { MyHomeComponent } from './my-home/my-home.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MyJumbotronComponent,
    MyAboutComponent,
    MyHomeComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
