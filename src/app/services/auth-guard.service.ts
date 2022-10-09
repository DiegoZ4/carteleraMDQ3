import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(
    private storageService: StorageService,
    private router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.storageService.get('user-cartelera').then( user => {
      console.log( user )
      if (!user) {
        return this.router.parseUrl('/');
      } else {
        return true;
      }
    });
  }
}
