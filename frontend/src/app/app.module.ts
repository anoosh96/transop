import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { UsersLoginComponent } from './users/login/login.component';
import { UsersNewComponent } from './users/new/new.component';
import { CommunitiesIndexComponent } from './communities/index/index.component';
import { AdminComponent } from './admin/admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MyCommunitiesComponent } from './admin/my-communities/my-communities.component';
import { MaterialModule } from './material/material.module';
import { CreateCommunityComponent } from './admin/my-communities/create-community/create-community.component';
import { LineItemComponent } from './admin/my-communities/line-item/line-item.component';
import { ProfileComponent } from './users/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    UsersLoginComponent,
    UsersNewComponent,
    CommunitiesIndexComponent,
    AdminComponent,
    MyCommunitiesComponent,
    CreateCommunityComponent,
    LineItemComponent,
    ProfileComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GraphQLModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
