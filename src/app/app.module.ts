import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyComponent } from "./pages/my/my.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";
import { from } from "rxjs";
import { ProductListComponent } from './components/product-list/product-list.component';
import { HomeComponent } from './pages/home/home.component';
import { OrderComponent } from './pages/order/order.component';
import { IndexComponent } from './pages/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponent,
    LoginComponent,
    ProductDetailComponent,
    ProductListComponent,
    HomeComponent,
    OrderComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdMobileModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
