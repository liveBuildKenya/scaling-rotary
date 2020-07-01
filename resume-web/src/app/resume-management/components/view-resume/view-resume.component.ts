import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterEvent, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/user-management/services/user.service';
import { UserModel } from 'src/app/shared/models/user.model';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { ResumeSection } from 'src/app/shared/enums/resume-section.enum';
import { UploadType } from 'src/app/shared/enums/upload-types.enum';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-view-resume',
  templateUrl: './view-resume.component.html',
  styleUrls: ['./view-resume.component.scss']
})
export class ViewResumeComponent implements OnInit {

  user: UserModel;

  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faFacebookF = faFacebookF;
  faTwitter = faTwitter;
  faLinkedIn = faLinkedin;

  resumeSections = ResumeSection;
  uploadType = UploadType;
  environment = environment;

  introductionVideoUrl: string;


  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  async ngOnInit() {
    (await this.userService.getUserById(this.route.snapshot.paramMap.get('id')))
    .subscribe(
      (response: any) => {
        this.user = response.result;
        console.log(this.user);
        this.introductionVideoUrl = environment.api_url + `resume/video/${this.user.introduction?.videoId}`;
      }
    );

    this.router.events.subscribe(async (e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        (await this.userService.getUserById(this.route.snapshot.paramMap.get('id')))
        .subscribe(
          (response: any) => {
            this.user = response.result;
            this.introductionVideoUrl = environment.api_url + `resume/video/${this.user.introduction?.videoId}`;
          }
        );
      }
    });
  }
}
