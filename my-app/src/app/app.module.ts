import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/Business/home/home.component';
import { AboutComponent } from './components/Business/about/about.component';
import { BlogComponent } from './components/Business/blog/blog.component';
import { ContactComponent } from './components/Business/contact/contact.component';
import { FaqComponent } from './components/Business/faq/faq.component';
import { AdminDashboardComponent } from './components/Admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './components/User/login/login.component';
import { RegisterComponent } from './components/User/register/register.component';
import { ProfileComponent } from './components/User/profile/profile.component';
import { ItineraryComponent } from './components/business/itinerary/itinerary.component';
import { ServicesComponent } from './components/business/services/services.component';
import { BlogNewComponent } from './components/Business/blog/blog-new/blog-new.component';
import { BlogEditComponent } from './components/Business/blog/blog-edit/blog-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ContactComponent,
    FaqComponent,
    AdminDashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    ItineraryComponent,
    ServicesComponent,
    BlogNewComponent,
    BlogEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
