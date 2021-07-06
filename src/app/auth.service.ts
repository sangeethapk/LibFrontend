import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }


  authenticateLogin(user:any){

    return this.http.post<any>("/api/login",user);//we are not handling result from hre

  }
  loggedIn(){

    return !!localStorage.getItem("token");

    
  }
  getToken(){

    return localStorage.getItem("token");
  }

  addNewMember(member:any){
    return this.http.post<any>("/api/signup",member);
  }
}
