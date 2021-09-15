import { Injectable, Injector } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import * as AppErrors from '../store/errors';

import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { NotifyErrorAction, NotifyWarningAction } from '../store/notifications';

@Injectable()
export default class HttpErrorInterceptor implements HttpInterceptor {
  errorsStore$: any;
  isEnablePremiumWarning = false;
  isEnableTooManyWarning = false;
  errors = [];

  constructor(
    private store: Store<any>,
    private router: Router,
    private inj: Injector
  ) {
    this.errorsStore$ = store.pipe(select(AppErrors.getItems));
    this.errorsStore$.subscribe((r: any) => {
      this.errors = r;
    });
  }

  debounceErrors() {
    if (this.isEnableTooManyWarning) {
      return true;
    }
    this.isEnableTooManyWarning = true;
    setTimeout(() => {
      this.isEnableTooManyWarning = false;
    }, 3000);
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      catchError((err: HttpErrorResponse) => {
        const msg = err.message ? err.message : err.toString();

        if (this.debounceErrors()) {
          return null;
        }

        if (err.error instanceof Error) {
          // A client-side or network error occurred. Handle it accordingly.
          // console.error('An error occurred:', err.error['message']);
        } else if (
          !request.params.has('no-msg') &&
          !request.headers.has('no-msg')
        ) {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          let message = '';
          switch (err.status) {
            case 0:
              this.store.dispatch(
                new NotifyWarningAction(
                  'Server unavailable, please try again later'
                )
              );
              break;
            case 401:
              this.store.dispatch(
                new NotifyErrorAction(
                  'Please try login again',
                  'Authorization error'
                )
              );
              break;
            case 422:
              message = '';
              if (err?.error?.length) {
                message = err.error.map((item) => item.message).join(' ');
              } else {
                message = err.message;
              }
              this.store.dispatch(
                new NotifyErrorAction(
                  message,
                  'Data error' + (err.status ? '#' + err.status : '')
                )
              );
              break;
            case 400:
              message = '';

              if (err?.error?.length) {
                message = err.error.map((item) => item.message).join(' ');
              } else {
                message = err.error.message;
              }
              this.store.dispatch(
                new NotifyErrorAction(
                  message,
                  'Bad request' + (err.status ? '#' + err.status : '')
                )
              );
              break;
            case 500:
              if (this.isEnableTooManyWarning) {
                break;
              }
              this.isEnableTooManyWarning = true;
              setTimeout(() => {
                this.isEnableTooManyWarning = false;
              }, 3000);
              this.store.dispatch(
                new NotifyErrorAction(
                  (err.error && err.error.message) || 'Data will not be saved',
                  'Internal server error' + (err.status ? '#' + err.status : '')
                )
              );
              break;

            case 404:
              this.store.dispatch(
                new NotifyErrorAction(
                  msg,
                  'Information was not found' +
                    (err.status ? '#' + err.status : '')
                )
              );
              break;
            default:
              if (!this.errors.length) {
                const data = {
                  request: JSON.stringify(request),
                  response: JSON.stringify(err),
                  code: err.status,
                };
                this.store.dispatch(
                  new NotifyErrorAction(
                    (err.error && err.error.message) ||
                      'The data will not be save',
                    'Server error' + (err.status ? '#' + err.status : '')
                  )
                );
              } else {
                break;
              }
              break;
          }
        }
        return next.handle(request);
      })
    );
  }
}
