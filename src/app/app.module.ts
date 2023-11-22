import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule , ReactiveFormsModule  } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ProductComponent } from './product/product.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoryComponent } from './category/category.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { CarouselModule } from 'primeng/carousel';
import { CartShoppingComponent } from './cart-shopping/cart-shopping.component';
import { CategoryPageComponent } from './category-page/category-page.component';
import { FormPaymentComponent } from './form-payment/form-payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  {  path: 'home-page', component: HomepageComponent },
  {  path: 'login' , component: LoginComponent},
  {  path: 'register' , component: RegisterComponent},
  {  path: 'product-detail' , component: ProductDetailComponent},
  { path:'header' , component:HeaderComponent},
  { path:'shopping-cart' , component:ShoppingCartComponent},
  { path:'product' , component:ProductComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
    ProductDetailComponent,
    ShoppingCartComponent,
    CategoryComponent,
    HomepageComponent,
    SlideshowComponent,
    CartShoppingComponent,
    CategoryPageComponent,
    FormPaymentComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CarouselModule,
    ReactiveFormsModule,
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
