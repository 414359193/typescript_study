// 遍历对象
const obj = {
  a: 1,
  b: 2,
  c: 3,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
//  Object.keys() 将对象的key变成一个数组
Object.keys(obj).forEach((key) => {
  console.log(key, obj[key]);
});
console.log("Object.keys()", Object.keys(obj), Object.entries(obj));
// Object.entries(obj) 将对象变成嵌套数组
Object.entries(obj).forEach((key, values) => {
  console.log(key, values);
});
// 包含不可枚举和symbol属性
Reflect.ownKeys(obj).forEach((keys) => {
  console.log(keys, obj[keys]);
});

