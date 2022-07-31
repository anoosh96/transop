import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { faAngry } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  @Input() logged = false;
  faAngry = faAngry;

  constructor(private authService: AuthService) { }
  
  ngOnInit(): void {
  }

  logout() {
    this.authService.logout();
  }
}
