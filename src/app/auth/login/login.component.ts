import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl:'./login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.formGroup = this.formBuilder.group({
      'username': ['', Validators.required],
      'password': ['', Validators.required],
    });
  }

  getError(el: any) {
    switch (el) {
      case 'user':
        if (this.formGroup != null && this.formGroup.get('username')?.hasError('required')) {
          return 'Username required';
        }
        break;
      case 'pass':
        if (this.formGroup != null && this.formGroup.get('password')?.hasError('required')) {
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
