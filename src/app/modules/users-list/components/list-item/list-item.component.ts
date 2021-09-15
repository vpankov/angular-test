import { Component, Input, OnInit } from '@angular/core';
import { USER } from 'src/app/services/types';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() user: USER;

  constructor(
    public usersService: UsersService,
  ) {}

  ngOnInit() {}
}
