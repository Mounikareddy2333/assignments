import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports:[CommonModule, ReactiveFormsModule],
  standalone:true,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})


export class SignupComponent {
  signupform: FormGroup;

  constructor(private router:Router){
    this.signupform = new FormGroup({
      firstname: new FormControl('', [Validators.required]),
      lastname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  onsubmit(){
   if(this.signupform.valid){
    const userdata = this.signupform.value;
    const data = JSON.parse(localStorage.getItem('users') || '[]');
    console.log(data);
    data.push(userdata);
    localStorage.setItem('users', JSON.stringify(data));
    alert("Account Created Successfully");
    console.log(this.signupform.value);
    this.router.navigate(['/signin'])
   }
   else{
    console.log('Details are  invalid');
   }
  }


}
