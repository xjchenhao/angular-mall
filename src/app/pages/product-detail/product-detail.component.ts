import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.component.html",
  styleUrls: ["./product-detail.component.less"],
})
export class ProductDetailComponent implements OnInit {
  data = [
    "AiyWuByWklrrUDlFignR",
    "TekJlZRVCjLFexlOCuWn",
    "IJOtIlfsYdTyaDTRVrLI",
  ];

  imgHeight = "184px";

  product = {
    content: `<ul><li>555</li></ul>`,
  };
  constructor() {}

  ngOnInit() {}

  onBack() {
    history.back();
  }
}
