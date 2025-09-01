// 装饰器
class Animal {
  type: string;
  constructor(type: string) {
    this.type = type;
  }
  greet() {
    console.log("hello I am " + this.type);
  }
}

const cat = new Animal("cat");

cat.greet();


// 继承 
class Xcat extends Animal {
  constructor() {
    super('cat')
  }
  
  greet() {
    console.log('meow~ meow~')
    super.greet()
  }
}

const xcat = new Xcat()
xcat.greet()


// -------------

class Animals {
  type: string
  constructor(type: string) {
	  this.type = type
  }

  @yelling
  greet() {
    console.log(`Hello, I'm a(n) ${this.type}!`)
  }
}

const typeToYellingMap = {
  cat: 'meow~ meow~'
}

function yelling(originalMethod: any, context: ClassMethodDecoratorContext) {
  return function(...args: any[]) {
    // console.log(typeToYellingMap[this.type])
    originalMethod.call(this, ...args)
  }
}

const xcat1 = new Animal('cat')
xcat1.greet()