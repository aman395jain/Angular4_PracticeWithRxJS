//
// import {Injectable} from "@angular/core";
// import {HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
// import {Observable} from "rxjs/Observable";
// import {HttpEvent} from "@angular/common/http";
//
// @Injectable()
// export class TokenInterceptor implements HttpInterceptor{
//     constructor(){}
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         var authReq = req.clone({
//             headers: req.headers.set('headerName','headerName')
//         })
//         return next.handle(authReq);
//     }
//
//
// }
