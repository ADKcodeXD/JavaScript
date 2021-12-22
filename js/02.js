var obj = new Object();
var obj = { name: "dsada", age: 28 };
obj["123"] = 1523;
obj["nihao"] = "你好";
var n = "nihao"
obj.gender = "man"
    // console.log("gender" in obj);

// delete obj.gender;

// console.log("gender" in obj);

// var fun = new Function("console.log('hello ')");

// fun();
//函数声明
function wocao(x, b, c) {
    x = b + c;
    console.log(x);
}
wocao(3, 5, 7);
// 函数表达式

function sum(a, b) {
    return a + b;
}
// for (var i in obj) {
//     console.log(i);
//     console.log(obj[i]);
// }
fun();

function fun() {
    console.log("wocao")
}

function fun2() {
    console.log(funa);
    var funa = "funa";
}
fun2();

// 工厂方式创建对象
function createPerson(x, y, z) {
    var obj = new Object;
    obj.name = x;
    obj.age = y;
    obj.gender = z;
    return obj;
}

// 构造函数
function Person(name, age, num) {
    this.name = name;
    this.age = age;
    this.num = num
}
// 指向原型对象，也即对象公共区域
Person.prototype.sayHello = function() {
    console.log("hello");
}
var obj = new Person("das", 12, 1254888);
// obj.sayHello = function() {
//     console.log("woshiobj");
// }
obj.sayHello();
console.log(obj.hasOwnProperty("sayHello"));
console.log(obj.__proto__.__proto__.__proto__);
console.log(obj.__proto__.__proto__);
console.log(obj.__proto__);