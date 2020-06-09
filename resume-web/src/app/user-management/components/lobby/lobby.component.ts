import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.scss']
})
export class LobbyComponent implements OnInit {

  lobbyForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onLobbySubmit() {
    this.userService.registerUser(this.lobbyForm.value)
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
