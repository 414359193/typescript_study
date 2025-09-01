"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// 函数类型 Function
let fn = () => { };
// fn = 'jjj'
let Fuc;
Fuc = () => "lll";
// 函数参数的声明
// 设置为可选参数 |设置默认值
function sum(a, b = 2) {
    return a + b;
}
console.log(sum(8));
// 函数的返回值类型
let a = sum(1, 3);
// 这时候的返回值类型是void 最好显式声明
function msg() {
    console.log("jj");
}
// 箭头函数
let get = () => {
    console.log("lll");
};
get();
//# sourceMappingURL=2.js.map