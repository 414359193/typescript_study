// 使用type
type useType = {
  name: string;
  age: number;
  sex?: string;
};

let addUser = (user: useType): void => {
  console.log("添加用户");
};

addUser({ name: "zjh", age: 18 });

let updateUser = (): void => {
  console.log("uodate");
};
updateUser();
