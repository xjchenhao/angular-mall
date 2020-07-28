import { Component, OnInit } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";
import request from "src/app/utils/request.js";

@Component({
  selector: "app-my",
  templateUrl: "./my.component.html",
  styleUrls: ["./my.component.less"],
})
export class MyComponent implements OnInit {
  public avatarUrl: string = "";
  public nickName: string = "";

  constructor(private _toast: ToastService) {}

  async ngOnInit() {
    const result = await request({
      url: `/api/user/info`,
      type: "get",
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    this.avatarUrl = result.data.avatarUrl;
    this.nickName = result.data.nickName;
  }

  async onLogout() {
    const result = await request({
      url: "/api/logout",
      type: "post",
      data: {},
    });

    location.href = "/";
  }
}
