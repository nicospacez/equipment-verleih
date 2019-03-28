import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { ImageUploadModule } from "angular2-image-upload";

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { NavComponent } from './nav/nav.component';
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import { AdminComponent } from './admin/admin.component';
import { ProductsDetailViewComponent } from './products/products-detail-view/products-detail-view.component';
import { CreateProduktComponent } from './admin/create-produkt/create-produkt.component';
import { ProduktListComponent } from './admin/produkt-list/produkt-list.component';

import { KategorieService } from './services/kategorie.service';
import { ProductService } from "./services/product.service";
import { VerleihService} from './services/verleih.service';
import {UserService} from './services/user.service';
import { TokenInterceptor } from './services/token.interceptor';
import { AuthGuard} from './services/auth.guard.service';
import { LoginService } from './services/login.service';
import { IsAdmin} from './services/auth.guard.service';

import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatDialogModule} from '@angular/material/dialog';
import{MatButtonModule} from '@angular/material/button';

import{MyDialog, MyDeleteDialog} from './products/products-detail-view/products-detail-view.component';
import{MyDialog2, MyProduktDialog} from './admin/create-produkt/create-produkt.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent, canActivate: [AuthGuard] },
  { path: 'products', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'warenkorb', component: WarenkorbComponent, canActivate: [AuthGuard] },
  {
    path: 'admin', component: AdminComponent, children: [
      {
        path: 'create',
        component: CreateProduktComponent
      },
      {
        path: 'list',
        component: ProduktListComponent
      },
      { path: '', redirectTo: '/admin/list', pathMatch: 'full' }
    ], canActivate: [AuthGuard,IsAdmin]
  },
  { path: 'productsDetailView/:id', component: ProductsDetailViewComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    ProductsComponent,
    AdminComponent,
    WarenkorbComponent,
    NavComponent,
    ProductsDetailViewComponent,
    CreateProduktComponent,
    ProduktListComponent,
    MyDialog,
    MyDialog2,
    MyDeleteDialog,
    MyProduktDialog
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://192.168.99.100:8080', 'localhost']
      }
    }),
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatCardModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [
    ProductService,
    KategorieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
    AuthGuard,
    IsAdmin,
    LoginService,
    VerleihService,
    UserService,
    MatDatepickerModule,
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'}
  ],
  bootstrap: [AppComponent],
  entryComponents: [MyDialog,MyDialog2,MyDeleteDialog, MyProduktDialog]
})
export class AppModule { }
