// 类型别名 用来给类型起一个新名字 type 变量 = 类型
type name = string;
let ab: name = "lll";

type EventNames = "click" | "scroll" | "mousemove";
function handleEvent(ele: Element, event: EventNames) {
    // do something
}

handleEvent(document.getElementById('hello') as HTMLElement, 'scroll');  // 没问题
// handleEvent(document.getElementById('world'), 'dblclick'); // 报错，event 不能为 'dblclick'