import { Injectable } from '@angular/core';
import { CanActivate, 
  ActivatedRouteSnapshot, 
  RouterStateSnapshot, 
  Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NetworkService } from './network.service';
import { SessionService } from './session.service';

@Injectable()
export class AuthGuardService implements CanActivate {


  constructor(private networkService: NetworkService,
    private router: Router) { }
  canActivate(
      route: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Promise<boolean>{

    return this.networkService.isLoggedIn().toPromise()
        .then(data=>{
          return true;
        }, error=>{
          console.log(error);
          this.router.navigate(['/login']);
          return false;
        })
  }
}
