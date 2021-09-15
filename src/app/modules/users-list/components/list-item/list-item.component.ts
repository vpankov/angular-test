import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { USER } from 'src/app/services/types';
@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() user: USER;

  constructor() {}

  ngOnInit() {}

}
