import { Component, Input, OnInit } from '@angular/core';
import { USER } from 'src/app/services/types';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  @Input() users: USER[] = [];

  constructor() {}

  ngOnInit() {}
}
