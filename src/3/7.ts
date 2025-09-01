// 类实现接口
interface Alarm {
  alert(): void;
}
class Door {}

class sunDoor extends Door implements Alarm {
  alert() {
    console.log("SecurityDoor alert");
  }
}
// 接口继承类
class Point {
  x: number;
  y: number;
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
// 在声明 class Point 时，除了会创建一个名为 Point 的类之外，同时也创建了一个名为 Point 的类型（实例的类型）
interface PointA extends Point {
  z: number;
}

let aa: PointA = {
  x: 1,
  y: 2,
  z: 3,
};

interface PointInstanceType {
    x: number;
    y: number;
}