import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { AboutComponent } from './components/main/about/about.component';
import { LoginComponent } from './components/users/login/login.component';
import { RegisterComponent } from './components/users/register/register.component';
import { BrandsComponent } from './components/main/brands/brands.component';
import { CartComponent } from './components/main/cart/cart.component';
import { CategoriesComponent } from './components/main/categories/categories.component';
import { ProductsComponent } from './components/main/products/products.component';
import { NotfoundComponent } from './components/common/notfound/notfound.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductDetailsComponent } from './components/main/product-details/product-details.component';
import { CheckoutComponent } from './components/main/checkout/checkout.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch: 'full'},
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'about', component:AboutComponent},
  {path:'products', component:ProductsComponent},
  {path:'productdetails/:id', component:ProductDetailsComponent},
  {path:'categories', component:CategoriesComponent},
  {path:'brands', component:BrandsComponent},
  {path:'cart', canActivate:[AuthGuard], component:CartComponent},
  {path:'checkout', canActivate:[AuthGuard], component:CheckoutComponent},
  { path: 'settings', loadChildren: () => import('./components/settings/settings.module').then(m => m.SettingsModule) },
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
