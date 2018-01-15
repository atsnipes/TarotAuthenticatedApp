import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatOption } from '@angular/material';

import { TarotCardModel } from '../_models/tarotModel';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edit-tarot-form',
  templateUrl: './editTarotForm.component.html',
  styleUrls: ['./editTarotForm.component.css']
})
export class EditTarotFormComponent implements OnInit {

  tarotCardModel = new TarotCardModel();


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  deckSelectControl = new FormControl('', [
    Validators.required
  ]);
  firstNameFormControl = new FormControl('', [
    Validators.required
  ]);
  lastNameFormControl = new FormControl('', [
    Validators.required
  ]);
  addressFormControl = new FormControl('', [
    Validators.required
  ]);

  matcher = new MyErrorStateMatcher();

  tarotDecks = [
    {name: 'Deck1', id: '123'},
    {name: 'Deck2', id: '234'},
    {name: 'Deck3', id: '345'},
    {name: 'Deck4', id: '456'},
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onSubmit() {
    alert('Thanks for submitting! Data: ' + JSON.stringify(this.tarotCardModel));
  }

}
