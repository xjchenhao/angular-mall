import { Component, OnInit } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";
import request from "./../../utils/request.js";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  public userName: String = "";
  public password: String = "";

  constructor(private _toast: ToastService) {}

  ngOnInit() {}

  onUserNameChange(value) {
    this.userName = value;
  }

  onPasswordChange(value) {
    this.password = value;
  }
  async onShubmit() {
    console.log(this.userName);
    console.log(this.password);
    const result = await request({
      url: "/api/login",
      type: "post",
      data: {
        userName: this.userName,
        password: this.password,
      },
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    location.href = "/";
  }
}
