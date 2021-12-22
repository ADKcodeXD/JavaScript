function Person(name, age) {
    this.name = name;
    this.age = age;
}
// var per = new Person("dass", 18, "man");

// Person.prototype.toString = function() {
//     return "hduisahfia";
// }
// console.log(per);

// var arr = new Array(10);
// arr[0] = 10;
// for (var i in arr) {
//     console.log(arr);
// }
// arr.push(123);

var per1 = new Person("dsad", 13);
var per2 = new Person("dweqad", 21);
var per3 = new Person("dsasa", 36);
var per4 = new Person("dsrxad", 12);
var per5 = new Person("dssdad", 15);

var perArray = [per1, per2, per3, per4, per5];

function getAdult(arr) {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].age > 18) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}
var Array2 = getAdult(perArray);
console.log(Array2);

perArray.forEach(function(value, index, obj) {
    console.log(value.name + " " + index + " " + obj);
});

var arr3 = perArray.slice(0, 2);
arr3.forEach(function(value) {
    console.log(value.name);
});
//sort的回调函数进行规则定义并排序
// 返回大于1的值会按照原顺序  小于1会调转顺序

var arr4 = [5, 8, 1, 2, 7, 9, 10];
arr4.sort(function(a, b) {
    return a - b;
});
console.log(arr4);