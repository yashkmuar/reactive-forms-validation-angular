import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('forms-grouping-angular');

  profileForm = new FormGroup({
    name:new FormControl('yash'),
    password:new FormControl('455'),
    email:new FormControl('pindwar@email.com')
  })

  onSubmit(){
    console.log(this.profileForm.value);
  }

  setValue(){
    this.profileForm.setValue({
      name:'Kyla',
      password:'russia',
      email:'leconti@tjx.com'
    })
  }
}
