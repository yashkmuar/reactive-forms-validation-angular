import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms-grouping-angular');

  profileForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    password:new FormControl('',[Validators.minLength(5),Validators.required]),
    email:new FormControl('',[Validators.required, Validators.maxLength(50)])
  });

  submitData(){
    console.log(this.profileForm.value);
  }
  get name(){
    return this.profileForm.get('name');
  }
  get password(){
    return this.profileForm.get('password');
  }
  get email(){
    return this.profileForm.get('email');
  }

}
