import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { IndexComponent } from "./pages/index/index.component";
import { OrderComponent } from "./pages/order/order.component";
import { MyComponent } from "./pages/my/my.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";

const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      { path: "", component: HomeComponent },
      { path: "my", component: MyComponent },
    ],
  },
  { path: "order", component: OrderComponent },
  { path: "productDetail", component: ProductDetailComponent },
  { path: "login", component: LoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
