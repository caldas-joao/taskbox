import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerCreateComponent } from './customer-create/customer-create.component';
import { RouterModule, Routes } from  '@angular/router';

const  appRoutes:  Routes  = [
  { path:  'customer-list', component:  CustomerListComponent },
  { path:  'customer-create', component:  CustomerCreateComponent },
  {
  path:  'login',
  component:  LoginComponent
  },
  { path:  '',
  
  redirectTo:  '/login',
  
  pathMatch:  'full'
  
  },
  ];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    CustomerCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
