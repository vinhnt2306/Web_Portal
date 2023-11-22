import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { HeaderComponent } from './header/header.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormPaymentComponent } from './form-payment/form-payment.component';
const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'home-page', component: HomepageComponent },
  { path:'register' , component: RegisterComponent},
  { path:'product-detail', component: ProductDetailComponent},
  { path:'category-page', component:CategoryPageComponent},
  { path:'header' , component:HeaderComponent},
  { path:'shopping-cart' , component:ShoppingCartComponent},
  { path:'product' , component:ProductComponent},
  { path:'payment-order' , component:FormPaymentComponent},
  { path: '**', redirectTo: 'home-page'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
