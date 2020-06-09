import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user-management/services/user.service';
import { ResumeService } from '../../services/resume.service';
import { EditValueStatementModel } from 'src/app/shared/models/edit-value-statement.model';

@Component({
  selector: 'app-resume-edit-value-statement',
  templateUrl: './resume-edit-value-statement.component.html',
  styleUrls: ['./resume-edit-value-statement.component.scss']
})
export class ResumeEditValueStatementComponent implements OnInit {

  valueStatement?: string;
  editValueStatementForm: FormGroup;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private formBuilder: FormBuilder,
              private userService: UserService,
              private resumeService: ResumeService) { }

  ngOnInit(): void {
    this.editValueStatementForm = this.formBuilder.group({
      valueStatement: ['', [Validators.required]]
    });

    this.getUserValueStatement();
  }

  async getUserValueStatement() {
    (await this.userService.getUserById(this.route.parent.snapshot.paramMap.get('id'))).subscribe(
      (response: any) => {
        this.editValueStatementForm = this.formBuilder.group({
          valueStatement: [response.result.introduction.valueStatement, [Validators.required]]
        });
      }
    );
  }

  onEditValueStatementFormSubmit() {
    const valueStatement: EditValueStatementModel = {
      userId: this.route.parent.snapshot.paramMap.get('id'),
      valueStatement: this.editValueStatementForm.value.valueStatement
    };

    this.resumeService.editValueStatement(valueStatement).subscribe(
      (response: any) => {
        this.router.navigate([`resume/${response.result._id}`]);
      },
      (response) => {
        console.log(response);
      }
    );
  }
}
