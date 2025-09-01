"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// unknown
let zjh = "kkkk";
let b = zjh;
let cxn = "llll";
let c = cxn; // as 类型断言
let nb = 100;
b = nb;
//  void 多用于函数返回值
let hd = undefined;
// 表示 不返回明确的值 对于函数：有执行结果 值为null 或undifined
function run() { }
console.log("有返回值", run()); //有返回值 为undefined
// never 
function Fn() {
    throw new Error('kkkk'); //函数不会执行结束 就执行到这一行
}
Fn();
//# sourceMappingURL=4.js.map