import { Inject, Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NotificationService } from '@module/shared';

enum ErrorMessage {
  Error400 = 'Unknown error',
  Error401 = 'User is not authenticated',
  Error403 = 'Forbidden request has been made',
  Error404 = 'API not found',
  Error500 = 'There is internal Server error',
}

export interface BackEndResponse {
  success: false;
  symbols?: any;
  date?: string;
  result?: string;
  error?: {
    code: number;
    info: string;
  };
}

@Injectable()
export class GlobalHttpInterceptor implements HttpInterceptor {
  accessKey: string;
  constructor(
    @Inject('environment') environment: any,
    private _notificationService: NotificationService
  ) {
    this.accessKey = environment.accesskey;
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let modifiedRequest = request;
    if (this.accessKey) {
      modifiedRequest = request.clone({
        setParams: { ['access_key']: this.accessKey },
      });
    }

    return next.handle(modifiedRequest).pipe(
      map((response) => {
        if (response instanceof HttpResponse && !response.body?.success) {
          let title = response.body?.error?.info
            ? response.body?.error?.info
            : 'API Error';
          this._notificationService.openSnackBar(title, 'close');
        }
        return response;
      }),
      catchError((error) => {
        let title: string | ErrorMessage = 'Unknown error';
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            title = 'Error Event';
          } else {
            let x = `Error${error.status}` as string;
            title =
              error.error?.message ??
              Object.keys(ErrorMessage).find(
                (element) => element === `Error${error.status}`
              );
            if (error.status === 401) {
              // currently the api is public, so we wont expect 401 error
            }
          }
        }
        this._notificationService.openSnackBar(title, 'close');
        return throwError(() => error);
      })
    );
  }
}
