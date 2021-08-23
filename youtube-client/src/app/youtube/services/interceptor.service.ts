import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  baseUrl = 'https://www.googleapis.com/youtube/v3';
  apiKey = 'AIzaSyCjWXrzTf4tJ8tZMBgx6ZW4KSFdOAi1hzI';
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> | void {
    console.log(req.url);
    if (req.body) {
      const paramReq = req.clone({
        url: `${this.baseUrl}/${req.url}`,
        setParams: { apiKey: this.apiKey },
      });
      return next.handle(paramReq);
    }
  }
}
