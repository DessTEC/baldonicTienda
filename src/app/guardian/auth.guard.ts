import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {LogIn} from '/home/david/baldonic-tienda/src/app/services/logIn.service';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private authService: LogIn, private router: Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean>{
        return this.authService.isLoggedIn         // {1}
          .pipe(
            take(1),                              // {2} 
            map((isLoggedIn: boolean) => {         // {3}
              if (!isLoggedIn){
                if (this.authService.verifyToken()) {
                  this.authService.changeState(true)
                  return true;
                }
                this.router.navigate(['/register']);  // {4}
                return false;
              }
              return true;
            })
          )
      }
}
