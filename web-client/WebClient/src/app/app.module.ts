import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';

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
import { TokenInterceptor } from './services/token.interceptor';
import { AuthGuard} from './services/auth.guard.service';
import { LoginService } from './services/login.service';
import { IsAdmin} from './services/auth.guard.service';
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
    ProduktListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['http://192.168.99.100:8080', 'localhost']
      }
    }),
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
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
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
