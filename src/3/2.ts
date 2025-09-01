// 泛型函数
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

// 函数定义： 函数声明 函数表达式
// 1.函数声明
function sum(x: number, y: number): number {
  return x + y;
}

// 2.函数表达式

let mysum: (x: number, y: number) => number = function (
  x: number,
  y: number
): number {
  return x + y;
};

// 接口定义

interface Serch {
  (a: string, b: string, ): string;
}

let serch: Serch;

serch = function (x: string, y: string ,c: string = "zjh") {
  return "kkk";
};
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string | void {
    if (typeof x === 'number') {
        return Number(x.toString().split('').reverse().join(''));
    } else if (typeof x === 'string') {
        return x.split('').reverse().join('');
    }
}