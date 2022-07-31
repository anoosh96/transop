import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_DESCRIPTION } from './queries';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.apollo.watchQuery<any>({
      query: GET_DESCRIPTION
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        console.log("got description", data);
      },(error) => {
        console.log(`there was an error getting current user from server. ${error}`);
      });
  }

}
