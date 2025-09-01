"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 非空断言
let zh = "zjh";
// zh = null;
// zh = undefined;
// 设置为null后 得不到html相关的类型提示
const el = document.querySelector("jh");
// 非空断言
const le1 = document.querySelector(".jh");
// 非空断言另一种方式 在后面加!
const le2 = document.querySelector(".jh");
// DOM类型推断与断言处理
let body = document.querySelector("body");
// class Hg {
//   el: HTMLDivElement;
//   constructor(el: HTMLDivElement) {
//     this.el = el;
//   }
//   html() {
//     return this.el.innerHTML;
//   }
// }
//# sourceMappingURL=4.js.map