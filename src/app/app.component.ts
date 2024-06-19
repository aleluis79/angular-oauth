import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authCodeFlowConfig } from './app.oauth';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    JsonPipe,
    RouterLink
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-auth';

  oauthService = inject(OAuthService)

  router = inject(Router);

  route = inject(ActivatedRoute);

  constructor() {
    this.oauthService.showDebugInformation = true;
    this.oauthService.configure(authCodeFlowConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        if (this.router.url.includes('/login')) {
          let urlState = this.route.snapshot.queryParams['state'].split(";")[1]
          if (urlState && urlState !== '') {
            this,this.router.navigate([urlState]);
          } else {
            this,this.router.navigate(['/home']);
          }
        }
      }
    });
  }

  logout() {
    this.oauthService.logOut();
  }
}
