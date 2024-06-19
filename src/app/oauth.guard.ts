import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';

export const oauthGuard: CanActivateFn = (route, state) => {

  const oauthService = inject(OAuthService);
  const router = inject(Router);

  if (oauthService.hasValidAccessToken()) {
    return true;
  }

  router.navigate(['login'], { queryParams: { returnUrl: state.url.replace('/', '') } });

  return false;
};
