import { Injectable }          from '@angular/core';
import { CanActivate }         from '@angular/router';
import { Observable }          from 'rxjs/Observable';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  canActivate() : Observable<any> | Promise<any> | any {
    //return this.memberService.getMember().then( ( member )=> {
    //  if( !member ) {
    //    this.globalDataService.loginPopup = true;
    //    return false;
    //  }
    //  return true;
    //} );
    return false;
  }

}
