import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../auth/auth.service';
import { ExoplanetService } from '../exoplanet/exoplanet.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  public exoplanets: any[] = [];
  constructor(
    public authService: AuthService,
    public exoplanetService: ExoplanetService,
    public router: Router
  ) {}

  ngOnInit() {
    this.getExoplanets();
  }

  private getExoplanets(): void {
    this.exoplanetService.getExoplanets().subscribe(
      data => {
        this.exoplanets = data.result;
      },
      err => {
        console.log(err);
      }
    );
  }

  public goToExoplanet(id: string): void {
    this.router.navigate(['exoplanet', id]);
  }
}
