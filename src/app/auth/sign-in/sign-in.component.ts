import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  myForm:FormGroup;

  constructor(private fb:FormBuilder , private router:Router) {
    this.myForm = this.fb.group({
      name:["" , Validators.required],
      password:["" , Validators.required],

    })
  }
  save(myForm){
    console.log(myForm.value);
    localStorage.setItem("user",JSON.stringify( myForm.value));
    this.router.navigate(["./todo"])
myForm.reset();

  }
  ngOnInit(): void {
  }

}
