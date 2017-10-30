import {Component, OnInit, OnChanges, SimpleChanges, Input, Output} from "@angular/core";
@Component({
  selector: 'pwd-validator-container',
  template: `
  <div class="">
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
  doesLowercaseCharacterExist: boolean = false;
  doesUppercaseCharacterExist: boolean = false;
  doesNumberExist: boolean = false;
  doesSpecialCharacterExist: boolean = false;
  isCharacterRepeating: boolean = false;
  isBlankSpace: boolean = true;
  isUserNameEqual: boolean = false;

  constructor() {
  }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChanges) {
    if (this.pwdValue != undefined && this.pwdValue.length > 0 ) {
      this.validatePassword();
      this.validatePasswordBasedOnIncludingAtleastOneUppercaseLetter();
      this.validatePasswordBasedOnIncludingAtleastOneLowercaseLetter();
      this.validatePasswordBasedOnIncludingAtleastOneNumber();
      this.validatePasswordBasedOnIncludingAtleastOneSpecialCharacter();
      this.validatePasswordBasedOnNotRepeatingCharacterMoreThan4Times();
      this.validatePasswordBasedOnNotIncludingBlankSpaces();
      this.canShow = true;
    }else {
      this.canShow = false;
    }

    this.pwdValid = !this.isLessThan8Chars && this.isLessThan20Chars;
  }

  validatePassword():void {
    this.isLessThan8Chars = this.pwdValue.length < 8;
    this.isLessThan20Chars = this.pwdValue.length < 20;
  }

  validatePasswordBasedOnIncludingAtleastOneUppercaseLetter() {
    let i:number = 0;
    let character: any;
    while (i < this.pwdValue.length){
      character = this.pwdValue.charAt(i);
      if (isNaN(character) && character === character.toUpperCase()) {
        this.doesUppercaseCharacterExist = true;
        return;
      }
      i++;
    }
    this.doesUppercaseCharacterExist = false;
  }

  validatePasswordBasedOnIncludingAtleastOneLowercaseLetter() {
    let i:number = 0;
    let character: any;
    while (i < this.pwdValue.length){
      character = this.pwdValue.charAt(i);
      if (isNaN(character) && character == character.toLowerCase()) {
        this.doesLowercaseCharacterExist = true;
        return;
      }
      i++;
    }
    this.doesLowercaseCharacterExist = false;
  }

  validatePasswordBasedOnIncludingAtleastOneNumber() {
    let i:number = 0;
    let character: any;
    while (i < this.pwdValue.length){
      character = this.pwdValue.charAt(i);
      if (!isNaN(character)) {
        this.doesNumberExist = true;
        return;
      }
      i++;
    }
    this.doesNumberExist = false;
  }

  validatePasswordBasedOnIncludingAtleastOneSpecialCharacter() {
    let specialCharacters: string = '$!@%*&';
    let i:number = 0;
    let character: any;
    while (i < this.pwdValue.length){
      character = this.pwdValue.charAt(i);
      if (specialCharacters.indexOf(character) != -1) {
        this.doesSpecialCharacterExist = true;
        return;
      }
      i++;
    }
    this.doesSpecialCharacterExist = false;

  }

  validatePasswordBasedOnNotRepeatingCharacterMoreThan4Times() {
    for(var i=0; i<this.pwdValue.length; i++) {
      var count = 0;
      for(var j=1; j<this.pwdValue.length; j++) {
        if(this.pwdValue[i] === this.pwdValue[j]) {
          count++;
        }
      }
      if(count > 3) {
        this.isCharacterRepeating = false;
        return;
      }
    }
    this.isCharacterRepeating = true;
  }

  validatePasswordBasedOnNotIncludingBlankSpaces() {
    if(this.pwdValue.indexOf(' ') >= 0) {
      this.isBlankSpace = false;
    } else {
      this.isBlankSpace = true;
    }
  }

  validatePasswordBasedOnUserNameNotSame() {
    //No user name specified...
  }

}
