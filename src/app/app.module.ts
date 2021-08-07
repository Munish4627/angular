import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { BootstrapFormComponent } from './bootstrap-form/bootstrap-form.component';
import { BootstrapTableComponent } from './bootstrap-table/bootstrap-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    JumbotronComponent,
    BootstrapFormComponent,
    BootstrapTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
