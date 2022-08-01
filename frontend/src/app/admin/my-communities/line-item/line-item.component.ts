import { Component, OnInit, Input } from '@angular/core';
import { Community } from '../../../services/types';

@Component({
  selector: 'app-line-item',
  templateUrl: './line-item.component.html',
  styleUrls: ['./line-item.component.scss']
})
export class LineItemComponent implements OnInit {
  @Input() community: Community;

  constructor() { }

  ngOnInit() {}
}
