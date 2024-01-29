import { Injectable } from '@angular/core';
import  { HttpClient } from "@angular/common/http"
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient:HttpClient) { }
  
  postEmployee(data:any)
  {
    return this.httpClient.post<any>("http://localhost:3000/posts",data).pipe(map((res:any)=>{
      return res;
    }))
  }
  getEmployee()
  {
    return this.httpClient.get<any>("http://localhost:3000/posts").pipe(map((res:any)=>{
      return res;
    }))

  }
  updateEmployee(data:any,id:any)
  {
    return this.httpClient.delete<any>("http://localhost:3000/posts"+id,data).pipe(map((res:any)=>{
      return res;
    }))
  }
  deleteEmployee(id:any){
    return this.httpClient.delete<any>("http://localhost:3000/posts/"+id).pipe(map((res:any)=>{
      return res;
    }))
  }
}
