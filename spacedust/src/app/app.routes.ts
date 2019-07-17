import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ExoplanetComponent } from './exoplanet/exoplanet.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ExoplanetNewComponent } from './exoplanet-new/exoplanet-new.component';

export const ROUTES: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'catalog', component: CatalogComponent, canActivate: [AuthGuard] },
  {
    path: 'exoplanet/:id',
    component: ExoplanetComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'new-exoplanet',
    component: ExoplanetNewComponent
  },
  { path: '**', redirectTo: 'catalog' }
];
