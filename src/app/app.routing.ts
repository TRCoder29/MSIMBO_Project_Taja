import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders} from "@angular/core";

import { AppComponent } from './app.component';

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
import { AdminLoginComponent } from './components/Admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { AdminClientsComponent } from './components/Admin/admin-clients/admin-clients.component';
import { AdminItineraryComponent } from './components/Admin/admin-itinerary/admin-itinerary.component';


const APP_ROUTES : Routes = [
  // User (More Profile Components to Come)
  { path : '', component: HomeComponent},
  { path : 'login' , component: LoginComponent},
  { path : 'register' , component: RegisterComponent},
  { path : 'user' , component: ProfileComponent},

  // Business
  { path : 'home' , component: HomeComponent},
  { path : 'about', component : AboutComponent},
  { path : 'contact' , component: ContactComponent},

  { path : 'services-main' , component: ServicesMainComponent},
  { path : 'doing-business' , component: DoingBusinessComponent},
  { path : 'service-request' , component: ServiceRequestComponent},
  { path : 'travel-request' , component: TravelRequestComponent},

  { path : 'blog-main', component : BlogMainComponent},
  { path : 'admin/:aid/blog/new' , component: BlogNewComponent},
  { path : 'admin/:aid/blog/:bgid/edit' , component: BlogEditComponent},

  // Admin
  { path : 'admin-login' , component: AdminLoginComponent},
  { path : 'admin-main' , component: AdminDashboardComponent},
  { path : 'admin/:aid/admin-clients' , component: AdminClientsComponent},
  { path : 'admin/:aid/admin-itinerary' , component: AdminItineraryComponent},
];

// admin/:aid/admin-dashboard

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);