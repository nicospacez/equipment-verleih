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
import { ProductsDetailViewComponent } from './products/products-detail-view/products-detail-view.component';
import { CreateProduktComponent } from './admin/create-produkt/create-produkt.component';
import { ProduktListComponent } from './admin/produkt-list/produkt-list.component';

import {KategorieService} from './services/kategorie.service';
import { ProductService } from "./services/product.service";

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomepageComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'warenkorb', component: WarenkorbComponent },
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
    ]
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
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [ProductService, KategorieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
