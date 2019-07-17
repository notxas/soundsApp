import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators
} from '@angular/forms';
import { ExoplanetService } from './../exoplanet/exoplanet.service';

@Component({
  selector: 'app-exoplanet-new',
  templateUrl: './exoplanet-new.component.html',
  styleUrls: ['./exoplanet-new.component.scss']
})
export class ExoplanetNewComponent implements OnInit {
  public exoplanetForm: FormGroup;
  public isLoading = false;

  constructor(
    public fb: FormBuilder,
    public exoplanetService: ExoplanetService,
    public router: Router
  ) {}

  ngOnInit() {
    this.createForm();
  }

  private createForm(): void {
    this.exoplanetForm = this.fb.group({
      name: new FormControl('', { validators: [Validators.required] }),
      description: '',
      radius: '',
      orbitalPeriod: '',
      discoveryYear: new FormControl('', { validators: [Validators.required] }),
      image: ''
    });
  }

  public onSubmit(): void {
    if (this.exoplanetForm.valid) {
      this.isLoading = true;
      const exoplanetData = this.exoplanetForm.value;

      this.exoplanetService.postExoplanet(exoplanetData).subscribe(
        data => {
          this.isLoading = false;
          const newExoplanetId = data.result._id;
          this.router.navigate(['exoplanet', newExoplanetId]);
        },
        error => {
          console.log(error);
        }
      );
    }
  }
}
