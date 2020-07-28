import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-my",
  templateUrl: "./my.component.html",
  styleUrls: ["./my.component.less"],
})
export class MyComponent implements OnInit {
  avatarUrl = "http://assets.shangqutong.cn/app/common/logo.png";
  nickName = "张三";
  constructor() {}

  ngOnInit() {}
}
