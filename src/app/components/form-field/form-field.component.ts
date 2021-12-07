import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() field;
  constructor() {}
  ngOnInit(): void {
    console.log(this.form, this.field);
  }
}
