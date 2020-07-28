import { Component, OnInit } from "@angular/core";
import { ToastService } from "ng-zorro-antd-mobile";
import request from "src/app/utils/request.js";
const URL = require("url");

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.less"],
})
export class ProductDetailComponent implements OnInit {
  public data: object = {};

  public id: String = "";
  public imgHeight: String = "184px";
  constructor(private _toast: ToastService) {}
  async ngOnInit() {
    const urlObj = URL.parse(window.location.href, true);
    const { id } = urlObj.query;

    this.id = id;

    const result = await request({
      url: `/api/product/detail?id=${id}`,
      type: "get",
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    this.data = result.data;
  }

  onBack() {
    history.back();
  }

  async onSubmit() {
    const result = await request({
      url: "/api/order/create",
      type: "post",
      data: {
        productId: this.id,
      },
    });

    if (result.code !== "0") {
      const toast = this._toast.show(result.msg, 1000);

      return;
    }

    this._toast.success("支付成功，即将返回首页", 3000, () => {
      location.href = "/";
    });
  }
}
