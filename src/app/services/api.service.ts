import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http : HttpClient) { }
  postEmployee(data : any){
    return this.http.post<any>("http://localhost:3000/EmployeeList/",data);
  }
  getEmployee(){
    return this.http.get<any>("http://localhost:3000/EmployeeList/");
  }
  putEmployee(data:any,id : number){
    return this.http.put<any>("http://localhost:3000/EmployeeList/"+id,data);
  }
  deleteEmployee(id:number){
    return this.http.delete<any>("http://localhost:3000/EmployeeList/"+id);
  }
  

  
}
