import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { ProductsComponent } from './products/products.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NavComponent } from './nav/nav.component';

const appRoutes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'email', component: EmailComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'products', component: ProductsComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    DashboardComponent,
    EmailComponent,
    ProductsComponent,
    CalendarComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
