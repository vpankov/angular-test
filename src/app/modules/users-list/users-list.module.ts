import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UsersListComponent, ListItemComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
