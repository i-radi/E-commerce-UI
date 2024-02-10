import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { PopupComponent } from './components/common/popup/popup.component';
import { RegisterComponent } from './components/users/register/register.component';
import { LoginComponent } from './components/users/login/login.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { ProductsComponent } from './components/main/products/products.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { AboutComponent } from './components/main/about/about.component';
import { BrandsComponent } from './components/main/brands/brands.component';
import { CartComponent } from './components/main/cart/cart.component';
import { HomeComponent } from './components/main/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { ProductDetailsComponent } from './components/main/product-details/product-details.component'
import {BrowserAnimationsModule } from '@angular/platform-browser/animations' 
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MainSliderComponent } from './components/main/main-slider/main-slider.component';
import { CategoriesSliderComponent } from './components/main/categories-slider/categories-slider.component';
import { SeeMorePipe } from './pipes/see-more.pipe';
import { ProductSearchPipe } from './pipes/product-search.pipe';
import { JwtInterceptor } from './interceptors/jwt.interceptor';
import { CheckoutComponent } from './components/main/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PopupComponent,
    RegisterComponent,
    LoginComponent,
    NotfoundComponent,
    ProductsComponent,
    CategoriesComponent,
    AboutComponent,
    BrandsComponent,
    CartComponent,
    HomeComponent,
    ProductDetailsComponent,
    MainSliderComponent,
    CategoriesSliderComponent,
    SeeMorePipe,
    ProductSearchPipe,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    FormsModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:JwtInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
