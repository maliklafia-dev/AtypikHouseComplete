import { NgModule } from '@angular/core';
import { AuthGuard } from './auth.guard';  // Assure-toi d'importer le guard
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/content/home/home.component";
import {CategoriesComponent} from "./components/content/categories/categories.component";
import {AdministrateurComponent} from "./components/content/administrateur/administrateur.component";
import {AddAppartComponent} from "./components/content/add-appart/add-appart.component";
import {CguComponent} from "./components/content/cgu/cgu.component";
import {CgvComponent} from "./components/content/cgv/cgv.component";
import {
  ReservationConfirmationComponent
} from "./components/content/reservation/reservation-confirmation/reservation-confirmation.component";
import {MentionLegalesComponent} from "./components/content/mention-legales/mention-legales.component";
import {PrivacyPolicyComponent} from "./components/content/privacy-policy/privacy-policy.component";
import {CookiesPolicyComponent} from "./components/content/cookies-policy/cookies-policy.component";
import {AboutComponent} from "./components/content/about/about.component";
import {LoginComponent} from "./components/content/login/login.component";
import {ViewOwnerAppartComponent} from "./components/content/view-owner-appart/view-owner-appart.component";
import {ContactComponent} from "./components/content/contact/contact.component";
import {RegisterComponent} from "./components/content/register/register.component";
import {DashboardAdminComponent} from "./components/content/dashboard/dashboard-admin/dashboard-admin.component";
import {AppartementsComponent} from "./components/content/appartements/appartements.component";
import {AppartByIdComponent} from "./components/content/appartements/appart-by-id/appart-by-id.component";
import {CommentsComponent} from "./components/content/comments/comments.component";
import {
  CommentDetailAppartComponent
} from "./components/content/comments/comment-detail-appart/comment-detail-appart.component";
import {StripeCheckoutComponent} from "./components/stripe-checkout/stripe-checkout.component";
import {SuccessComponent} from "./components/success/success.component";
import {CancelComponent} from "./components/cancel/cancel.component";
import {
  DashboardAdminStatusComponent
} from "./components/content/dashboard/dashboard-admin/dashboard-admin-status/dashboard-admin-status.component";
import {ReservationListComponent} from "./components/content/reservation/reservation-list/reservation-list.component";
import {
  ReservationDetailsComponent
} from "./components/content/reservation/reservation-details/reservation-details.component";
import {ReservationFormComponent} from "./components/content/reservation/reservation-form/reservation-form.component";
import { DashboardAdminRoleComponent } from './components/content/dashboard/dashboard-admin/dashboard-admin-role/dashboard-admin-role.component';
import { OurServicesComponent } from './components/content/our-services/our-services.component';
import { ErrorPageComponent } from './components/content/error-page/error-page.component';
import { UnauthorisedComponent } from './components/content/unauthorised/unauthorised.component';
import { CatAllCategoriesComponent } from './components/content/categories/cat-all-categories/cat-all-categories.component';
import { ReservationComponent } from './components/content/reservation/reservation.component';
import { ReservationConfirmComponent } from './components/content/reservation/reservation-confirmation/reservation-confirm/reservation-confirm.component';

let routes: Routes;
routes = [
  {path: '', component: HomeComponent},
  {path: 'cat', component: CategoriesComponent},
  {path: 'cat/all', component: CatAllCategoriesComponent},
  {path: 'admin', component: AdministrateurComponent,  canActivate: [AuthGuard], data: {roles : ['ROLE_ADMIN']}},
  {path: 'dashboard-admin', component: DashboardAdminComponent,  canActivate: [AuthGuard]},
  {path: 'dashboard-admin-role', component: DashboardAdminRoleComponent,  canActivate: [AuthGuard]},
  {path: 'add-appart', component: AddAppartComponent,  canActivate: [AuthGuard], data: { roles: ['ROLE_ADMIN', 'ROLE_OWNER'] }},
  {path: 'cgu', component: CguComponent},
  {path: 'cgv', component: CgvComponent},
  {path: 'success', component: ReservationConfirmationComponent,  canActivate: [AuthGuard]},
  {path: 'mentions', component: MentionLegalesComponent},
  {path: 'politique', component: PrivacyPolicyComponent},
  {path: 'cookies', component: CookiesPolicyComponent},
  {path: 'about', component: AboutComponent},
  {path: 'login', component: LoginComponent},
  {path: 'view-owner-appart', component: ViewOwnerAppartComponent,  canActivate: [AuthGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'list-appart', component: AppartementsComponent},
  {path: 'our-services', component: OurServicesComponent},
  { path: 'id-appart/:id', component: AppartByIdComponent },
  {path: 'comments/:id', component: CommentsComponent},
  {path: 'comments-details/:id', component: CommentDetailAppartComponent},
  { path: 'checkout', component: StripeCheckoutComponent, canActivate: [AuthGuard] },
  { path: 'success', component: SuccessComponent,  canActivate: [AuthGuard] },
  { path: 'cancel', component: CancelComponent,  canActivate: [AuthGuard] },
  { path: 'statuses', component: DashboardAdminStatusComponent,  canActivate: [AuthGuard] },
  { path: 'reservations', component: ReservationListComponent,  canActivate: [AuthGuard] },
  { path: 'reservation/:id', component: ReservationDetailsComponent,  canActivate: [AuthGuard] },
  { path: 'edit-reservation/:id', component: ReservationFormComponent,  canActivate: [AuthGuard] },
  { path: 'create-reservation', component: ReservationFormComponent,  canActivate: [AuthGuard] },
  { path: 'reservation', component: ReservationComponent,  canActivate: [AuthGuard] },
  { path: 'reservation-confirmation', component: ReservationConfirmationComponent,  canActivate: [AuthGuard] },
  { path: 'error-page', component: ErrorPageComponent },
  { path: 'unauthorized', component: UnauthorisedComponent },
 


 // {path: '', redirectTo: '/HomeComponent', pathMatch: 'full'}
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
