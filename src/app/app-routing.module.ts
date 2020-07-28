import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MyComponent } from "./pages/my/my.component";

const routes: Routes = [
  { path: "", component: MyComponent },
  { path: "my", component: MyComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
