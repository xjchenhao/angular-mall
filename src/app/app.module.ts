import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgZorroAntdMobileModule } from "ng-zorro-antd-mobile";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MyComponent } from './pages/my/my.component';

@NgModule({
  declarations: [AppComponent, MyComponent],
  imports: [BrowserModule, AppRoutingModule, NgZorroAntdMobileModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
