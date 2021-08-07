import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bootstrap-form',
  templateUrl: './bootstrap-form.component.html',
  styleUrls: ['./bootstrap-form.component.css'],
})
export class BootstrapFormComponent implements OnInit {
  employee: { id: any; name: any; description: any; email: any } = {
    id: null,
    name: '',
    description: '',
    email: '',
  };

  constructor() {}
  ngOnInit() {}

  createEmployee() {
    console.log('Employee created: ', this.employee);
    this.employee = { id: null, name: '', description: '', email: '' };
  }
}
