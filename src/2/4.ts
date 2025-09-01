// 非空断言
let zh: string = "zjh";

// zh = null;
// zh = undefined;
// 设置为null后 得不到html相关的类型提示
const el: HTMLDivElement | null = document.querySelector("jh");

// 非空断言
const le1: HTMLDivElement = document.querySelector(".jh") as HTMLDivElement;
// 非空断言另一种方式 在后面加!
const le2: HTMLDivElement = document.querySelector(".jh")!;

// DOM类型推断与断言处理
let body = document.querySelector("body")!;

// class Hg {
//   el: HTMLDivElement;
//   constructor(el: HTMLDivElement) {
//     this.el = el;
//   }
//   html() {
//     return this.el.innerHTML;
//   }
// }
