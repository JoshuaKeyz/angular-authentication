import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SessionService } from './session.service';

@Injectable()
export class NetworkService {

  constructor(private httpClient: HttpClient,
    private sessionService : SessionService) { }

  register(data) {
    const host = 'http://localhost:3000/users';
    return this.httpClient.post(host, data, {observe: 'response'});
  }
  login(data) {
    const host = 'http://localhost:3000/tokens';
    return this.httpClient.post(host, data, {observe: 'response'});
  }
  isLoggedIn(){
    let data = JSON.parse(this.sessionService.getToken());
    let httpOptions;
    let host;
    if(data) {
      httpOptions = new HttpHeaders({
        'token': data.id
      });
      host = `http://localhost:3000/users?phone=${data.phone}`
    }else {
      host = `http://localhost:3000/users`
    }

    return this.httpClient.get(host, {headers: httpOptions})
  }
}
