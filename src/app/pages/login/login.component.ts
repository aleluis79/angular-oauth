import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export default class LoginComponent implements OnInit {

  returnUrl: string = '';

  router = inject(Router);

  route = inject(ActivatedRoute)
  ngOnInit(): void {

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'];

    if (this.oauthService.hasValidAccessToken()) {
      this.router.navigate(['/home']);
    }
  }

  oauthService = inject(OAuthService)

  login() {
    this.oauthService.initCodeFlow(this.returnUrl)
  }

}
