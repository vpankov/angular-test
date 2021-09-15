import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  constructor() {}

  ngOnInit() {}

  scrollHandler(e) {
    const element = e.target;
    const isScollEnded =
      element.scrollHeight - 10 < element.offsetHeight + element.scrollTop;

    if (isScollEnded && !this.isLoading) {
      this.scrollEnd.emit();
    }
  }
}
