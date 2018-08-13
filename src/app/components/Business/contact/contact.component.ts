import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../../client_side_services/contact.service.client'
import { Contact } from '../../../models/contact.model.client'
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
declare var $: any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild('f') contactForm: NgForm;

	cid: string;
	contacts: Contact[];
	name: string;
	phone: string;
	email: string;
	subject: string;
	comment: string;

  constructor(private contactService: ContactService, private activatedRoute: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    $("input[required]").parent().children("label").addClass("required")
  }

  create(){
    this.name = this.contactForm.value.name;
    this.phone = this.contactForm.value.phone;
    this.email = this.contactForm.value.email;
    this.subject = this.contactForm.value.subject;
    this.comment = this.contactForm.value.comment;
    const newContact: Contact = {
    // contactId: this.cid,
    name: this.name,
    phone: this.phone,
    email: this.email,
    subject: this.subject,
    comment: this.comment
  };
  this.contactService.createContact(this.cid, newContact).subscribe(
    (contact: Contact) => {
      this.router.navigate(['contact']);
      // alert: "Message submitted successfully!"
      }
    );
  }
}