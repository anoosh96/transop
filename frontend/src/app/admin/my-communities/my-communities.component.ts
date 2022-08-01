import { Component, OnInit, Input } from '@angular/core';
import { User, Community } from '../../services/types';
import { CommunityService } from '../../services/community.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-communities',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.scss']
})

export class MyCommunitiesComponent implements OnInit {
  @Input() user: User;
  communities: Community[];
  toggleCreateCommunity = false;
  subscription: Subscription;

  constructor(private commService: CommunityService) { }

  ngOnInit(): void {
    this.commService.fetchMyCommunities(this.user.id);

    this.subscription = this.commService.myCommunities.subscribe(myCommunities => {
      this.communities = myCommunities;
    });
  }

  toggleCreateCommunityForm() {
    this.toggleCreateCommunity = !this.toggleCreateCommunity;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
