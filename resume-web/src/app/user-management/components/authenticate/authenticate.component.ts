import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent implements OnInit {

  authenticateForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onAuthenticateFormSubmit(){
    this.userService.loginUser(this.authenticateForm.value)
    .subscribe(
      (response: any) => {
        this.router.navigateByUrl(`/resume/${response.result.user._id}`);
      },
      (response) => {
        console.log('Error');
        console.log(response.status);
      }
    );
  }

}
