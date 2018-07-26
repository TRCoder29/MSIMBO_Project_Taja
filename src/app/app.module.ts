import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

// Admin Components
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';

// Business Components
import { HomeComponent } from './components/Business/home/home.component';
import { AboutComponent } from './components/Business/about/about.component';
import { ServicesComponent } from './components/Business/travel-services/services-main/services-main.component';
import { DoingBusinessComponent } from './components/Business/travel-services/doing-business/doing-business.component';
import { ItineraryComponent } from './components/Business/travel-services/itinerary-request/itinerary-request.component';
import { BlogMainComponent } from './components/Business/blog/blog-main/blog-main.component';
import { BlogNewComponent } from './components/Business/blog/blog-new/blog-new.component';
import { BlogEditComponent } from './components/Business/blog/blog-edit/blog-edit.component';
import { ContactComponent } from './components/Business/contact/contact.component';

// User Components
import { ProfileComponent } from './components/User/profile/profile.component';
import { LoginComponent } from './components/User/login/login.component';
import { RegisterComponent } from './components/User/register/register.component';

import { Routing } from './app.routing';
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    HomeComponent,
    AboutComponent,
    BlogMainComponent,
    ContactComponent,
    ItineraryComponent,
    ServicesComponent,
    DoingBusinessComponent,
    BlogMainComponent,
    BlogNewComponent,
    BlogEditComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
