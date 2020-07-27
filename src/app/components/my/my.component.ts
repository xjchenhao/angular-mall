import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my",
  templateUrl: "./my.component.html",
  styleUrls: ["./my.component.less"],
})
export class MyComponent implements OnInit {
  disabled: boolean = false;
  renderFooter: Function;

  constructor() {}

  renderHeader() {
    return "Basic Style";
  }

  renderHeader1() {
    return "Subtitle";
  }

  renderHeader2() {
    return "Customized Right Side（Empty Content / Text / Image）";
  }

  renderHeader3() {
    return "Align Vertical Center";
  }

  renderHeader4() {
    return "Icon in the left";
  }

  renderHeader5() {
    return "Text Wrapping";
  }

  renderHeader6() {
    return "Other";
  }

  onClick() {
    console.log("click");
  }

  switchCheck(value) {
    console.log("switch status:", value);
  }

  onDisableClick() {
    console.log("click", this.disabled);
    this.disabled = true;
  }
}
