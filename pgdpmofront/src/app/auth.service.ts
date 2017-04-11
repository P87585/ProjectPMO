import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { tokenNotExpired , JwtHelper } from 'angular2-jwt';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthService {
	jwtHelper : JwtHelper = new JwtHelper();

	constructor(private http: Http) { }

	sudahLogin(): boolean {
		return tokenNotExpired("access_token");
	}

	getUserInfo(): any {
		return JSON.parse(localStorage.getItem("userInfo"));
	}

	login(email: string, password: string): Promise<boolean> {

		let client_id = 'aplikasijs';
		let client_secret = 'aplikasi123';
		var basicheader = btoa(client_id + ':' + client_secret);
		
		let url: string = "/oauth/token";
		let body = new URLSearchParams()
		body.append("grant_type", "password");
		body.append("username", email);
		body.append("password", password);

		// body = grant_type=password&username="+username+"&password="+password
		let basicAuthHeader = "Basic " + basicheader;
		let headers = new Headers({
			'Content-Type': 'application/x-www-form-urlencoded',
			'Authorization': basicAuthHeader
		});

		let options = new RequestOptions({ headers: headers });
		return this.http.post(url, body, options).toPromise()
			.then(hasil  => {
				let token = hasil.json();
				console.log(token);
				if (token && token.access_token) {
					localStorage.setItem("access_token", token.access_token);
					let tokenContent = this.jwtHelper.decodeToken(token.access_token);
					let userObject = {
						username: email,
						fullname: tokenContent.user_name,
						permissions: tokenContent.authorities,
						access_token: token.access_token
					};
					console.log("permissions", userObject.permissions);
					 localStorage.setItem("userInfo", JSON.stringify({username : email, fullname: email}));
					return true;
				}
				return false;
			}).catch(error => {
				console.log(error);
				return false;
			});
	}

	logout(): void {
		localStorage.removeItem("userInfo");
		localStorage.removeItem("access_token");
	}
}