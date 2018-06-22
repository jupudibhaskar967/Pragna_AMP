import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css', '../app.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: any = [];
  optionType = ['Email address', 'Phone number'];
  type = 'Email address';
  displayDetails = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('assets/data.json').subscribe((data) =>  {
      this.contacts = data;
      for (let i = 0; i < this.contacts.length; i++) {
        this.displayDetails[i] = false;
      }
    });
  }

  dataTypeChange(option) {
    this.type = option;
    console.log(option);
  }

  detailsData(index) {
    this.displayDetails[index] = !this.displayDetails[index];
    this.displayDetails.map((data, ind) => {
      if (ind !== index) {
        this.displayDetails[ind] = false;
      }
    });
  }

  outOfFocus() {
    return this.displayDetails.map((data, ind) => {
      data = false;
      return data;
    });
  }

}
