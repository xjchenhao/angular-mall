import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyComponent } from "./components/my/my.component";

const routes: Routes = [{ path: "my", component: MyComponent }];

@NgModule({
  declarations: [MyComponent],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
