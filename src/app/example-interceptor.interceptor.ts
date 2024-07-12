import {HttpEventType, HttpInterceptorFn} from '@angular/common/http';
import {tap} from "rxjs";
import {inject} from "@angular/core";
import {AppCookieService} from "./service/app-cookie.service";

export const exampleInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  console.log("Interceptor invocado");
  console.log(req.url);

  //inject(AppCookieService).get("XSRF-TOKEN")
  req.headers.set("X-XSRF-TOKEN", "TOKEN CSRF")
  req.headers.set("Authorization", "Bearer "+inject(AppCookieService).get("XSRF-TOKEN"))

  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      console.log(req.url, 'returned a response with status', event.status);
    }
  }));
};
