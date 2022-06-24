import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import {MatDividerModule} from '@angular/material/divider'
import {MatListModule} from '@angular/material/list';
import{MatCardModule} from '@angular/material/card';
import{MatButtonModule} from '@angular/material/button';
import{MatInputModule} from '@angular/material/input';
import{MatIconModule} from '@angular/material/icon';
import { FormGroup,FormControl,Validators, FormBuilder } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort'









import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSliderModule} from '@angular/material/slider';
import { AdminInterfaceComponent } from './admin-interface/admin-interface.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AdditionComponent } from './addition/addition.component';
import { AboutComponent } from './about/about.component';
import { DatabaseComponent } from './database/database.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeDashComponent } from './employee-dash/employee-dash.component';
import { DialogComponent } from './dialog/dialog.component';
import { HttpClientModule } from '@angular/common/http';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminComponent,
    
    NavBarComponent,
    FooterComponent,
  
    AdminInterfaceComponent,
     AdditionComponent,
     AboutComponent,
     DatabaseComponent,
     TeamComponent,
     ContactComponent,
     EmployeeDashComponent,
     DialogComponent,
    
     
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatRadioModule,
    MatDividerModule,
    MatListModule,
    FontAwesomeModule,
    MatSliderModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
  //  FormGroup,
  //  FormControl,
  //  Validators,
   // FormBuilder,
    FormsModule,
    MatTableModule,
    MatToolbarModule,
    MatDialogModule,
    MatSelectModule,
    HttpClientModule,
    MatPaginatorModule,
    MatSortModule
    

   
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
