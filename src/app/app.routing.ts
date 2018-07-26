import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule} from "@angular/router";
import { ModuleWithProviders} from "@angular/core";

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

  { path : 'services' , component: ServicesComponent},
  { path : 'doing-business' , component: DoingBusinessComponent},
  { path : 'itinerary-request' , component: ItineraryComponent},

  { path : 'blog-main', component : BlogMainComponent},
  { path : 'admin/:aid/blog/new' , component: BlogNewComponent},
  { path : 'admin/:aid/blog/:bgid/edit' , component: BlogEditComponent},

  // Admin (More Admin Components to Come)
  { path : 'admin', component: AdminDashboardComponent}
];

// Export the routes as module providers
export const Routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);