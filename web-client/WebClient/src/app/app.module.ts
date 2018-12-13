import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { AdminComponent } from './admin/admin.component';

const appRoutes:Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomepageComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'warenkorb', component: WarenkorbComponent},
  {path: 'admin', component: AdminComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ProductsComponent,
    AdminComponent,
    WarenkorbComponent,
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
