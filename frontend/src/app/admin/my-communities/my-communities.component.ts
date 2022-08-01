import { Component, OnInit, Input } from '@angular/core';
import { User, Community } from '../../services/types';
import { CommunityService } from '../../services/community.service';

@Component({
  selector: 'app-my-communities',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.scss']
})

export class MyCommunitiesComponent implements OnInit {
  @Input() user: User;
  communities: Community[];
  toggleCreateCommunity = false;

  constructor(private commService: CommunityService) { }

  ngOnInit(): void {
    this.commService.initGetMyCommunities(this.user.id);

    this.commService.myCommunities.subscribe(myCommunities => {
      this.communities = myCommunities
    });
  }

  toggleCreateCommunityForm() {
    this.toggleCreateCommunity = !this.toggleCreateCommunity;
  }

}
