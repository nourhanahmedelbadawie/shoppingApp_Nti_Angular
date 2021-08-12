import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/shared/nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';



import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { ToastrModule } from 'ngx-toastr';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';
import { AddPromocodeComponent } from './components/admin/add-promocode/add-promocode.component';
import { GetAllproductComponent } from './components/user/get-allproduct/get-allproduct.component';
import { GetSingleproductComponent } from './components/user/get-singleproduct/get-singleproduct.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { ErrorComponent } from './components/error/error.component';
import { AdminViewComponent } from './components/admin/admin-view/admin.component';
import { UserViewComponent } from './components/user/user-view/user.component';
import { UserInterceptor } from 'src/providers/user.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    SignUpComponent,
    AddProductComponent,
    AddPromocodeComponent,
    GetAllproductComponent,
    GetSingleproductComponent,
    CheckoutComponent,
    ErrorComponent,
    AdminViewComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added

    ReactiveFormsModule ,
    HttpClientModule,

    ToastrModule.forRoot(),

    MatDatepickerModule ,
    MatRadioModule ,
    MatFormFieldModule ,
    MatSelectModule ,
    MatInputModule,
    MatFormFieldModule ,
    MatCardModule

  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:UserInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
