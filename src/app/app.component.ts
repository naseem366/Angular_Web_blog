import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blog-web';

  userData:any = [];
  constructor(private apiservice:ApiService){
    this.apiservice.getAll().subscribe(data=>{
      console.log(data)
      this.userData=data
    });

  }

/*
  // print value on console 
  constructor(private apiservice:ApiService){
    this.apiservice.getAll().subscribe(data=>{
      console.log(data)
    });

  }

*/

  onSubmit(form:NgForm)
  {
    console.log(form);
  }
 
}
