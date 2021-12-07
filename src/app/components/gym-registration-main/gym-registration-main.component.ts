import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-gym-registration-main',
  templateUrl: './gym-registration-main.component.html',
  styleUrls: ['./gym-registration-main.component.scss'],
})
export class GymRegistrationMainComponent implements OnInit {
  registrationForm: FormGroup;
  contactForm: FormGroup;
  data;
  constructor(private httpClient: HttpClient, private fb: FormBuilder) {}
  // Tabs // Map the data to our form fields
  // display the form field component according to our mapped data

  ngOnInit(): void {
    this.httpClient.get('assets/data.json').subscribe((data) => {
      console.log(data);
      this.data = data;
      this.generateForm(data);
    });
  }
  generateForm(data) {
    const contactControls = {};
    const membershipControls = {};
    const paymentControls = {};

    if (data.contact) {
      data.contact.forEach((element) => {
        contactControls[element.name] = element.required
          ? new FormControl('', Validators.required)
          : new FormControl('');
      });
    }
    if (data.membership)
      if (data.membership.plan)
        membershipControls[data.membership.plan.name] = new FormControl('');
    if (data.payment) paymentControls[data.payment.name] = new FormControl('');
    this.registrationForm = this.fb.group({
      contactForm: this.fb.group(contactControls),
      membershipControls: this.fb.group(membershipControls),
      paymentControls: this.fb.group(paymentControls),
    });
  }
  submit() {
    if (this.registrationForm.valid) console.log(this.registrationForm.value);
  }
}
