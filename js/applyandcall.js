var obj = {
    name: 18
};

var obj2 = {
    name: 19,
    sayhello: function(a, b) {
        console.log(this.name + a + b);
    }
};

function fun2() {
    console.log("这是2");
}

obj2.sayhello.call(obj, "dsada", "sdasda");


var d = new Date();

var date = d.getDate();
// 获取当前几号
var day = d.getDay();
// 获取当前星期几 0为周日
var month = d.getMonth();
// 获取现在几月 0是一月
var year = d.getFullYear();
// 获取现在啥年
var hours = d.getHours();
// 获取小时

Math.ceil(1.1);
// 向上取整
Math.floor(1.2);
// 地板除
Math.abs(-1);
// 绝对值
Math.random();
// 生成0-1之间的随机数
Math.round(Math.random() * 10);
// 生成0-10之间的随机数

var reg = new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
// 括号中填写正则表达式的规则
var a = "sjoisjfoi@sdfafa.com";
var bool = reg.test(a);
console.log(bool);
// 正确返回true 错误返回false

function fn() {
    for (var i in arguments) {
        console.log(i);
    }
}
fn(1, 2, 3, 4);