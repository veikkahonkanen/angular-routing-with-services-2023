import { ResolveFn } from '@angular/router';
import { AdministratorsService } from './administrators.service';
import { inject } from '@angular/core';

export const administratorsResolver: ResolveFn<boolean> = (
    route,
    state,
    administratorsService: AdministratorsService = inject(AdministratorsService)
  ) => {
  return administratorsService.getAdmins();
};
