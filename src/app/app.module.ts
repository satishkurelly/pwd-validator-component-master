import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import {PasswordValidatorContainerComponent} from "./directives/pwd-validator/pwd.validator.component";

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorContainerComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
