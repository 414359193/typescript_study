// 对函数返回的结果声明类型 在参数后声明
function sum(a: number, b: number): string {
  return "zjh" + a + b;
}

console.log(sum(1, 1));

let zj = "122";
// 变量声明(有明确值)会自动推断 也可以显示声明类型
let zjh: number = 123;
// 函数参数 没有明确值 需要显示声明类型

// array
const arr: (string | number | boolean)[] = ["zjh", 100, false];
arr.push("cxn");
// arr.push(100)
// object 类型推断
const user = { name: "zjh", age: 18, lesson: [{ value: "python" }] };

// 显式类型声明 值满足类型限定就行

let hd: string = "jhh";
let arr1: string[] = ["jh", "xn"];
let arr2: Array<string> = []; //泛型声明
// arr1.push(10,23)

let ob: object;
let obj: { name: string; age: number };
obj = { name: "zjh", age: 10 };
// 组合类型

let my: string | number[] = []; //表示可为string 或array
my = "jhh";
my = [1, 2];

let my1: (string | number)[];
let my2: Array<string | number>;
function add(a:string|number,b:number){
  return 'jjj'
}
add('jh',123)
add(10,20)