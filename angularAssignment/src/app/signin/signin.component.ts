import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signin',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  signinForm: FormGroup;
  loggedInUser: any;

  constructor(private router:Router){
    this.signinForm = new FormGroup(
      {
        username: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required])
      })
  }
  
  onsubmit(){
    if(this.signinForm.valid){
      const {username, password} = this.signinForm.value;
      console.log(this.signinForm.value);
      const users = JSON.parse(localStorage.getItem('users') || '[]');
     
      console.log(users, this.loggedInUser );
      console.log(typeof(users));
      //const isUsers = [users];
      const matchedUser = users.find((user : any) => 
      user.username == username && user.password == password);
      if (matchedUser){
        this.loggedInUser = matchedUser;
console.log(matchedUser);
localStorage.setItem('loggedUser', JSON.stringify(matchedUser));
        alert("Login successfull");
        this.router.navigate(['/']);

      }
      else{
        alert("Invalid user");
        this.router.navigate(['/']);
      }
    }
  }

}
