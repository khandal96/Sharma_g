import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css','../login/login.component.css']
})
export class SignUpComponent implements OnInit {

  constructor() { }

  formData={
    name:"",
    email:"",
    password:"",
    cPassword:"",
    contactNumber:""
  }

  signUp(){

      console.log('111111111111111111')
    console.log(this.formData)
  }

  ngOnInit() {
  }

}
