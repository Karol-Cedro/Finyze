import { HttpInterceptorFn } from '@angular/common/http';
import { inject, NgZone } from '@angular/core';
import { tap } from 'rxjs/operators';

export const zoneInterceptor: HttpInterceptorFn = (req, next) => {
  const zone = inject(NgZone);

  return next(req).pipe(
    tap({
      next: () => {
        if (!NgZone.isInAngularZone()) {
          zone.run(() => {});
        }
      },
      error: () => {
        if (!NgZone.isInAngularZone()) {
          zone.run(() => {});
        }
      },
      complete: () => {
        if (!NgZone.isInAngularZone()) {
          zone.run(() => {});
        }
      }
    })
  );
};
