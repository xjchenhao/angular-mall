import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.less"],
})
export class ProductListComponent implements OnInit {
  @Input() data: string;
  constructor() {}

  ngOnInit() {}

  jumpToProductDetail(id) {
    location.href = `/productDetail?id=${id}`;
  }
}
