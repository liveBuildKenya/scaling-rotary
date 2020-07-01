import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ResumeService } from '../../services/resume.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {

  @Input() resumeSection: string;
  @Input() userIdentifier: string;
  @Input() uploadType: string;

  uploadForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private resumeService: ResumeService,
              private router: Router) { }

  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      uploadData: ['']
    });
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      if (this.uploadType === 'VIDEO') {
          let duration;
          const video = document.createElement('video');
          video.preload = 'metadata';
          video.src = URL.createObjectURL(file);

          video.onloadedmetadata = () => {
            window.URL.revokeObjectURL(video.src);
            duration = video.duration;
            if (duration > 7) {
              console.log('Do not upload the video');
            } else {
              console.log('Uploading video');
              this.uploadForm.get('uploadData').setValue(file);

              const formData = new FormData();
              formData.append('file', this.uploadForm.get('uploadData').value);
              formData.append('section', this.resumeSection);
              formData.append('uploadType', this.uploadType);
              formData.append('userId', this.userIdentifier);

              this.resumeService.uploadVideo(formData).subscribe(
                (response: any) => {
                  this.router.navigate([`resume/${response.result._id}`]);
                }
              );
          }
        };
      }
      if (this.uploadType === 'POSTER') {
        console.log('Uploading poster');
        this.uploadForm.get('uploadData').setValue(file);

        const formData = new FormData();
        formData.append('file', this.uploadForm.get('uploadData').value);
        formData.append('section', this.resumeSection);
        formData.append('uploadType', this.uploadType);
        formData.append('userId', this.userIdentifier);

        this.resumeService.uploadPoster(formData).subscribe(
          (response: any) => {
            this.router.navigate([`resume/${response.result._id}`]);
          }
        );
      }
    }
  }
}
