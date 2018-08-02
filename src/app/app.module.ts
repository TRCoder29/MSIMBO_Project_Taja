import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { Routing } from './app.routing';

// Business Components
import { HomeComponent } from './components/Business/home/home.component';
import { AboutComponent } from './components/Business/about/about.component';
import { ContactComponent } from './components/Business/contact/contact.component';
import { ServicesMainComponent } from './components/Business/travel-services/services-main/services-main.component';
import { DoingBusinessComponent } from './components/Business/travel-services/doing-business/doing-business.component';
import { ServiceRequestComponent } from './components/Business/travel-services/service-request/service-request.component';
import { TravelRequestComponent } from './components/Business/travel-services/travel-request/travel-request.component';

import { BlogMainComponent } from './components/Business/blog/blog-main/blog-main.component';
import { BlogNewComponent } from './components/Business/blog/blog-new/blog-new.component';
import { BlogEditComponent } from './components/Business/blog/blog-edit/blog-edit.component';

// User Components
import { LoginComponent } from './components/User/login/login.component';
import { RegisterComponent } from './components/User/register/register.component';
import { ProfileComponent } from './components/User/profile/profile.component';

// Admin Components
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminClientsComponent } from './components/Admin/admin-clients/admin-clients.component';
import { AdminClientsNewComponent } from './components/Admin/admin-clients/admin-clients-new/admin-clients-new.component';
import { AdminClientsEditComponent } from './components/Admin/admin-clients/admin-clients-edit/admin-clients-edit.component';
import { AdminItineraryComponent } from './components/Admin/admin-itinerary/admin-itinerary.component';

// Client Services
// import { AdminService } from './client_side_services/admin.service.client';
import { UserService } from './client_side_services/user.service.client';
import { TravelService } from './client_side_services/travel.service.client';
import { BlogService } from './client_side_services/blog.service.client';

// Add Quill, Shared, AuthGuard
import { QuillEditorModule } from 'ngx-quill-editor';
import { SharedService } from './client_side_services/shared.service.client';
import { AuthGuard } from './client_side_services/auth-guard.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AccountInfoComponent } from './components/User/profile/account-info/account-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ServicesMainComponent,
    DoingBusinessComponent,
    ServiceRequestComponent,
    TravelRequestComponent,
    BlogMainComponent,
    BlogNewComponent,
    BlogEditComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    AdminDashboardComponent,
    AdminClientsComponent,
    AdminItineraryComponent,
    AdminClientsNewComponent,
    AdminClientsEditComponent,
    NavbarComponent,
    AccountInfoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    QuillEditorModule
  ],
  providers: [ UserService, TravelService, BlogService, SharedService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

