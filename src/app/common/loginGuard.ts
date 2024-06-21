import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Util } from './app.utils';
import { AppGlobalInfo } from '../app.appglobalinfo';

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {

    constructor(private readonly util: Util, private readonly appGlobalInfo: AppGlobalInfo) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        let isLogged = false;
        if (this.appGlobalInfo.getLoggedUserInfo().logged) {
            isLogged = !this.appGlobalInfo.getLoggedUserInfo().isSessionExpired();
            if (!isLogged) {
                this.appGlobalInfo.setLogOut();
            }
        } else {
            isLogged = false;
        }
        if (!isLogged) {
            this.util.navigateToLogin({
                queryParams: {
                    return: state.url
                }
            });
        } else {
            this.appGlobalInfo.getLoggedUserInfo().recordUserActivity();
        }

        return isLogged;
    }
}
