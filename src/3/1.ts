// let a:'zjh' = 'zjh'

// // 泛型接口
// interface GenericIdentityFn<T> {
//   (arg: T): T;
// }

class User {
  name: string;
  age: number;
  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }
  info() {
    console.log("快快快快快快我去拿那");
  }
}

const hh = new User("1", 2);

const users: User[] = []; //将class类型当数组值的类型 所以users数组里只能放User的实例
users.push(hh);
// users.push('jj')

// 对象接口 设置任意属性 索引签名 [proName: string]: string 要求所有属性（包括显式声明的 age）的类型都必须是 string，
interface Person {
  readonly id: number;
  name: string;
  age: string;
  [proName: string]: string | number;
}

let item: Person = {
  id: 111,
  name: "zjh",
  age: "12",
};
