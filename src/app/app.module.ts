import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap';


import { AppComponent } from './app.component';
import {PasswordValidatorContainerComponent} from "./directives/pwd-validator/pwd.validator.component";
import {AccordionModule} from 'primeng/primeng';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    PasswordValidatorContainerComponent
  ],
  imports: [
    BrowserModule,
    PopoverModule.forRoot(),
    AccordionModule,
    BrowserAnimationsModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
