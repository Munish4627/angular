import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  toppings = new FormControl();

  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  getError(el: any) {
    switch (el) {
      case 'user':
        if (
          this.formGroup != null &&
          this.formGroup.get('username')?.hasError('required')
        ) {
          return 'Username required';
        }
        break;
      case 'email':
        if (
          this.formGroup != null &&
          this.formGroup.get('email')?.hasError('required')
        ) {
          return 'Email required';
        }
        break;
      case 'pass':
        if (
          this.formGroup != null &&
          this.formGroup.get('password')?.hasError('required')
        ) {
          return 'Password required';
        }
        break;
      default:
        return '';
    }
    return null;
  }

  onSubmit(post: any) {
    console.log(post);
  }
}
