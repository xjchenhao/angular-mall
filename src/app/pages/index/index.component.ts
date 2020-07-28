import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.less"],
})
export class IndexComponent implements OnInit {
  public selectedIndex: Number = 0;
  private hrefMap: Object = {
    0: "/",
    1: "/my",
  };
  private tabbarStyle: Object = { height: `${window.innerHeight}px` };
  constructor() {}

  ngOnInit() {
    const hrefMap = this.hrefMap;
    const pathname = location.pathname;
    for (let key in this.hrefMap) {
      if (hrefMap[key] === pathname) {
        this.selectedIndex = Number(key);
      }
    }
  }

  tabBarTabOnPress({ index }) {
    location.href = this.hrefMap[index];
  }
}
