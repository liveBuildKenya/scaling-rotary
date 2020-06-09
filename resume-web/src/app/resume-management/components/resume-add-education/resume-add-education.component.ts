import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { AddEducationModel } from 'src/app/shared/models/add-education.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resume-add-education',
  templateUrl: './resume-add-education.component.html',
  styleUrls: ['./resume-add-education.component.scss']
})
export class ResumeAddEducationComponent implements OnInit {

  addEducationForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.addEducationForm = this.formBuilder.group({
      school: ['', [Validators.required]],
      degree: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: ['', [Validators.required]]
    });
  }

  onAddEducationFormSubmit(){
    const newEducation: AddEducationModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      school: this.addEducationForm.value.school,
      degree: this.addEducationForm.value.degree,
      from: this.addEducationForm.value.from,
      to: this.addEducationForm.value.to
    };

    this.resumeService.addEducation(newEducation).subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result._id}`]);
      },
      (response) => {
        console.log(response);
      }
    );
  }

}
