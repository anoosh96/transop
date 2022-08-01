import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Community } from './types';
import { GET_COMMUNITIES_BY_USER_ID_QUERY, CREATE_COMMUNITY_QUERY } from './queries';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  private _communities = new Subject<any>();
  private _communityList: Community[] = [];

  constructor(private apollo: Apollo) {}

  get myCommunities(): Observable<Community[]>{
    return this._communities.asObservable();
  }

  fetchMyCommunities(user_id: string){
    this.apollo.watchQuery<any>({
      query: GET_COMMUNITIES_BY_USER_ID_QUERY,
      variables: {
        user_id: user_id
      }
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this._communityList = [];
        // TODO: we got an error "data.myCommunities is not iteratable" if we create a community and navigate to admin without a refresh
        for (const comm of data.myCommunities){
          this._communityList.push({id: comm.id, name: comm.name, description: comm.description});
        }
        this._communities.next(this._communityList);
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
        const comm = result.data.createCommunity;
        this._communityList.push({id: comm.id, name: comm.name, description: comm.description});
        this._communities.next(this._communityList);
      } else {
        alert("Failed to register");
      }
    },(error) => {
      alert(`there was an error logging in. ${error}`);
    });
  }
}
