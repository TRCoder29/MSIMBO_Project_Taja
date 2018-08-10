import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'
import { ContactService } from '../../../client_side_services/contact.service.client'
import { Contact } from '../../../models/contact.model.client'
import { SharedService } from '../../../client_side_services/shared.service.client'

@Component({
  selector: 'app-admin-contact',
  templateUrl: './admin-contact.component.html',
  styleUrls: ['./admin-contact.component.css']
})
export class AdminContactComponent implements OnInit {

@ViewChild('f') adminClientsForm: NgForm;

cid: string;
contacts: Contact[];
search: string = "";

  constructor(private contactService: ContactService, private sharedService: SharedService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
   //  this.search = "";
  	// this.activatedRoute.params.subscribe(params => {
  	// 	this.cid = params['cid'];
  	// 	this.contactService.findContactsById().subscribe(
   //      (contacts: Contact[]) => {
   //        this.contacts = contacts;
   //        console.log(this.contacts);
   //        // console.log(this.contacts);
   //      }
   //    );
   //  });
  }
  //   delete(){
  //   console.log("delete");
  //   this.contactService.deleteContact(this.cid).subscribe(
  //     (contacts: Contact[]) => {
  //       if (this.sharedService.user.isAdmin) {
  //     this.router.navigate(['admin-clients'])
  //     } else {
  //     this.contactService.logout().subscribe(
  //       (res: any) => {
  //         this.router.navigate(['home']);
  //       }
  //       )
  //     }
  //   });
  // }
}


// Add something so that admin can't be deleted if clicked on