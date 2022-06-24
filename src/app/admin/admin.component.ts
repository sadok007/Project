import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators,FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from './../services/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  loginForm!: FormGroup;
  loginUserData={}
  constructor(private api : ApiService,
    private formBuilder : FormBuilder,
    private http: HttpClient,
    private router:Router){}

  ngOnInit() {
    this.loginForm= this.formBuilder.group({
      email:[''],
      password:['']

    })
    
  }
  login(){
    this.http.get<any>("http://localhost:3000/LoginList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
      });
      if(user){
        alert("Login Success");
        this.loginForm.reset();
        this.router.navigate(['dash'])
      }else{
        alert("Employee not found");
      }
        
    },
    err=>{
      alert("Something went wrong!!")
    })

  }
  
  
  

}
