let fn: Function; //只限定类型 不限定参数返回值
fn = () => {};

interface Aaa {
  fn1: (a: number, b: number) => number; //返回值类型定为number
}

let fn1: Aaa["fn1"]; //限定类型和返回值 类型为函数 返回值为number

fn1 = (x: number, y: number): number => {
  return x + y;
}; //赋值不会报错 实际执行会 只满足定义 没满足实现（没有参数）
fn1(1, 1);

// 声明一个函数类型变量
type userType = {
  name: string;
  age: number;
};
let addUser: (user: userType) => string;
// 给变量赋值

addUser = (person: userType): string => {
  return "kkk";
};

// 用type定义函数类型
type addUserFunc = (user: userType) => string;

let add:addUserFunc = (user:userType):string=>{
    return 'kk'
}