import { ApiService } from './../services/api.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import{MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  statutList=["Intern","Employee"];
  employeeForm !: FormGroup;
  actionBtn : string = "save";



  constructor(private formBuilder:FormBuilder,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData : any,
    private dialogRef : MatDialogRef<DialogComponent>) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email: ['',Validators.required],
      phonenumber: ['',Validators.required],
      departement: ['',Validators.required],
      start: ['',Validators.required],
      leave: ['',Validators.required],
      Statut: ['',Validators.required],
    });
    if(this.editData){
      this.actionBtn = "Update";
      this.employeeForm.controls['firstname'].setValue(this.editData.firstname);
      this.employeeForm.controls['lastname'].setValue(this.editData.lastname);
      this.employeeForm.controls['email'].setValue(this.editData.email);
      this.employeeForm.controls['phonenumber'].setValue(this.editData.phonenumber);
      this.employeeForm.controls['departement'].setValue(this.editData.departement);
      this.employeeForm.controls['start'].setValue(this.editData.start);
      this.employeeForm.controls['leave'].setValue(this.editData.leave);
      this.employeeForm.controls['Statut'].setValue(this.editData.Statut);
    }
  }
  addEmployee(){
    
     if(!this.editData){
      if(this.employeeForm.valid){
        this.api.postEmployee(this.employeeForm.value)
        .subscribe({
          next:(res)=>{
            alert("Employee added successfully");
            this.employeeForm.reset();
            this.dialogRef.close('save');
            
          },
          error:()=>{
            alert("Error while adding Employee")
          }
        })
        
      }
     }
     else{
      this.updateEmployee()
     }
    

}
updateEmployee(){
  this.api.putEmployee(this.employeeForm.value,this.editData.id)
  .subscribe({
    next:(res)=>{
      alert("Employee updated successfully");
      this.employeeForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{
      alert("Error while updating the Employee!!")
    }
  })
}
}
