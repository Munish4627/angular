import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  @ViewChild('myDiv') myDivMunish: any;
  constructor(private appService: AppService) {}
  ngAfterViewInit(): void {
    this.myDivMunish;
  }
  uploadFile(event: any) {}
  ngOnInit(): void {
    this.appService.getCountries().subscribe((res) => {
      console.log(res);
    });
  }
}
