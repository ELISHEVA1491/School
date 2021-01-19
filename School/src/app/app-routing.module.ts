import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { EducatorComponent } from "./component/educator/educator.component";
import { MainComponent } from "./component/main/main.component";
import { PrincipalComponent } from "./component/Principal/principal/principal.component";
import { TeacherComponent } from "./component/Teacher/teacher.component";
import { ConsultantComponent } from "./component/Consultant/consultant/consultant.component";

const routes: Route[] = [
  { path: 'educator', component: EducatorComponent },
  { path: 'principal', component: PrincipalComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: 'consultant', component: ConsultantComponent },
  { path: '', component: MainComponent },

  // { path:'main_menu/:workerId',component:MainMenuComponent},
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
