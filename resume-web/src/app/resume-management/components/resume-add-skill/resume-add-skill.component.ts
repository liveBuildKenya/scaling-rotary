import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddSkillModel } from 'src/app/shared/models/add-skill.model';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-add-skill',
  templateUrl: './resume-add-skill.component.html',
  styleUrls: ['./resume-add-skill.component.scss']
})
export class ResumeAddSkillComponent implements OnInit {

  addSkillForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.addSkillForm = this.formBuilder.group({
      skill: ['', Validators.required]
    });
  }

  onAddSkillFormSubmit() {
    const newSkill: AddSkillModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      skill: this.addSkillForm.value.skill
    };

    this.resumeService.addSkill(newSkill)
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
