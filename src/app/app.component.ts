import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  smartphone: any = [];
  constructor(private api: AppService) {}
  title = 'angular';
  firstName = 'Munish Kumar';

  callme(event:any)
  {
    alert(event)
  }
}
