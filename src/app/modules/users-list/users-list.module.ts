import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { IonicModule } from '@ionic/angular';
import { LoaderComponent } from './components/loader/loader.component';
import { LoaderItemComponent } from './components/loader/components/loader-item/loader-item.component';



@NgModule({
  declarations: [UsersListComponent, ListItemComponent, LoaderComponent, LoaderItemComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
