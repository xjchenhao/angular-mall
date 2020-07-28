import { Component, OnInit } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";
import request from "src/app/utils/request.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.less"],
})
export class HomeComponent implements OnInit {
  public list: Array<Object> = [];

  constructor(private _toast: ToastService) {}

  async ngOnInit() {
    const result = await request({
      url: `/api/product/list`,
      type: "get",
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    this.list = result.data.list;
  }
}
