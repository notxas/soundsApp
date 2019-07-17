import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';

import { ROUTES } from './app.routes';
import { LoginFormComponent } from './login-form/login-form.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { InputErrorComponent } from './input-error/input-error.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ExoplanetCardComponent } from './exoplanet-card/exoplanet-card.component';
import { CatalogComponent } from './catalog/catalog.component';
import { LoginFormSimpleComponent } from './login-form-simple/login-form-simple.component';
import { FormMessageComponent } from './form-message/form-message.component';
import { ExoplanetComponent } from './exoplanet/exoplanet.component';
import { ExoplanetNewComponent } from './exoplanet-new/exoplanet-new.component';

import { ExoplanetService } from './exoplanet/exoplanet.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { TokenInterceptorService as TokenInterceptor } from './auth/token-interceptor.service';

import { JwtModule } from '@auth0/angular-jwt';

export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    LoginFormComponent,
    SignupFormComponent,
    InputErrorComponent,
    SidebarComponent,
    ExoplanetCardComponent,
    CatalogComponent,
    LoginFormSimpleComponent,
    FormMessageComponent,
    ExoplanetComponent,
    ExoplanetNewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:3000']
      }
    })
  ],
  providers: [
    ExoplanetService,
    AuthGuardService
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: TokenInterceptor,
    //   multi: true
    // },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
