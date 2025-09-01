// 解构使用 as const

function add() {
  let a = "zjh";
  let b = (x: number, y: number): number => x + y;
  //   return [a, b];
  //   return [a,b] as [typeof a,typeof b]
  //   return [z,b] as const
  return [a, b];
}

const [n, m] = add();
// m(1,2) 解构后的类型 还与add返回值类型一致

console.log((m as Function)(1, 2));

(m as (x: number, y: number) => number)(1, 2);

// m(1,3) //会报错 要再次声明

const [p, t] = add() as [string, (x: number, y: number) => number];
t(1, 2);

const [c, d] = [...add()] as const;
// d(1,111) 报错
// const [z,k] = add() as const
console.log(typeof add());
