import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit, AfterViewInit {
  User: any = ['Super Admin', 'Author', 'Reader'];
  @ViewChild('myDiv') myDivMunish: any;

  @ViewChild('UploadFileInput') uploadFileInput: ElementRef | undefined;
  myfilename = 'Select File';

  // fileChangeEvent(fileInput: any) {

  //   if (fileInput.target.files && fileInput.target.files[0]) {


  //     this.myfilename = '';
  //     Array.from(fileInput.target.files).forEach((file: File) => {
  //       console.log(file);
  //       this.myfilename += file.name + ',';
  //     });

  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       const image = new Image();
  //       image.src = e.target.result;
  //       image.onload = rs => {

  //         // Return Base64 Data URL
  //         const imgBase64Path = e.target.result;

  //       };
  //     };
  //     reader.readAsDataURL(fileInput.target.files[0]);

  //     // Reset File Input to Selct Same file again
  //     this.uploadFileInput.nativeElement.value = "";
  //   } else {
  //     this.myfilename = 'Select File';
  //   }
  // }
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
