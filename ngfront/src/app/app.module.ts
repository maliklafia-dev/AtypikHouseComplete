import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

registerLocaleData(localeFr, 'fr');

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarMainComponent } from './components/navbar-main/navbar-main.component';
import { FooterMainComponent } from './components/footer-main/footer-main.component';
import { HomeComponent } from './components/content/home/home.component';
import { HomeHeroComponent } from './components/content/home/home-hero/home-hero.component';
import { HomeTabsComponent } from './components/content/home/home-tabs/home-tabs.component';
import { HomeCategoriesComponent } from './components/content/home/home-categories/home-categories.component';
import { HomeTestimonialsComponent } from './components/content/home/home-testimonials/home-testimonials.component';
import { HomeNewsletterComponent } from './components/content/home/home-newsletter/home-newsletter.component';
import { HomeCookieConsentComponent } from './components/content/home/home-cookie-consent/home-cookie-consent.component';
import { CategoriesComponent } from './components/content/categories/categories.component';
import { CatHeaderComponent } from './components/content/categories/cat-header/cat-header.component';
import { CatListComponent } from './components/content/categories/cat-list/cat-list.component';
import { CatItemComponent } from './components/content/categories/cat-item/cat-item.component';
import { CatMoreCategoriesComponent } from './components/content/categories/cat-more-categories/cat-more-categories.component';
import { CatAllCategoriesComponent } from './components/content/categories/cat-all-categories/cat-all-categories.component';
import { AdministrateurComponent } from './components/content/administrateur/administrateur.component';
import { AdminProfileDropdownComponent } from './components/content/administrateur/admin-profile-dropdown/admin-profile-dropdown.component';
import { AdminDashboardHeaderComponent } from './components/content/administrateur/admin-dashboard-header/admin-dashboard-header.component';
import { AdminFeatureSectionComponent } from './components/content/administrateur/admin-feature-section/admin-feature-section.component';
import { AddAppartComponent } from './components/content/add-appart/add-appart.component';
import { AddHabitatFormComponent } from './components/content/add-appart/add-appart-form/add-appart-form.component';
import { AddAppartHeaderComponent } from './components/content/add-appart/add-appart-header/add-appart-header.component';
import { AddAppartProfileDropdownComponent } from './components/content/add-appart/add-appart-profile-dropdown/add-appart-profile-dropdown.component';
import { AddAppartNavbarConnectedComponent } from './components/content/add-appart/add-appart-navbar-connected/add-appart-navbar-connected.component';
import { NavbarConnectedComponent } from './components/navbar-connected/navbar-connected.component';
import { CguComponent } from './components/content/cgu/cgu.component';
import { CguContentComponent } from './components/content/cgu/cgu-content/cgu-content.component';
import { CgvComponent } from './components/content/cgv/cgv.component';
import { CgvContentComponent } from './components/content/cgv/cgv-content/cgv-content.component';
import { ReservationConfirmationComponent } from './components/content/reservation/reservation-confirmation/reservation-confirmation.component';
import { ReservationConfirmComponent } from './components/content/reservation/reservation-confirmation/reservation-confirm/reservation-confirm.component';
import { MentionLegalesComponent } from './components/content/mention-legales/mention-legales.component';
import {ContentComponent} from "./components/content/mention-legales/content/content.component";
import { PrivacyPolicyComponent } from './components/content/privacy-policy/privacy-policy.component';
import { PrivacyPolicyContentComponent } from './components/content/privacy-policy/privacy-policy-content/privacy-policy-content.component';
import { CookiesPolicyComponent } from './components/content/cookies-policy/cookies-policy.component';
import { CookiesPolicyContentComponent } from './components/content/cookies-policy/cookies-policy-content/cookies-policy-content.component';
import { AboutComponent } from './components/content/about/about.component';
import { AboutHeaderComponent } from './components/content/about/about-header/about-header.component';
import { AboutHistoryComponent } from './components/content/about/about-history/about-history.component';
import { AboutTeamComponent } from './components/content/about/about-team/about-team.component';
import { LoginComponent } from './components/content/login/login.component';
import { LoginTitleComponent } from './components/content/login/login-title/login-title.component';
import { LoginFormComponent } from './components/content/login/login-form/login-form.component';
import { ViewOwnerAppartComponent } from './components/content/view-owner-appart/view-owner-appart.component';
import { ViewOwnerAppartListComponent } from './components/content/view-owner-appart/view-owner-appart-list/view-owner-appart-list.component';
import { ViewOwnerAppartCardComponent } from './components/content/view-owner-appart/view-owner-appart-card/view-owner-appart-card.component';
import { ViewOwnerAppartNavbarComponent } from './components/content/view-owner-appart/view-owner-appart-navbar/view-owner-appart-navbar.component';
import { ViewOwnerAppartProfileMenuComponent } from './components/content/view-owner-appart/view-owner-appart-profile-menu/view-owner-appart-profile-menu.component';
import { ContactComponent } from './components/content/contact/contact.component';
import { ContactFormComponent } from './components/content/contact/contact-form/contact-form.component';
import { ContactInfoComponent } from './components/content/contact/contact-info/contact-info.component';
import { ContactGoogleMapComponent } from './components/content/contact/contact-google-map/contact-google-map.component';
import { ContactHeaderComponent } from './components/content/contact/contact-header/contact-header.component';
import { RegisterComponent } from './components/content/register/register.component';
import { RegisterFormComponent } from './components/content/register/register-form/register-form.component';
import { RegisterTitleComponent } from './components/content/register/register-title/register-title.component';
import { DashboardAdminComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin.component';
import { DashboardAdminUserComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-user/dashboard-admin-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AppartementsComponent } from './components/content/appartements/appartements.component';
import { AppartListComponent } from './components/content/appartements/appart-list/appart-list.component';
import { CtaSectionComponent } from './components/content/appartements/cta-section/cta-section.component';
import { AppartHeaderComponent } from './components/content/appartements/appart-header/appart-header.component';
import { AppartByIdComponent } from './components/content/appartements/appart-by-id/appart-by-id.component';
import { CommentsComponent } from './components/content/comments/comments.component';
import { CommentsFormComponent } from './components/content/comments/comments-form/comments-form.component';
import { CommentsListComponent } from './components/content/comments/comments-list/comments-list.component';
import { CommentComponent } from './components/content/comments/comment/comment.component';
import { CommentDetailAppartComponent } from './components/content/comments/comment-detail-appart/comment-detail-appart.component';
import { StripeCheckoutComponent } from './components/stripe-checkout/stripe-checkout.component';
import { SuccessComponent } from './components/success/success.component';
import { CancelComponent } from './components/cancel/cancel.component';
import { DashboardAdminStatusComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-status/dashboard-admin-status.component';
import { ReservationComponent } from './components/content/reservation/reservation.component';
import { ReservationListComponent } from './components/content/reservation/reservation-list/reservation-list.component';
import { ReservationFormComponent } from './components/content/reservation/reservation-form/reservation-form.component';
import { ReservationDetailsComponent } from './components/content/reservation/reservation-details/reservation-details.component';
import { DashboardAdminRoleComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-role/dashboard-admin-role.component';
import { DashboardAdminRoleFormComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-role-form/dashboard-admin-role-form.component';
import { DashboardAdminRoleDetailComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-role-detail/dashboard-admin-role-detail.component';
import { DashboardAdminRoleListComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-role-list/dashboard-admin-role-list.component';
import { OurServicesComponent } from './components/content/our-services/our-services.component';
import { ErrorPageComponent } from './components/content/error-page/error-page.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { UnauthorisedComponent } from './components/content/unauthorised/unauthorised.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarMainComponent,
    FooterMainComponent,
    HomeComponent,
    HomeHeroComponent,
    HomeTabsComponent,
    HomeCategoriesComponent,
    HomeTestimonialsComponent,
    HomeNewsletterComponent,
    HomeCookieConsentComponent,
    CategoriesComponent,
    CatHeaderComponent,
    CatListComponent,
    CatItemComponent,
    CatMoreCategoriesComponent,
    AdministrateurComponent,
    AdminProfileDropdownComponent,
    AdminDashboardHeaderComponent,
    AdminFeatureSectionComponent,
    AddAppartComponent,
    AddAppartComponent,
    AddHabitatFormComponent,
    AddAppartHeaderComponent,
    AddAppartProfileDropdownComponent,
    AddAppartNavbarConnectedComponent,
    NavbarConnectedComponent,
    CguComponent,
    CguContentComponent,
    CgvComponent,
    CgvContentComponent,
    ReservationConfirmationComponent,
    ReservationConfirmComponent,
    MentionLegalesComponent,
    ContentComponent,
    PrivacyPolicyComponent,
    PrivacyPolicyContentComponent,
    CookiesPolicyComponent,
    CookiesPolicyContentComponent,
    AboutComponent,
    AboutHeaderComponent,
    AboutHistoryComponent,
    AboutTeamComponent,
    LoginComponent,
    LoginTitleComponent,
    LoginFormComponent,
    ViewOwnerAppartComponent,
    ViewOwnerAppartListComponent,
    ViewOwnerAppartCardComponent,
    ViewOwnerAppartNavbarComponent,
    ViewOwnerAppartProfileMenuComponent,
    ContactComponent,
    ContactFormComponent,
    ContactInfoComponent,
    ContactGoogleMapComponent,
    ContactHeaderComponent,
    RegisterComponent,
    RegisterFormComponent,
    RegisterTitleComponent,
    DashboardAdminComponent,
    DashboardAdminUserComponent,

    ProfileComponent,
      AppartementsComponent,
      AppartListComponent,
      CtaSectionComponent,
      AppartHeaderComponent,
      AppartByIdComponent,
      CommentsComponent,
      CommentsFormComponent,
      CommentsListComponent,
      CommentComponent,
      CommentDetailAppartComponent,
      DashboardAdminRoleComponent,
      DashboardAdminRoleFormComponent,
      DashboardAdminRoleDetailComponent,
      DashboardAdminRoleListComponent,
      OurServicesComponent,
      StripeCheckoutComponent,
      SuccessComponent,
      CancelComponent,
      DashboardAdminStatusComponent,
      ReservationComponent,
      ReservationListComponent,
      ReservationFormComponent,
      ReservationDetailsComponent,
      ErrorPageComponent,
      UnauthorisedComponent,
      CatAllCategoriesComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
