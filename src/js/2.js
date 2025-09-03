// 事件循环
Promise.resolve().then(()=>{
    console.log('这是我预期的第一个输出',0)
   return  new Promise(resolve=>resolve(4))
    // return Promise.resolve(4)
}).then((res)=>{
    console.log("第二个",res)
}).then(res=>{
    console.log('第三个',res)
})

Promise.resolve().then(()=>{
    console.log(1)
}).then(()=>{
    console.log(2)
}).then(()=>{
    console.log(3)
}).then(()=>{
    console.log(5)
})

//
const p = new Promise(resolve=>resolve(1))
const p1 = Promise.resolve(p)

setTimeout(() => {
  console.log(1);
  setTimeout(() => {
    console.log(3);
  }, 0);
  Promise.resolve().then(() => {
    console.log(2);
  });
}, 3000);

console.log("a");

setTimeout(function () {
  console.log("b");
}, 0);

new Promise((resolve) => {
  console.log("c");
  resolve();
})
  .then(function () {
    console.log("d");
  })
  .then(function () {
    console.log("e");
  });

console.log("f");
// 3 7 4 1 2 5 6 

