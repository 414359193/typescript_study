// unknown
let zjh: any = "kkkk";
let b: string = zjh;

let cxn: unknown = "llll";
let c: string = cxn as string; // as 类型断言

let nb: number = 100;

b = nb as unknown as string;

//  void 多用于函数返回值
let hd: void = undefined;
// 表示 不返回明确的值 对于函数：有执行结果 值为null 或undifined
function run(): void {}
console.log("有返回值",run());//有返回值 为undefined
// never 
function Fn():never{
    throw new Error('kkkk')//函数不会执行结束 就执行到这一行
}
Fn()