// 剩余参数
function sum(...args: number[]): number {
  return 123;
}

function push(arr: any[], ...args: any[]): any[] {
  arr.push(...args);
  return [];
}

push([1, 1, 2], "2sxs", "33");

// 元组 类型、个数一一对应 顺序固定
let tuple: [string, number, boolean] = ["dd", 11, false];

// array

let arr: (string | number)[]=[11,2342,455,'jjj'];


let tuple2 = ["dd", 11, false] ;
