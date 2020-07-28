import { Component, OnInit } from "@angular/core";
import request from "./../../utils/request.js";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
  public userName: String = "";
  public password: String = "";

  constructor() {}

  ngOnInit() {}

  onUserNameChange(value) {
    this.userName = value;
  }

  onPasswordChange(value) {
    this.password = value;
  }
  onShubmit() {
    console.log(this.userName);
    console.log(this.password);
    request({
      url: "/api/login",
      type: "post",
      data: {
        userName: this.userName,
        password: this.password,
      },
    });
  }
}
