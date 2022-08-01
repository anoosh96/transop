import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Community } from './types';
import { GET_COMMUNITY_BY_USER_ID_QUERY } from './queries';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private _community = new BehaviorSubject({id: "", name: "", description: ""});

  constructor(private apollo: Apollo) {}

  get myCommunity(): Observable<Community>{
    return this._community.asObservable();
  }

  initGetMyCommunity(user_id: string){
    this.apollo.watchQuery<any>({
      query: GET_COMMUNITY_BY_USER_ID_QUERY,
      variables: {
        user_id: user_id
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this._community = data.myCommunity;
      },(error) => {
        console.log(`Error getting community: ${error}`);
      });
  }
}
