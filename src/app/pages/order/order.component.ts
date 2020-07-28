import { Component, OnInit } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";
import request from "src/app/utils/request.js";

@Component({
  selector: "app-order",
  templateUrl: "./order.component.html",
  styleUrls: ["./order.component.less"],
})
export class OrderComponent implements OnInit {
  public list: Array<Object> = [];

  constructor(private _toast: ToastService) {}

  async ngOnInit() {
    const result = await request({
      url: `/api/order/list`,
      type: "get",
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    this.list = result.data.list.map((item) => item.product);
  }
}
