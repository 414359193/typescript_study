// 断言
function hd(x: boolean): string | number {
  return x ? "yes" : 1000;
}

let res = hd(true) as string; //相当于指定类型
// res = 12
res = "12";
// const断言  宽泛类型 值类型  as oonst 根据具体的值提取类型

let a: string = "zjhh";

let b: "zjh" = "zjh"; //值类型

const c = 123;

let d = "zjh" as const; //相当于声明了类型为值类型 'zjh'

const arr = [a, b, c] as const; //会转换成元组 对应原来的值的类型

const obj = {
  name: b,
} as const;

// 数组使用const断言

let h = "hhh";
let j = 122 as const;
let zh = [h, j] as const; //会将数组转为元组
let f = zh[1];
// f = 12232 //不能赋值给122外的值
//const断言另一种写法
let zh1 = <const>[h, j];
