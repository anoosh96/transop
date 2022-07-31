import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../services/types';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrls: ['./my-community.component.scss']
})

export class MyCommunityComponent implements OnInit {
  @Input() user: User;

  constructor(private commService: CommunityService) { }

  ngOnInit(): void {
    this.commService.getMyCommunity(this.user.id);
  }

}
