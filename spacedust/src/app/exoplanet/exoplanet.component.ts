import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Exoplanet } from './exoplanet.model';
import { ExoplanetService } from './exoplanet.service';
import { AuthService } from './../auth/auth.service';

@Component({
  selector: 'app-exoplanet',
  templateUrl: './exoplanet.component.html',
  styleUrls: ['./exoplanet.component.scss']
})
export class ExoplanetComponent implements OnInit {
  public exoplanet: Exoplanet = {
    _id: '',
    name: '',
    description: '',
    radius: '',
    orbitalPeriod: '',
    discoveryYear: '',
    image: ''
  };

  constructor(
    public route: ActivatedRoute,
    public exoplanetService: ExoplanetService,
    public router: Router,
    public authService: AuthService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(param => {
      this.getExoplanet(param.id);
    });
  }

  public getExoplanet(id: string): void {
    this.exoplanetService.getExoplanet(id).subscribe(
      data => {
        this.exoplanet = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  public deleteExoplanet(): void {
    if (confirm('Are you sure you want to delete this exoplanet?')) {
      this.exoplanetService.deleteExoplanet(this.exoplanet._id).subscribe(
        data => {
          this.router.navigate(['catalog']);
        },
        err => {
          console.log(err);
        }
      );
    }
  }
}
