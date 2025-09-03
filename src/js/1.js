console.time("a");
const arr1 = [];
for (let i = 0; i < 10000000; ++i) {
  arr1[i] = 1;
}
console.timeEnd("a");

console.time("b");
const arr2 = [];
arr2[10000000 - 1] = 1;
for (let i = 0; i < 10000000; ++i) {
  arr2[i] = 1;
}

console.timeEnd("b");
// 2.判断数组为空
let obj = {};

Object.keys(obj).length === 0;
JSON.stringify(obj) === "{}";
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    return false;
  }
}
Reflect.ownKeys(obj).length === 0;
// 3.强制类型转换=>使用构造函数 隐式类型转换=> 计算 类型判断==

let num = Number("32"); //字符串会转为数字
let str = String(123);
let bool = Boolean(0);

let res = 1 + "3";
true == 1; //将true转为数字 1
// 4. == === 区别 == 会进行类型转换（判断值是否相等）  ===直接判断（类型+值）是否相等

// let a = "?";
const a = {
  i: 1,
  valueOf: function () {
    return this.i++;
  },
};
if (a == 1 && a == 2 && a == 3) {
  console.log("hello 我是你码");
} else {
  console.log("no");
}
// 5. 变量在内存中的栈堆存储

// 6.判断js的数据类型
typeof 22;
typeof "hh";
typeof true;
typeof null; //'object'
typeof undefined;
typeof [1, 1, 2, 3]; //object
// Object.prototype.toString 可以获取更详细准确的数据类型信息
Object.prototype.toString.call([1, 2, 3]);
obj instanceof Object; //检查对象是否是某个类的实例
Array.isArray("jjj"); //对象是否为数组
// 7.判断对象是否相等
JSON.stringify(obj) === JSON.stringify(obj);
