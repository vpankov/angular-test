import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UserDetailsPage } from 'src/app/screens/user-details/user-details.page';
import { USER } from 'src/app/services/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: USER[] = [];
  @Input() isLoading = false;
  @Output() scrollEnd: EventEmitter<any> = new EventEmitter<any>();
  constructor(
    public modalController: ModalController
  ) {}

  ngOnInit() {}

  scrollHandler(e) {
    const element = e.target;
    const isScollEnded =
      element.scrollHeight - 10 < element.offsetHeight + element.scrollTop;

    if (isScollEnded && !this.isLoading) {
      this.scrollEnd.emit();
    }
  }

  async showDetails(user) {
    const modal = await this.modalController.create({
      component: UserDetailsPage,
      cssClass: 'class',
      componentProps: {
        user,
      },
    });
    modal.onDidDismiss().then(() => {});
    return await modal.present();
  }
}
