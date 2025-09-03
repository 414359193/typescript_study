// 数组去重
let arr = [1, 1, 1, 2, 3, 3, 3, 4, 5, 5, 5, 6];
// 1. Set
let arr1 = [...new Set(arr)];
// 用于创建一个新数组，其中包含通过指定测试（回调函数）的所有元素。
let arr2 = arr.filter((value, index, self) => {
  self.indexOf(value) === index;
});
let arr3 = arr.reduce((acc, current) => {
  if (!acc.includes(current)) {
    acc.push(current);
  }
  return acc;
}, []);
// indexOf includes
let arr4 = [];
arr.forEach((value) => {
  //   if (arr4.indexOf(value) === -1) {
  //     arr4.push(value);
  //   }
  if (!arr4.includes(value)) {
    arr4.push(value);
  }
});

// 数组清空
let list = [1, 2, 233, 4, 5];

// list = []

list.splice(0, list.length - 1);

while (list.length) {
  //   list.pop();
  list.shift();
}

list.lenght = 0;

const datalist = [
  {
    name: "zjh",
    age: 19,
  },
  {
    name: "cxn",
    age: 19,
  },
  {
    name: "jjj",
    age: 18,
  },
  {
    name: "lll",
    age: 18,
  },
];

const res = datalist.reduce((pre, acc) => {
  const { age } = acc;
  if (!pre[age]) {
    pre[age] = [];
  }
  pre[age].push(acc);
  return pre;
}, {});
console.log(res);
