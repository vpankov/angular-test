import { Component } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [UsersService]
})
export class HomePage {

  constructor(
    public usersService: UsersService,
  ) {}

  ionViewWillEnter() {
    this.usersService.getUsers();
  }

}
