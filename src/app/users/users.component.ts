import { Component } from '@angular/core';
import { Form, FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Users } from '../users.model';
import { ApiService } from '../shared/api.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  userDetails:FormGroup;
  userDetailsObj:Users = new Users();
  userDetailsList: Users[]=[];
  constructor(private formBuilder:FormBuilder,private api: ApiService)
  {
    this.userDetails= this.formBuilder.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:[''],
      mobile:[''],
      salary:['']
    })
  }
  ngOnInit():void{
    this.getEmployeeDetails()
  }
  getEmployeeDetails()
  {
    this.api.getEmployee().subscribe((res)=>{
      this.userDetailsList = res;
    })
  }
  postEmployeeDetails(){
    this.userDetailsObj = this.userDetails.value;
    this.api.postEmployee(this.userDetailsObj).subscribe((res)=>{
      this.getEmployeeDetails()
    })
    this.userDetails.reset();
  }
  deleteEmployee(data:any)
  {
    this.api.deleteEmployee(data.id).subscribe(res=>{
      console.log("Employee Deleted");
      this.getEmployeeDetails()
    })
    
  }
  editEmployee(data:any)
  {
    this.userDetails.setValue(data);
  }

}
