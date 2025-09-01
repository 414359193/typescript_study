// 泛型 在定义函数 接口 类 不预先指定具体的类型 在使用时指定
// 定义返回值的类型为数组类型
function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}
// 调用时 会根据传入类型 推断
createArray(3, "x"); // ['x', 'x', 'x']
function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

swap([7, "seven"]); // ['seven', 7]

// 泛型约束
function loggingIdentity<T>(arg: T): T {
  // console.log(arg.length); // 不能随意操作泛型的属性 所以要进行约束
  return arg;
}
interface Lengthwise {
  length: number;
}

function loggingIdentity1<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}

// 泛型接口
interface SearchFunc <T>{
  (source: string, subString: T): boolean;
}

let mySearch: SearchFunc<any>;//使用时 要定义类型
mySearch = function <T>(source: string, subString: T) {
  return false;
};
