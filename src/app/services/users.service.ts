import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getBaseUrl } from 'src/app/helpers/settings';
import { HttpClient, HttpParams } from '@angular/common/http';
import { USER, USERS_RESPONSE } from './types';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  users: USER[] = [];
  usersResponse: USERS_RESPONSE | null = null;
  isLoading = false;

  constructor(private httpClient: HttpClient) {}

  get baseUrl() {
    return getBaseUrl();
  }

  getUsers(): void {
    if (this.isLoading) {
      return;
    };
    if(this.usersResponse !== null && this.usersResponse.page === this.usersResponse.total_pages){
      return;
    }

    this.isLoading = true;

    const nextPage = this.usersResponse !== null?  this.usersResponse?.page + 1 : 1;

    let params = new HttpParams();
    params = params.append('page', nextPage);
    params = params.append('per_page', 10);

    this.httpClient
      .get(this.baseUrl + '/users', {params})
      .subscribe((res: USERS_RESPONSE) => {
        this.usersResponse = res;
        this.users = this.users.concat(res.data);
        this.isLoading = false;
      });
  }
}
