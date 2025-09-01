//数组
// 1. 类型[]
let arr: number[] = [];

arr = [1, 2, 3, 4];
// 2. 数组泛型
let arr1: Array<number> = [];

arr1.push(1, 2, 3, 4);

// 接口表示 一般用来表示类数组
interface IArr {
  [index: number]: number;
}
let arr2: IArr = [1, 2, 23, 3, 4, 5];
