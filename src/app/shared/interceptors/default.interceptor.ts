import {tap} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse, HttpErrorResponse, HttpResponseBase
} from '@angular/common/http';

import { SecurityService } from '../services/security.service';
import { Router } from '@angular/router';
import {JWTHelper} from '../helpers/jwt.helper';

const headerJWT = 'Authorization';
const headerNewJWT = 'token-new';

@Injectable()
export class DefaultInterceptor implements HttpInterceptor {

  constructor(
    private ss: SecurityService,
    private router: Router
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Инжектим JWT
    const reqClone = this.injectJWTHeader(req);

    // Выполняем запрос и обрабатываем ответ
    return next
    .handle(reqClone)
    .pipe(
      tap(
        // Если получили штатный ответ
        event => {
          if (event instanceof HttpResponse) {
            // Обновляем сессию, если сервер выдал новый JWT
            this.updateSession(event);
          }
        },
        // Если сервер вернул ошибку
        error => {
          if (error instanceof HttpErrorResponse) {

            // Обновляем сессию, если сервер выдал новый JWT
            this.updateSession(error);
          }
        }
      )
    );
  }

  private injectJWTHeader(req: HttpRequest<any>): HttpRequest<any> {
      if (JWTHelper.getToken()) {
          return req.clone({
              headers: req.headers.set(headerJWT, `Token ${JWTHelper.getToken()}`)
          });
      }
      return req.clone({
      });
  }

  private updateSession(res: any) {
    if (res instanceof HttpResponseBase) {
      const newToken = res.headers.get(headerNewJWT);
      if (newToken) {
        this.ss.onNewToken(newToken);
      }
    }
  }
}
