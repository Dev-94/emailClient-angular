import { Injectable, Inject } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // withCredentials is read-only, must clone it to make changes
        const modifiedReq = req.clone({
            withCredentials: true,
        })
        return next.handle(modifiedReq)
    }

}
