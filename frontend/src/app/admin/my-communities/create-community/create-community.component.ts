import { Component, OnInit } from '@angular/core';
import { CommunityService } from '../../../services/community.service';

@Component({
  selector: 'app-create-community',
  templateUrl: './create-community.component.html',
  styleUrls: ['./create-community.component.scss']
})
export class CreateCommunityComponent implements OnInit {
  name: "";
  description: "";

  constructor(private commService: CommunityService) { }

  ngOnInit() {}

  submit() {
    this.commService.createCommunity(this.name, this.description);
  }
}
