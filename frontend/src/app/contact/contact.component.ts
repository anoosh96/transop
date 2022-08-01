import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  email: '';
  subject: '';
  description: '';

  constructor() { }

  ngOnInit(): void {}

  submit(): void {
    console.log(`Contact us submitted. email: ${this.email}, subject: ${this.subject}, description: ${this.description}`);
  }

}
