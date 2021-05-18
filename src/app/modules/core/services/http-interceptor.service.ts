import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const apiKey = 'fHPsP3FajWwnkwxBcsqjpjCKdtGrds7kivANIkAX';

    if (!apiKey) {
      return next.handle(req);
    }

    const headers = req.clone({
      headers: req.headers.set('X-API-Key', apiKey),
    });

    console.log(headers);

    return next.handle(headers);
  }
}
