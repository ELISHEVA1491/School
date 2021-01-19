import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import {MatAccordion} from '@angular/material/expansion';
import { NgModule } from '@angular/core';
// import { type } from 'os';
// import { os } from 'os';
import { FormControl, FormGroup, NgModel } from '@angular/forms';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
 
})

export class MainComponent implements OnInit {
  [x: string]: any;
  hide=true;
  loginDetails:FormGroup=new FormGroup({
    id:new FormControl(""),
    password:new FormControl(""),
  })
  worker:Worker | undefined;
  id1:number | undefined;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  Click()
  {
    this.workerservice.getWorker(this.loginDetails.controls["id"].value,this.loginDetails.controls["password"].value);
    // var name = new String(string);

    // var name:string="";

    // if ( name== 'אלישבע'){
    //   this.router.navigate(["/educator"]);

    // }
    // if (  password== '1234'){
    //   this.router.navigate(["/educator"]);
    // }
    // var sentence: string = `מורה ,${ name }`;

  

}
}