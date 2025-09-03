console.log("z");
console.error("z");
console.warn("z");
console.info("z");
console.debug("z");
// 打印对象
console.dir({ a: 1, b: 2 });
// 打印表格
console.table({ a: 1, b: 2 });
console.time("a");

console.timeEnd("a");
// 分组
console.group("g1");
console.log("z");
console.group("g2");
console.log("s");
console.groupEnd("g2");
console.groupEnd("g1");
// function a() {
//   console.trace();
// }
// function b() {
//   a();
// }
// b();

// console.memory
