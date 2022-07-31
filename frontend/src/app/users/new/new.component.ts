import { Component, OnInit } from '@angular/core';
import { REGISTER_USER_QUERY } from '../queries';
import { Apollo } from 'apollo-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class UsersNewComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: string= '';

  constructor(private apollo: Apollo, private router: Router) { }

  ngOnInit(): void {
  }

  register(): void {
    this.apollo.mutate({
      mutation: REGISTER_USER_QUERY,
      variables: {
        name: this.name,
        email: this.email,
        password: this.password
      }
    }).subscribe((result: any) => {
      if (result.data.createUser){
        alert("Succeess!");
        this.router.navigate(["/users/login"]);

      } else {
        alert("Failed to register");
      }
    },(error) => {
      alert(`there was an error logging in. ${error}`);
    });
  }
}
