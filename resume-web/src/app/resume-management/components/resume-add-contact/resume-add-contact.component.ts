import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserContactModel } from 'src/app/shared/models/user-contact.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserContactModel } from 'src/app/shared/models/add-user-contact.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-add-contact',
  templateUrl: './resume-add-contact.component.html',
  styleUrls: ['./resume-add-contact.component.scss']
})
export class ResumeAddContactComponent implements OnInit {

  contactTypes: Array<string> = [
    'phone',
    'facebook',
    'twitter',
    'linkedIn',
  ];

  contact: UserContactModel= { type: 'phone', value: '' }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
  }

  hasError(event) {
    return event;
  }

  getNumber(event) {
    this.contact.value = event;
  }

  addContact() {
    const newContact: AddUserContactModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      contactType: this.contact.type,
      contactValue: this.contact.value
    };

    this.resumeService.addUserContact(newContact)
    .subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result.user._id}`]);
        // this.router.navigateByUrl(`/resume/${response.result.user._id}`);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
