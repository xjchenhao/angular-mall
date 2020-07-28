import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyComponent } from "./pages/my/my.component";
import { LoginComponent } from "./pages/login/login.component";
import { ProductDetailComponent } from "./pages/product-detail/product-detail.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "productDetail", component: ProductDetailComponent },
  { path: "login", component: LoginComponent },
  { path: "my", component: MyComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
