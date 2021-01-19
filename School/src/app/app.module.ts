import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//  import { AngularFireAuth} from '@angular/fcire/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './component/main/main.component';
import { EducatorComponent } from './component/educator/educator.component';
import { Routes, RouterModule } from '@angular/router';
import {  PrincipalComponent } from './component/Principal/principal/principal.component';
import { TeacherComponent } from './component/Teacher/teacher.component';
import { ConsultantComponent } from './component/Consultant/consultant/consultant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MyMaterialModule } from 'src/app/material';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

// import * as MATERIAL_MODULES from '@angular/material';

import {Component} from '@angular/core';

// import { MaterialModule } from './material.ts';

import { MatSliderModule } from '@angular/material/slider';
// import { MaterialModule } from './material/material.ts';

// import { MaterialModule } from '@angular/material';

// import { HomeComponent } from './';
// import { Name2Component } from './';
// import { Name3Component } from './';
// import { Name4Component } from './';
// import { PageNotFoundComponent } from './';

  // { path: '', component: HomeComponent },
  // { path: 'path2', component: Name2Component },
  // { path: 'path3', component: Name3Component },
  // { path: 'path4', component: Name4Component },
  // { path: '**', component: PageNotFoundComponent },

  //{ path: 'path/:routeParam', component: MyComponent },
  //{ path: 'staticPath', component: ... },
  //{ path: '**', component: ... },
  //{ path: 'oldPath', redirectTo: '/staticPath' },
  //{ path: ..., component: ..., data: { message: 'Custom' }

  // require("@angular/core/package.json"); // @angular/core is a peer dependency. 
  // var animations = require("@angular/animations")
// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule]
// })
export class FeatureRoutingModule {}

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    EducatorComponent,
    PrincipalComponent,
    TeacherComponent,
    ConsultantComponent,
    // MyBottomSheet
    // MaterialModule

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyMaterialModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
