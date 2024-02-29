import { CanActivateFn } from '@angular/router';
import { ProfileService } from './profile.service';
import { inject } from '@angular/core';

export const restrictedGuard: CanActivateFn = (route, state) => {
  const profileService = inject(ProfileService);
  return profileService.status();
};
