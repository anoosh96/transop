import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Community } from './types';
import { GET_COMMUNITY_BY_USER_ID_QUERY } from './queries';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  community: Community;

  constructor(private apollo: Apollo) {}

  getMyCommunity(user_id: string){
    this.apollo.watchQuery<any>({
      query: GET_COMMUNITY_BY_USER_ID_QUERY,
      variables: {
        user_id: user_id
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.community = data.myCommunity;
        console.log(data);
      },(error) => {
        console.log(`Error getting community: ${error}`);
      });
  }
}
