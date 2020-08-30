import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';

@Injectable()
export class AuthenticationService {
    baseUrl = environment.serverUrl
    headers: HttpHeaders = new HttpHeaders();

    constructor(private http: HttpClient) {
        this.headers.append('content-type', 'application/json');
    }

    register(user: any) {
        return this.http.post(this.baseUrl + '/api/services/app/Account/Register', user, { headers: this.headers });
    }

    authenticate(credentials: any) {
        return this.http.post(this.baseUrl + '/api/TokenAuth/Authenticate', credentials, { headers: this.headers });
    }
}
