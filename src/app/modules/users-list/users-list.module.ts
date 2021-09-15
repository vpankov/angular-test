import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list.component';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [UsersListComponent, ListItemComponent],
  imports: [
    CommonModule
  ],
  exports: [UsersListComponent]
})
export class UsersListModule { }
