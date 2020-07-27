import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyComponent } from "./component/my/my.component";
import { NavbarComponent } from "./navbar/navbar.component";

@NgModule({
  declarations: [AppComponent, MyComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdMobileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
