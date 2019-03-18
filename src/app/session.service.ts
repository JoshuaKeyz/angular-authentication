import { Injectable } from '@angular/core';

@Injectable()
export class SessionService {

  constructor() { }
  saveToken(token) {
    localStorage.setItem('tokenId', token);
  }
  getToken() {
    return localStorage.getItem('tokenId');
  }

}
