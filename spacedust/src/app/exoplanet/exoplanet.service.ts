import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './../auth/auth.service';
import { Exoplanet } from './exoplanet.model';

@Injectable({
  providedIn: 'root'
})
export class ExoplanetService {
  public exoplanetImages: any[] = [
    {
      imageNum: 1,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-1_q5x5w4.jpg'
    },
    {
      imageNum: 2,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-2_t6njgk.jpg'
    },
    {
      imageNum: 3,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-3_etmwvw.jpg'
    },
    {
      imageNum: 4,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-4_t3hgzs.jpg'
    },
    {
      imageNum: 5,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-5_eguksf.jpg'
    },
    {
      imageNum: 6,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-6_bvxkvx.jpg'
    },
    {
      imageNum: 7,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-7_sfpgpj.jpg'
    },
    {
      imageNum: 8,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-8_b80xad.jpg'
    },
    {
      imageNum: 9,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779675/planet-9_kd7fv6.jpg'
    },
    {
      imageNum: 10,
      path:
        'http://res.cloudinary.com/dkpz9r2q7/image/upload/v1527779676/planet-10_tkiv5n.jpg'
    }
  ];
  constructor(public http: HttpClient, public authService: AuthService) {}

  public getExoplanets(): Observable<any> {
    return this.http.get('/api/exoplanets');
  }

  public getExoplanet(id: string): Observable<any> {
    return this.http.get(`/api/exoplanets/${id}`);
  }

  public postExoplanet(exoplanet: Exoplanet): Observable<any> {
    return this.http.post('/api/exoplanets', { data: exoplanet });
  }

  public deleteExoplanet(id: string): Observable<any> {
    return this.http.delete(`/api/exoplanets/${id}`);
  }
}
