import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AddUserLanguageModel } from 'src/app/shared/models/add-user-language.model';

@Component({
  selector: 'app-resume-add-language',
  templateUrl: './resume-add-language.component.html',
  styleUrls: ['./resume-add-language.component.scss']
})
export class ResumeAddLanguageComponent implements OnInit {

  addLanguageForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.addLanguageForm = this.formBuilder.group({
      language: ['', [Validators.required]],
      level: ['', [Validators.required]]
    });
  }

  onAddLanguageFormSubmit() {
    const newLanguage: AddUserLanguageModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      language: this.addLanguageForm.value.language,
      level: this.addLanguageForm.value.level
    };

    this.resumeService.addUseLanguage(newLanguage).subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result._id}`]);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
