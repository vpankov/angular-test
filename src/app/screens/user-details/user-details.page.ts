import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { USER, USER_DETAILS_RESPONSE } from 'src/app/services/types';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.page.html',
  styleUrls: ['./user-details.page.scss'],
})
export class UserDetailsPage {

  @Input() user;
  userDetails: USER;

  constructor(
    private modalController: ModalController,
    public usersService: UsersService,
  ) { }

  ionViewWillEnter() {
    this.usersService.getUserDetails(this.user.id).subscribe((res: USER_DETAILS_RESPONSE) => {
      this.userDetails = res.data;
    });
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

}
