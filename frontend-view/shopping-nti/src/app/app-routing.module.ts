import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ErrorComponent } from './components/error/error.component';
import { AddProductComponent } from './components/admin/add-product/add-product.component';

import { AdminViewComponent } from './components/admin/admin-view/admin.component';
import { UserViewComponent } from './components/user/user-view/user.component';

import { AddPromocodeComponent } from './components/admin/add-promocode/add-promocode.component';
import { GetAllproductComponent } from './components/user/get-allproduct/get-allproduct.component';
import { GetSingleproductComponent } from './components/user/get-singleproduct/get-singleproduct.component';
import { CheckoutComponent } from './components/user/checkout/checkout.component';
import { AuthguardGuard } from "./authguard.guard";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  { path: 'signup', component: SignUpComponent },
  {
    path: 'admin',
    component: AdminViewComponent,
    //  canActivate:[AuthguardGuard],
    children: [
      {
        path: 'addproduct',
        component: AddProductComponent,
      },
      {
        path: 'onecoupon',
        component: AddPromocodeComponent,
      },
    ],
  },

  {
    path: 'user',
    component: UserViewComponent,
    //  canActivate:[AuthguardGuard],
    children: [
      {
        path: 'products',
        component: GetAllproductComponent,
      },
      {
        path: 'products/:id',
        component: GetSingleproductComponent,
      },
      {
        path: 'checkout/:id',
        component: CheckoutComponent,
      },
    ],
  },

  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
