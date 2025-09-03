function A() {
  this.getName = function () {
    console.log("zjh");
  };
}

function B() {
  this.getName = function () {
    console.log("zjh");
  };
}

B.prototype = new A();

function C() {
  this.getName = function () {
    console.log("zjh");
  };
}
C.prototype = new B();
function D() {
  this.getName = function () {
    console.log("zjh");
  };
}
D.prototype = new C();
const d = new D();
console.log(d.__proto__ === D.prototype)

console.log( d.__proto__.__proto__===C.prototype)
// D B
console.log( d.__proto__.__proto__.__proto__ === B.prototype)
console.log( d.__proto__.__proto__.__proto__.__proto__ === A.prototype)
