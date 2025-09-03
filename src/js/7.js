class A {}
class B extends A {}

class C extends B {}

class D extends C {

 
}
const d = new D();
console.log(d.__proto__.__proto__ === C.prototype )