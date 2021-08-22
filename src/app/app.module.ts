import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './MyComponent/header/header.component';
import { JsComponent } from './MyComponent/js/js.component';
import { CssComponent } from './MyComponent/css/css.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    JsComponent,
    CssComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

