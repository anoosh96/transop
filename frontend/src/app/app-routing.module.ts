import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersLoginComponent } from './users/login/login.component';
import { UsersNewComponent } from './users/new/new.component';
import { CommunitiesIndexComponent } from './communities/index/index.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact_us', component: ContactComponent },
  { path: 'users/login', component: UsersLoginComponent },
  { path: 'users/new', component: UsersNewComponent },
  { path: 'communities', component: CommunitiesIndexComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
