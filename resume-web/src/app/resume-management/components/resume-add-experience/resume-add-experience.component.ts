import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AddExperienceModel } from 'src/app/shared/models/add-experience.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-add-experience',
  templateUrl: './resume-add-experience.component.html',
  styleUrls: ['./resume-add-experience.component.scss']
})
export class ResumeAddExperienceComponent implements OnInit {

  addExperienceForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.addExperienceForm = this.formBuilder.group({
      title: ['', [Validators.required]],
      companyName: ['', [Validators.required]],
      industry: ['', [Validators.required]],
      country: ['', [Validators.required]],
      from: ['', [Validators.required]],
      to: [''],
      description: ['', [Validators.required]],
      current: [false]
    });
  }

  onAddExperienceFormSubmit() {
    const newExperience: AddExperienceModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      companyName: this.addExperienceForm.value.companyName,
      title: this.addExperienceForm.value.title,
      industry: this.addExperienceForm.value.industry,
      country: this.addExperienceForm.value.country,
      from: this.addExperienceForm.value.from,
      to: this.addExperienceForm.value.to,
      description: this.addExperienceForm.value.description,
      current: this.addExperienceForm.value.current
    };

    this.resumeService.addExperience(newExperience)
    .subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result._id}`]);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
