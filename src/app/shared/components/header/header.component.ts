import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() firstName: string = 'F';
  @Output() callme = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
  callmeP()
  {
    this.callme.emit("hi this is munish");
  }
}
