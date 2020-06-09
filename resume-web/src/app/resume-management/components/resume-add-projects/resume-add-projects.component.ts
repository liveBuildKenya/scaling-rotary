import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddProjectModel } from 'src/app/shared/models/add-project.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ResumeService } from '../../services/resume.service';

@Component({
  selector: 'app-resume-add-projects',
  templateUrl: './resume-add-projects.component.html',
  styleUrls: ['./resume-add-projects.component.scss']
})
export class ResumeAddProjectsComponent implements OnInit {

  addProjectForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.addProjectForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      url: ['', [Validators.required]],
      description: ['', [Validators.required]],
      ongoing: [false]
    });
  }

  onAddProjectFormSubmit() {
    const newProject: AddProjectModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      name: this.addProjectForm.value.name,
      url: this.addProjectForm.value.url,
      description: this.addProjectForm.value.description,
      ongoing: this.addProjectForm.value.ongoing
    };

    this.resumeService.addProject(newProject).subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result._id}`]);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
