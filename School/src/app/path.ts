import { Component } from "@angular/core";
import { Route } from "@angular/router";
import { EducatorComponent } from "./component/educator/educator.component";

const newLocal = [{
    path: "educator", Component: EducatorComponent
},];
export const arrPath:Route[]=newLocal