import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from  '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  loginForm: FormGroup;
  formdata
  isSubmitted  =  false;
  constructor(private formBuilder: FormBuilder){}

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl("angular@gmail.com"),
      passwd: new FormControl("abcd1234")
   });
    this.loginForm  =  this.formBuilder.group({
        email: ['', Validators.required],
        password: ['', Validators.required]
    });
}

login(){
  console.log(this.loginForm.value);
  this.isSubmitted = true;
  if(this.loginForm.invalid){
    return;
  }

}
}
