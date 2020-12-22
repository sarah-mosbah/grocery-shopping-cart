import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router,RouterStateSnapshot,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSer: AuthService, private route: Router) { }

  
  canActivate(route:ActivatedRouteSnapshot,state:RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return  this.authSer.currentUser.pipe(map(u=>{
      if (u) return true;

      else{
        this.route.navigate(['/login'],{queryParams:{returnUrl:state.url}});
        return false;
      }
    }))

  }
}

