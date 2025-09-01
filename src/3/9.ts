// 声明合并 注意，合并的属性的类型必须是唯一的：
interface Alarm {
  price: number;
//   value:string
}
interface Alarm {
  value: number;
}
