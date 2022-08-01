import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Community } from './types';
import { GET_COMMUNITIES_BY_USER_ID_QUERY, CREATE_COMMUNITY_QUERY } from './queries';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private _communities = new BehaviorSubject([]);

  constructor(private apollo: Apollo) {}

  get myCommunities(): Observable<Community[]>{
    return this._communities.asObservable();
  }

  initGetMyCommunities(user_id: string){
    this.apollo.watchQuery<any>({
      query: GET_COMMUNITIES_BY_USER_ID_QUERY,
      variables: {
        user_id: user_id
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this._communities = data.myCommunities;
      },(error) => {
        console.log(`Error getting community: ${error}`);
      });
  }

  createCommunity(name: string, description: string) {
    this.apollo.mutate({
      mutation: CREATE_COMMUNITY_QUERY,
      variables: {
        name: name,
        description: description
      }
    }).subscribe((result: any) => {
      if (result.data.createCommunity){
        console.log('community created: ', result.data);
      } else {
        alert("Failed to register");
      }
    },(error) => {
      alert(`there was an error logging in. ${error}`);
    });
  }
}
