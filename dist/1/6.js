"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let fn; //只限定类型 不限定参数返回值
fn = () => { };
let fn1; //限定类型和返回值 类型为函数 返回值为number
fn1 = (x, y) => {
    return x + y;
}; //赋值不会报错 实际执行会 只满足定义 没满足实现（没有参数）
fn1(1, 1);
let addUser;
// 给变量赋值
addUser = (person) => {
    return "kkk";
};
let add = (user) => {
    return 'kk';
};
//# sourceMappingURL=6.js.map