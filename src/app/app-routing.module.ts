import { ContactComponent } from './contact/contact.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdditionComponent } from './addition/addition.component';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';


const routes: Routes = [
 
  {path:'',component:HomeComponent},
  {path:'admin',component:AdminComponent},
  {path:'nav-bar', component:NavBarComponent},
  {path:'addition',component:AdditionComponent },
  {path:'about',component:AboutComponent},
  {path:'dash',component:EmployeeDashComponent},
  {path:'contact',component: ContactComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
