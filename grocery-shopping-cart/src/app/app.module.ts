import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFireAuthModule} from '@angular/fire/auth';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';


import {RouterModule}  from '@angular/router'
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './service/auth.service';
import {  AuthGuard } from './service/auth-guard.service';
import { OrderSuccessComponent } from './order-success/order-success.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    AdminOrdersComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:"login", component:LoginComponent},
      {path:"", component:HomeComponent},
      {path:"products", component:ProductsComponent},
      {path:"shop-cart", component:ShoppingCartComponent},

      {path:"check-out", component:CheckOutComponent, canActivate:[AuthGuard]},
      {path:"myorder", component:MyOrdersComponent, canActivate:[AuthGuard]},
      {path:"order/success", component:OrderSuccessComponent, canActivate:[AuthGuard]},
  

      {path:"admin/products", component:AdminProductsComponent, canActivate:[AuthGuard]},
      {path:"admin/orders", component:AdminOrdersComponent, canActivate:[AuthGuard]},


      {path:'**', component:HomeComponent}

    ]),
    NgbModule //for bootstrap
  ],
  providers: [
     AuthService,
     AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
