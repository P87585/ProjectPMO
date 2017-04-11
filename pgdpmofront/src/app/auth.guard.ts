import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

	constructor(private auth: AuthService, private router: Router) { }

	canActivate() {
		console.log('AuthGuard#canActivate called');
		let sudahLogin: boolean = this.auth.sudahLogin();
		if (!sudahLogin) {
			this.router.navigate(['/login']);
		}
		return (sudahLogin);
	}
}