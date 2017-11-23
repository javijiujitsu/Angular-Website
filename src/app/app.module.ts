import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';
import { MyNavbarComponent } from './my-navbar/my-navbar.component';
import { MyJumbotronComponent } from './my-jumbotron/my-jumbotron.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNavbarComponent,
    MyJumbotronComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
