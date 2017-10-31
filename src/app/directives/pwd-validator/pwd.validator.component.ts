import {Component, OnInit, OnChanges, SimpleChanges, Input, Output} from "@angular/core";
@Component({
  selector: 'pwd-validator-container',
  template: `
  <div>
      <div [ngClass]="{'fail' : isLessThan8Chars, 'success': !isLessThan8Chars}">Be at least 8 characters</div>
      <div [ngClass]="{'fail' : !doesLowercaseCharacterExist, 'success': doesLowercaseCharacterExist}">Include at least one lowercase letter</div>
      <div [ngClass]="{'fail' : !doesUppercaseCharacterExist, 'success': doesUppercaseCharacterExist}">Include atleast one uppercase letter</div>
      <div [ngClass]="{'fail' : !doesNumberExist, 'success': doesNumberExist}">Include atleast one number</div>
  </div>  
  `,
  styleUrls: ['./pwd.validator.component.css']
})
export class PasswordValidatorContainerComponent implements OnInit,  OnChanges {

  @Input('pwdValue') public pwdValue:any;

  public pwdValid:boolean;

  canShow:boolean = false;
  isLessThan8Chars:boolean = false;
  isLessThan20Chars:boolean = false;
  doesLowercaseCharacterExist:boolean = false;
  doesUppercaseCharacterExist:boolean = false;
  doesNumberExist:boolean = false;
  doesSpecialCharacterExist:boolean = false;
  isCharacterRepeating:boolean = false;
  isBlankSpace:boolean = true;


  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.pwdValue != undefined) {
      this.validatePassword();
      this.validatePasswordBasedOnIncludingAtleastOneUppercaseLetter();
      this.validatePasswordBasedOnIncludingAtleastOneLowercaseLetter();
      this.validatePasswordBasedOnIncludingAtleastOneNumber();
      //this.validatePasswordBasedOnIncludingAtleastOneSpecialCharacter();
      // this.validatePasswordBasedOnNotRepeatingCharacterMoreThan4Times();
      // this.validatePasswordBasedOnNotIncludingBlankSpaces();

    }

    this.pwdValid = !this.isLessThan8Chars && this.isLessThan20Chars;
  }

  validatePassword():void {
    this.isLessThan8Chars = this.pwdValue.length < 8;
    this.isLessThan20Chars = this.pwdValue.length < 20;
  }

  validatePasswordBasedOnIncludingAtleastOneUppercaseLetter() {
    let regEx = /^(?=.*[A-Z]).+$/;
    this.doesUppercaseCharacterExist = regEx.test(this.pwdValue);
  }

  validatePasswordBasedOnIncludingAtleastOneLowercaseLetter() {
    let regEx = /^(?=.*[a-z]).+$/;
    this.doesLowercaseCharacterExist = regEx.test(this.pwdValue);
  }

  validatePasswordBasedOnIncludingAtleastOneNumber() {
    let regEx = /^(?=.*[0-9]).+$/;
    this.doesNumberExist = regEx.test(this.pwdValue);
  }

  validatePasswordBasedOnIncludingAtleastOneSpecialCharacter() {
    let specialCharacters:string = '$!@%*&';
    let regEx = /^(?=.*[$!@%*&]).+$/;
    this.doesSpecialCharacterExist = regEx.test(this.pwdValue);

  }

  validatePasswordBasedOnNotRepeatingCharacterMoreThan4Times() {
    for (var i = 0; i < this.pwdValue.length; i++) {
      var count = 0;
      for (var j = 1; j < this.pwdValue.length; j++) {
        if (this.pwdValue[i] === this.pwdValue[j]) {
          count++;
        }
      }
      if (count > 3) {
        this.isCharacterRepeating = false;
        return;
      }
    }
    this.isCharacterRepeating = true;
  }

  validatePasswordBasedOnNotIncludingBlankSpaces() {
    if (this.pwdValue.indexOf(' ') >= 0) {
      this.isBlankSpace = false;
    } else {
      this.isBlankSpace = true;
    }
  }

  validatePasswordBasedOnUserNameNotSame() {
    //No user name specified...
  }

}
