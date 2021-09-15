import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/app/helpers/settings';
import { HttpClient } from '@angular/common/http';
import { USER, USERS_RESPONSE } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: USER[] = [];
  usersResponse: USERS_RESPONSE | null = null;

  constructor(private httpClient: HttpClient) {}

  get baseUrl() {
    return getBaseUrl();
  }

  getUsers(): void{
     this.httpClient.get(this.baseUrl + `/users?page={0}`)
     .subscribe((res: USERS_RESPONSE) => {
       this.usersResponse = res;
       this.users = res.data;
      });
  }
}
