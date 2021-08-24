import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  baseUrl = 'https://www.googleapis.com/youtube/v3';
  apiKey = 'AIzaSyCclLAstcCgyYb62UKGrwa1f2_-DE7KyJs';

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const paramReq = req.clone({
      url: `${this.baseUrl}/${req.url}`,
      setParams: { key: this.apiKey },
    });
    return next.handle(paramReq);
  }
}
