# JS基础以及核心知识

## 前言

首先先整理一下学习计划，在整个前端学习的过程当中，js无疑是最重要的部分。

js基础，我的计划是使用尚硅谷的两套教程。

- 其一 js基础，延续了超哥的讲解
- 其二 尚硅谷的js高级部分

其次呢，由于jQuery的淘汰，我们可以简单的了解jQuery即可。这里使用黑马的jQuery教程即可。

最后，学习一下ajax和es6的新标准，然后再次进入到框架的学习当中。

总需时间和分配时间大概是：40+17+10+3+6=76h

![image-20211220225115202](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211220225115202.png)

ok 说到这里。2021/12/20 夜

*更新（2021/12/22）：由于尚硅谷的js入门基础部分，是真的零基础入门，如果有c语言基础或者java基础这部分可以二倍速甚至跳过大部分讲解。因此我为这阶段的时间预算缩减了20h*

总计：20（3天~4天）+17（4天）+10（2天）+3（半天）+6（1天半）=56h

总计：耗时12天

其次，需要看一下js红宝书 *可以实体书*

*本笔记基于尚硅谷javaScript基础教程以及黑马pink老师主讲的javaScript教程*



## 基础部分

### js的组成部分

ECMAScript Dom Bom



基础代码

```html
<script type="text/javascript">
    document
</script>
```

alert("") 弹出框

document.write("")  往网页中写东西

console.log("日志输出")

### 书写位置

js可以写在button的onclick中，也可以写在a标签中的href中（前面要加JavaScript:)

但是由于耦合度高，因此在script标签中写比较好。

当然最好是在js文件中写。



script一旦用了外部js文件，就不能在那个标签中继续编写代码了。

需要内部可以再新建一个script标签写代码。

![image-20211221112349782](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221112349782.png)



### 一些常见的语法

注释 多行注释，都与java差不多

字面量====常数

变量：非强数据类型。

定义 方法:

```js
var a=100;
```

```js
<script type="text/javascript">
        var thisst = "dsjiauodja";
        alert(thisst);
 </script>
```

由于数据类型是不确定的，因此要注意数据类型的转换，输出。。。

#### 标识符

可以包含$,_。因此很多框架内的变量会包含这俩特殊符号

可以用这俩开头。

不用数字开头即可。

适用驼峰命名法

### js数据类型

js中的数据类型有六种

- String字符串
- Number 数值
- Boolean 布尔
- Null 空白
- Undefined 未定义
- Object 对象

除了object是引用类型，其他都是基本数据类型

### js字符串

![image-20211221113945515](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221113945515.png)

字符串可以看到有很多种方法，有很多和java中字符串的方法是差不多的。

单引号和双引号都是可以用的，不要混用即可。



#### typeof

用于判断数据类型

#### Infinity

如果number数值超出了maxvalue，则返回infinity。

```css
var thisst = "153456";
        var num = 123456;
        var max = Number.MAX_VALUE
        var a=max*num;
        console.log(typeof(thisst));
        console.log(num);
        console.log(max);
        console.log(a);
```

![image-20211221132940942](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221132940942.png)

#### NaN

特殊的一个字面量，表示当前值不是数字；

也即运算中，如果数值不合法，会计算出nan这个值。

#### Max和MIN

注意 Min_Value 不代表最小值，表示的是最小的小数值。

*Number数据类型是包括float类型的。

### 强转类型

- num->str====调用toString;

  调用String()  也可以直接转换

- str->num  =====用Number()函数即可

  只要有非法的数字，就会转变为NaN，如果是空串或者空格，会转换为0；

  假设 ：如果有“123px”想转换为数字进行运算？

  使用parseInt和parseFloat

```js
var pixel="123px";
        a=parseInt(pixel);
        a=a+10;
        console.log(a);
```



![image-20211221135638949](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221135638949.png)

- parseFloat:可以对付有小数点的字符串小数。

### 运算

一般类型 ，会转换为number类型后进行运算。

字符串相加就是java中 的效果。而且字符串和其他东西相加，都是优先级最高，会将其他类型变成string再相加

### 自增

a++;

a--;

increase好像也是可以的。

### 逻辑运算符

! && || 这都是很常规的 逻辑运算符。

对其他类型进行逻辑运算，会转换为boolean类型再进行运算。



### 逻辑运算返回值

js有一点不同，做了逻辑运算后不是返回boolean值，而会返回其原值。

例如

```js
result = 1 && 2;
        alert(result);
```

这时候会返回后面的2，当两个都为true时。

如果有一个false

则返回前面的false值、

```js
var result = 0 && 2;
        alert(result);
```

这时候会返回0。



||的情况有些不同

第一个为true 则直接返回第一个值，如果第一个是false则直接返回第二个值。

```js
var result = 5 || 2;
        alert(result);
```

这样直接返回5.

```js
var result = 0 || NaN;
        alert(result);
```

而这样直接返回NaN

### Unicode编码

网页中使用unicode编码

```html
<h1>&#1111</h1>
```

区别是数字要从十六进制换成十进制。

### 条件判断

==比较数值的时候，会做自动的类型转换。大部分情况会转换为数字进行比较。

注意*

*undefined 衍生自null

因此这俩值会相等

**NaN不和任何值相等，包括他本身。

要判断一个值是否为NaN，可以使用isNaN函数。

```js
var a = NaN;
        var b = undefined;
        var c = null;
        console.log(a == b);
        console.log(b == c);
        console.log(isNaN(a));
```

![image-20211221153335372](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221153335372.png)

=== 代表全等：不会做自动类型转换。比较专业点。

!== 不全等：同上。

**注意：undefined 和null是==的，但是他们是非===的！！！**

### 条件运算符

即三元运算符

?:

```js
var c=a==b?a:b;
```

### if

基本没有什么需要注意的点



### 输入prompt

这个可以弹出一个提示框，这个文本框可以输入东西。

```js
var a = prompt("请输入成绩");
        a = parseInt(a);
        alert(a);
        if (a != NaN) {
            if (a > 90) {
                alert(a);
            } else {
                alert("aoooo");
            }
        } else {
            alert(a + "这是非法参数");
        }
```

**加号转换格式，当我们需要转换数字的时候，前面加个+号就可以**

```js
var a = +prompt("请输入成绩");
```

这样a就是number类型了。

如果a是字母，或者无法转换会变成NaN

### switch

跟c语言 java是差不多的。

### while

while 也是差不多的。

### for循环

```js
for (i = 0; i < 100; i++) {
            document.write(i + "</br>");
        }
```

也是差不多的。

### label标签

我们可以给循环取名，可以让break对指定的循环进行调出。

```js
afor:
for (;;) {
    bfor:
    for(i=0;i<10;i++){
        if(i==2){
            break afor;
        }
    }
}
```





## 面向对象

### 对象类型

#### 内建对象

例如String Math等。这些可以在任何地方使用

#### 宿主对象

比如BOM DOM

#### 自建对象

自己所创建的对象

### 对象新建

js中添加属性，可以直接赋值。

不需要提前声明。

```js
var obj = new Object();
obj.name = "huidshai";
obj.age = 26;
obj.gender = "男";

console.log(obj.name);
```

#### 删除某个属性

delete xx.属性

```js
delete obj.gender;
```

这样会永久删除这个属性

### 一些奇怪的东西

对象的属性名，可以不遵守标识符规范。

即使是关键字也可以当做属性来命名。

例如

```js
obj.var ="var";
obj.123="123";

console.log(obj["123"]);
```



#### []中括号传值

js中可以用中括号括起来，然后传一些参数和值。

例如：

```js
var obj = new Object();
obj["123"]=1523;
obj["nihao"]="你好";
var n="nihao"

console.log(obj[n]);
```

这样就可以取到obj.nihao的值。

#### code runner

这个插件可以在vscode中安装，安装后可以直接运行js文件

### in 检查属性是否在对象中

该运算符可以检查属性是否在对象当中存在。

```js
obj.gender = "man"
console.log("gender" in obj);

delete obj.gender;

console.log("gender" in obj);
```

![image-20211221203403174](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221203403174.png)

### js内存存放

js的对象放在堆内存当中，变量放在栈内存中。

因此obj一般的对象是存放的是堆内存地址。

比较引用数据值时，比较的是数据地址。

### 对象字面量

```js
// var obj = new Object();
var obj={};
```

可以直接用大括号来代替new object；

大括号里面可以写属性值。

```js
var obj = {name:"dsada",age:28};
```

### 函数

创建一个函数对象

```js
var fun = new Function("console.log('hello ')");

fun();
```

通过新建对象的方式创建一个函数

![image-20211221215427866](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211221215427866.png)

这是基本不用的方法

```js
//函数声明
function wocao(x, b, c) {
    x = b + c;
    console.log(x);
}
wocao(3, 5, 7);
```

这是常用的方法，叫函数声明

还有函数表达式和匿名函数方法

```js
// 函数表达式
var fun2=function(){
    console.log("这是函数表达式方法");
}
// 匿名函数
=>function(){
    console.log("dsjhauoidja");
}
```

函数传参是不会检查类型的。

所以要注意，检查参数的类型。



（非强制类型的语言的缺点）

return 后面不跟值，就相当于return一个undefined

**js中参数不同的地方，参数可以是一个函数**

可以将一个匿名函数作为实参传给函数 ，这是js一个特性。也可以是回调函数。

### 枚举

for ... in

```js
for (var i in obj) {
    console.log(i);
}
```

foreach 语法

这样可以枚举对象中的所有属性名。

```js
for (var i in obj) {
    console.log(i);
    console.log(obj[i]);
}
```

使用中括号 可以取出对象中的值

![image-20211222122031178](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222122031178.png)

### 作用域

js中只有两种作用域

一种是全局作用域，另一种是局部作用域

全局作用域在页面打开时创建，关闭时销毁

全局作用域中有一个全局对象window可以使用，代表的是浏览器的窗口，由浏览器给我们创建

全局作用域中定义的属性，会保存在window对象的属性当中。*也就是全局变量保存在window对象中。方法也是同理，全局方法会保存在window中，可以用window.fun()进行调用）*

### 函数的声明顺序

使用函数声明形式创建的函数，会在所有代码执行之前就被执行。

也即

```js
fun();
function fun(){
    console.log("wocao")
}
```

fun照样能被执行。

但是函数表达式的函数，不会提前创建

```js
var fun2 = function() {
    console.log("wocao")
}
```

#### 函数作用域

在函数内起效，函数结束后销毁，包括变量，对象等。

在函数作用域中也有声明提前的特性:

也就是使用var声明的变量会在所有代码执行前就创建

```js
function fun2() {
    console.log(funa);
    var funa="funa";
}
//这样会变成=>
function fun2() {
    var funa;
    console.log(funa);
    funa="funa";
}
```

![image-20211222124637418](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222124637418.png)

因此会输出一个undefined

### this

函数执行的上下文对象。

默认浏览器中的对象是，window对象。

所有this都会指向当前的对象。浏览器的默认上下文对象就是window。

### 工厂方法

```js
// 工厂方式创建对象
function createPerson(x,y,z) {
    var obj = new Object;
    obj.name=x;
    obj.age=y;
    obj.gender=z;
    return obj;
}
```

这样可以批量制造一些具有相同特性的对象。

这样创建只能是简化了批量创建对象的过程，接下来就要讲类与继承。

### 构造函数

```js
// 构造函数
function Person(){
    // js中构造函数 和普通函数没有什么不同，但是区别就在于 构造函数要用new关键字调用
}
var obj=new Person();
```

![image-20211222131933265](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222131933265.png)

执行流程：

- 立刻创建一个新对象
- 将新建对象设置为函数中的this
- 逐行执行函数中代码
- 新建对象返回

#### instanceof

这个关键字可以用于检查对象的类型。



### 原型prototype

每一个函数 ，我们的解析器都会添加一个prototype属性，来指定我们当前函数对象。

通过构造函数新建的对象，有一个____proto____属性 来指向这个原型

原型对象相当于一个公共区域：也就是所有对象都继承了这个公共区域。

```js
// 构造函数
function Person(name, age, num) {
    this.name = name;
    this.age = age;
    this.num = num
}
// 指向原型对象，也即对象公共区域
Person.prototype.sayHelle = function() {
    console.log("hello");
}
var obj = new Person("das", 12, 1254888);
for (var i in obj) {
    console.log(i);
}
obj.sayHelle();
```

![image-20211222134417082](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222134417082.png)

#### 检查对象自身有无属性

```js
Person.prototype.sayHello = function() {
    console.log("hello");
}
var obj = new Person("das", 12, 1254888);
// obj.sayHello = function() {
//     console.log("woshiobj");
// }
obj.sayHello();
console.log(obj.hasOwnProperty("sayHello"));
```

hasOwnProperty("sayHello") 这个能检查我们对象当中是否设置了该属性。

##### 原型链

原型对象，只有两层。

即

```js
console.log(obj.__proto__.__proto__.__proto__);
```

```js
console.log(obj.__proto__.__proto__.__proto__);
console.log(obj.__proto__.__proto__);
console.log(obj.__proto__);
```

![image-20211222135540643](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222135540643.png)

这就是js中的原型链的一个体现

### 重写toString

```js
function Person(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
var per = new Person("dass", 18, "man");

Person.prototype.toString = function() {
    return "hduisahfia";
}
console.log(per);
```

注意tostring在原型中。

### 垃圾回收

gc ,js中的垃圾回收机制。我们将对象设置为null，js就会帮我们回收掉这个对象。

### 数组

js的array是很自由的，length可随意修改

```js

var arr = new Array(10);
arr[0] = 10;
for (var i in arr) {
    console.log(arr);
}
```

array可以push和pop

push返回值：会返回push完成后最新的长度。

unshift:在数组开头加新的元素

shift：可以删除数组的第一个元素，并且返回这个数值。

可以将数组放入【】中，

#### foreach 遍历函数

array提供了一个foreach方法供我们对数组进行遍历。

这个方法需要一个函数作为参数，这种由我们创建的，不由我们调用的函数，就叫做回调函数。

```js
perArray.forEach(function(a) {
    console.log(a.name);
});
```

![image-20211222153206398](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222153206398.png)

浏览器会在这个回调函数中传递三个参数，第一个参数就是当前遍历的元素，第二个参数就是数组内的index，第三个参数即我们正在遍历的数组对象。

![image-20211222153433233](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222153433233.png)

#### slice()

数组的一个常用方法，截取数组的片段

参数是start,end

#### splice()

三个参数，后面可以在删除的位置添加新元素

#### concat()

会将两个数组进行连接，不会影响原数组

#### join()

可以以这个为分割号连接数组中的所有元素。

不指定连接符就会用逗号相连接

#### reverse()

会反转数组，对原数组产生影响

#### sort()

排序数组，可以进行排序但是默认是按照Unicode编码的顺序进行排序的。

因此对数字进行排序，可能会得到错误的结果。

```js
//sort的回调函数进行规则定义并排序
// 返回大于1的值会按照原顺序  小于1会调转顺序

var arr4 = [5, 8, 1, 2, 7, 9, 10];
arr4.sort(function(a, b) {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});
console.log(arr4);
```

![image-20211222162349178](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222162349178.png)

也可以简化，直接return a-b,就代表升序排序。

```js
var arr4 = [5, 8, 1, 2, 7, 9, 10];
arr4.sort(function(a, b) {
    return a - b;
});
console.log(arr4);
```

a-b为负值，说明a比b小。

### call and apply

这两个方法都是函数对象的方法，需要通过函数对象来调用。

对函数调用这两个方法的时候，函数都会执行。

```js
var obj = {
    name: 18
};

var obj2 = {
    name: 19,
    sayhello: function() {
        console.log(this.name);
    }
};

function fun2() {
    console.log("这是2");
}

obj2.sayhello.call(obj);
```

可以看到 obj2中有个方法是出现this.name，而运行结果确实obj的name。call的作用是替换该函数对象中的this为指定的对象。

```js
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
```

当函数有参数的时候，call可以跟参数，和apply不同的就是 call不需要中括号，apply需要

![image-20211222164251074](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222164251074.png)

### arguments  类数组对象

里面记录了所有传递过来的实参。

有时候我们不知道到底会传多少个值过来，这时候就要用到arguments来获取实际上传过来的参数。

```js

function fn() {
    for (var i in arguments) {
        console.log(arguments[i]);
    }
}
fn(1, 2, 3, 4);
```

![image-20211222202101483](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222202101483.png)



### Date对象

```js

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
```

还有个unix时间戳 getTime

### Math对象

Math可以直接拿来用。不需要新建对象。

Math.ceil()//向上取整

```js
Math.ceil(1.1);
// 向上取整
Math.floor(1.2);
// 地板除
Math.abs(-1);
// 绝对值
Math.random();
// 生成0-1之间的随机数
Math.round(Math.random()*10);
// 生成0-10之间的随机数

```

### 包装类

即对基本数据类型的包装类

- String()
- Number()
- Boolean()

使用这个包装类包装基本类型，能让基本数据变为包装类。

在基本类型需要使用一些属性或者方法的时候，浏览器会自动将基本类型转换为包装类。



### 字符串一些常用方法

str.substring 和substr的区别

主要是参数的区别substring（start，end）

substr（start，length）

split()

可以拆分

以xx为分隔符的时候，可以使用这个函数来进行拆分

### 正则表达式对象

```js
var reg=new RegExp()
```

```js
var reg=new RegExp(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);
// 括号中填写正则表达式的规则
var a="sjoisjfoi@sdfafa.com";
var bool=reg.test(a);
// 正确返回true 错误返回false
```

### 简单数据类型和复杂数据类型

简单数据类型即我们平时用到的除了object之外的五个数据类型（null是对象也是简单数据类型）

## WebApi BOM以及DOM

*从这里开始我改用了黑马pink的教程*

### webapi简介

js的组成有ecma和dom和bom

我们在这阶段主要学习dom和bom，web api给我们一系列函数来操作dom和bom

### **DOM**

文档对象模型，即处理文档的接口

**Dom树**

一个页面就是一个文档，文档有各种标签，根元素为html标签。

一个文档DOM用document来表示，一个元素DOM中用element来表示。

网页中所有内容都是节点，DOM中用node表示

![image-20211222221039331](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222221039331.png)

#### getElementById

获取元素的最基本的方法。

```js
var element=document.getElementById("id001");
```

这样就能获取到页面上id为id001的元素

在js中，这里获取到的是一个元素对象。

*console.dir*

这里介绍了一个方法，可以通过dir获取到对象的更详细信息并输出到控制台

#### getElementsByTagName

这个可以把页面所有这个标签的元素获取到。

![image-20211222221936108](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222221936108.png)

```js
var litag = document.getElementsByTagName("li");
    console.log(litag);
```

![image-20211222221957660](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222221957660.png)

获取到的元素是动态的，也就是页面内容更改，这里获取到的元素也会变化。

如果页面中没有元素，会返回一个空的伪数组。

另外，如果我们要获取指定的父元素下的所有标签，可以通过元素对象来get

```js
var li_list=document.getElementById('olol').getElementsByTagName('li');
```

这样就可以先通过获得特定id的父元素对象然后再获取下面所有的li标签了。

同样的，我们也可以通过类名来获取元素

#### getElementsByClassName(HTML5 新元素)

通过类名来获取元素，使用方法同上

#### querySelector

选择器，我们可以选择指定类或者标签的，第一个的子元素。

```js
var firstbox=document.querySelector('.box1');
```

记得，字符串需要带上符号，选类要加上.，选id要加上#，标签则无需加上符号。

querySelectorAll

这个可以指定选择器的所有对象。

#### 获取特殊元素

当我们要获取body 或者html标签的时候。可以通过dom中专门提供的方式来进行获取。

```js
var body = document.body;
```

这样可以获取body

而获取html元素有点特殊

```js
var html = document.documentElement;
```

要用这个方式来进行获取。

### 事件

事件组成三要素

- 事件源
- 事件类型
- 事件处理程序

事件源：指事件被触发的对象

事件类型：点击？经过？

事件处理程序：即要干什么。

```html
<button id="btn1">按钮</button>
    <script type="text/javascript">
        var btn = document.getElementById('btn1');
        btn.onclick = function() {
            alert("hello ");
        }
    </script>
```

通过一个匿名函数定义点击事件。

#### 其他事件的处理

不仅是button可以添加事件，任何元素都可以添加事件。

比如 div，比如input

### 操作元素

dom可以改变网页内容，改变文字。

#### innerText

例如：通过更改element中innerText属性来更改内容。

```html
<button id="btn1">点击显示时间</button>
    <div id="time">
        当前未显示
    </div>
    <script type="text/javascript">
        var btn = document.getElementById('btn1');
        var div = document.getElementById('time');
        btn.onclick = function() {
            var date = new Date();
            div.innerText = date.toString();
        }
    </script>
```

#### innerText和innerHTML

前者是不识别html标签的，后者支持。

```js
var div1 = document.getElementById('div1');
        var div2 = document.getElementById('div2');
        div1.innerText = '<h1>hfuashfoa</h1>';
        div2.innerHTML = '<h1>hfuashfoa</h1>';
```

![image-20211222225032998](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211222225032998.png)

innerText会去除格式，去除标签，html不会，推荐使用HTML

#### 属性操作

可以通过操作元素的属性来达到修改的目的，例如修改元素的img的路径

```html
<button id="dyz">第一张</button>
    <button id="d2z">第二张</button>
    <img src="../css floder/img/img-1170px.png" alt="">
    <script type="text/javascript">
        var btn1 = document.getElementById('dyz');
        var btn2 = document.getElementById('d2z');
        var img = document.querySelector('img');
        btn1.onclick = function() {
            img.src = '../css floder/img/img-1170px.png';
            img.title = 'first';
        }
        btn2.onclick = function() {
            img.src = '../css floder/img/img-2170px.png';
            img.title = 'first2';
        }
    </script>
```

#### 分时操作

思路 通过dategethour获取到当前时间，根据不同时间更改不同的图片或内容。



#### 表单操作

表单有专门代表内容的属性，value。表单中没有innnerText和HTML

```js
<input type="text" name="" id="" value="">
    <button></button>
    <script type="text/javascript">
        var input=document.querySelector('input');
        var btn=document.querySelector('button');
        btn.onclick=function(){
            input.value='当前被点击';
            this.disabled=true;
        }
    </script>
```



**京东密码可见框小练习**

思路：就是在点击label标签的时候更改图片路径和表单的类型即可。

```js
var eye = document.getElementById('img');
        var input = document.getElementById('inner');
        var flag = 1;
        eye.onclick = function() {
            if (flag == 0) {
                input.type = 'password';
                eye.src = 'img/密码可见.png'
                flag = 1;
            } else {
                input.type = 'text';
                eye.src = 'img/password.png'
                flag = 0;
            }
        }
```

#### 样式的修改

```js
var div = document.querySelector('div');
        div.onclick = function() {
            this.style.backgroundColor = '#242424';
        }
```

通过style属性中的样式名来进行修改。

 #### 失去焦点和获得焦点

```js
var input = document.querySelector('input');
        input.onfocus = function() {
            input.placeholder = '';
        }
        input.onblur = function() {
            input.placeholder = '手机';
        }
```

#### 便捷的修改样式className

适用于我们要修改很多样式的时候,可以提前写好一个用于修改的css类，我们直接指定新的类名即可。

```js
ele.onclick = function() {
            this.className = 'class2';
        }
```

这个操作会覆盖掉旧的类名，如果需要留下则空格后面加上新的类。



#### 总结

![image-20211223123808946](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223123808946.png)

### 互斥

### 鼠标经过和离开

### 全选逻辑的实现

首先需要一个复选框，标记为全选

```js
var all = document.getElementById('all');
        var tabs = document.getElementById('tabs').getElementsByTagName('input');
        all.onclick = function() {
            for (var i in tabs) {
                tabs[i].checked = this.checked;
            }
        }
```

### 获取属性的另一种方法

```js
all.getAttribute
```

这种方法主要用于获取自定义的属性值，直接得到的属性一般是内置属性。我们需要获取我们自己定义的属性的话就要用这种方法来获取。

同样的 我们要更改属性的话 就要用set方法来进行set。

#### for ...in的使用错误认知

js中的forin和java中的foreach是不同的用法，由于原型的存在，使用for in会出现未知的错误。

### H5自定义属性

平时我们可以在标签中设置一些自己定义的属性。

同时，有两种方法可以获取，第一种就是getAttribute

第二种是dataset，dataset可以获取data- 开头的属性

### 节点操作

节点操作是利用父子层级关系来进行获取元素的一种手段。逻辑性较强，但是兼容性会比较差。

![image-20211223144017031](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223144017031.png)

使用parentNode或者childNodes，这种方法可以快速获取父子节点

firstChild 获取第一个子节点。

### 创建节点

```html
<ul>

    </ul>
    <script type="text/javascript">
        var ul = document.querySelector('ul');
        var li = document.createElement('li');
        ul.appendChild(li);
    </script>
```

像这样，就是把li标签插入到ul后面。

而insertbefore就是插入前面。

### 发布留言案例

可以利用ul.append增加li

来进行模拟聊天发送信息的感觉。

```html
<input type="text" value="" id="text">
    <button id="btn">发送</button>
    <ul>

    </ul>
    <script type="text/javascript">
        var btn = document.getElementById('btn');
        var textarea = document.getElementById('text');
        var ul = document.querySelector('ul');
        btn.onclick = function() {
            if (textarea.value == '') {
                alert("未输入！")
            } else {
                var li = document.createElement('li');
                li.innerHTML = textarea.value;
                ul.appendChild(li);
                textarea.value = '';
            }
        }
    </script>
```

同样的，可以删除留言。

### 改进 删除留言

```js
<script type="text/javascript">
        var btn = document.getElementById('btn');
        var textarea = document.getElementById('text');
        var ul = document.querySelector('ul');
        btn.onclick = function() {
            if (textarea.value == '') {
                alert("未输入！")
            } else {
                var li = document.createElement('li');
                li.innerHTML = textarea.value + "<a href='javascript:;'>删除</a>";
                ul.insertBefore(li, ul.children[0]);
                textarea.value = '';
                // 删除 当前a所在的父亲li，也就是remove ul下的li
                var as = document.querySelectorAll('a');
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick = function() {
                        ul.removeChild(this.parentNode);
                    }
                }

            }
        }
    </script>
```

### 复制节点

node.cloneNode()浅拷贝，这样做只复制标签，不复制里面的内容。

node.cloneNode(true)深拷贝，这样做会将内容也一起复制

### 动态生成表格案例

```js
<script type="text/javascript">
        var datas = [{
            name: 'abc',
            subject: '数学',
            score: 99
        }, {
            name: '王库洛',
            subject: '英语',
            score: 59
        }, {
            name: '张西数',
            subject: '数学',
            score: 31
        }];
        // 往tbody里面创建行
        var tbody = document.querySelector('tbody');
        for (var i = 0; i < datas.length; i++) {
            var tr = document.createElement('tr');
            tbody.appendChild(tr);
            for (var k in datas[i]) {
                var td = document.createElement('td');
                td.innerHTML = datas[i][k];
                tr.appendChild(td);
            }
            var lasta = document.createElement('td');
            lasta.innerHTML = "<a href='javascript:;'>删除</a>";
            tr.appendChild(lasta);
        }
        // 删除逻辑
        var alist = document.querySelectorAll('a');
        for (var i = 0; i < alist.length; i++) {
            alist[i].onclick = function() {
                tbody.removeChild(this.parentNode.parentNode);
            }
        }
    </script>
```

![image-20211223163219323](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223163219323.png)

### 创建元素的几种方法（面试高频）

write写入带标签的内容的时候也可以创建节点元素，但是会导致页面重绘。

![image-20211223163959063](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223163959063.png)

innerHTML和createElement的区别，一个是采取拼接字符串的形式进行创建元素，一个是通过函数创建。

```js
var b=[];
var element='<div>这是实例</div>'
for(var i=0;i<100;i++){
    b.push(element);
}
document.body.innerHTML=b.join('');
//使用innerHTML数组形式创建元素
for(var i=0;i<100;i++){
    document.createElement('div');
}
```

### DOM重点核心

![image-20211223164751746](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223164751746.png)

实际上也是增删查改

## 事件高级

### 注册事件的两种方式

之前所使用的的注册方式都是传统方式，但也有一种方法监听注册方式。

传统的注册方式，具有唯一性。

相比传统注册方式，有一种好的方法为addEventListener

```js
btn2.addEventListener('click', function() {
            alert("dsadsa");
        },)
```

这个有三个参数，第一个为事件类型，第二个即处理函数。

同一个事件可以添加多个监听器。

### 删除事件（解绑）

传统的方式，只要把onclick=null，即可解绑

```js
btn2.addEventListener('click', fn);

        function fn() {
            alert(5);
            btn2.removeEventListener('click', fn);
        }
```

第二种方法的移除，我们不能移除一个匿名函数，因此要考虑到移除事件的话需要另外起名函数。

### DOM事件流

即指页面中接受事件的顺序。事件发生时会在元素节点直接按照特定的顺序进行传播。

![image-20211223172018988](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223172018988.png)

**addEventListener的第三个参数**

如果第三个参数处于true，即为捕获阶段。false即为冒泡阶段。

实际开发中我们会更关注事件冒泡，很少关注捕获。

### 事件对象

event就是一个事件对象，是写到小括号里的 ，可以当成形参来看。

```js
btn2.onclick=function(event){
            event
        }
```

这个括号中间的对象即为事件对象。

#### 事件对象常见方法

e.target

返回的是触发事件的对象，而this是绑定事件的对象。

也就是说，点击了哪个target就返回哪个。

e.preventDefault()

这个方法可以阻止默认的行为，比如默认的链接跳转。

#### 阻止事件冒泡stopPropagation()

### 事件委托（面试高频）

事件委托，之前我们对很多个按钮注册事件的时候，是全部都进行注册。

但是我们可以通过事件委托，为父节点添加监听器。

通过事件对象的target来找到点击的li

```js
var ul = document.querySelector('ul');
        ul.addEventListener('click', function(e) {
            e.target.style.backgroundColor = 'pink';
        })
```

![image-20211223190035663](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223190035663.png)

通过事件对象，我们可以精准定位我们点击的元素。

### 鼠标事件

![image-20211223190916728](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223190916728.png)





mousemove

这个即鼠标在页面内移动就触发事件。

#### 小案例 图片跟着鼠标走

```html
<img src="./img/_提示.png" alt="">
    <script type="text/javascript">
        var img = document.querySelector('img');
        document.addEventListener('mousemove', function(e) {
            // console.log(e.clientX + ',' + e.clientY);
            var x = e.pageX;
            var y = e.pageY;
            img.style.left = x + 'px';
            img.style.top = y + 'px';

        })
    </script>
```

记住调整left和top的时候要加上px



### 键盘事件

onkeyup 放开键盘时触发

onkeydown 按下键盘时触发

onkeypress 按下也能触发，但不识别功能键。

三个事件的执行的顺序：keydown->keypress->keyup



#### keycode

可以用这个事件的属性来查看用户到底按下了什么按键。

keypress和keydown的区别就在此处，

press是区分大小写的，而keydown是不区分的。

```js
document.addEventListener('keypress', function(e) {
            console.log(e.keyCode);
            if (e.keyCode === 65) {
                alert('你好');
            }
        })
```

## BOM

浏览器对象模型，即客户和浏览器发生交互时，直接操作的对象主体。

也就是整个浏览器，都属于BOM，而DOM只是页面内容。

![image-20211223220512644](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211223220512644.png)



window对象，是bom的顶级对象

### window.onload

是窗口加载事件，即等待页面所有的元素加载完再加载js文件。

这个事件只有一个能起效。

不过可以通过addeventlistener，这样就可以没有限制的onload

```js
		window.addEventListener('load', function() {
            // 这里放js代码
        })

        document.addEventListener('DOMContentLoader',function(){
            // 这里放js代码
        })
```



DOMContentLoader会更快的加载，onload会等页面所有内容加载完毕才会执行js代码。

前者会不等图片flashcss就执行js代码，后者会等全部加载完毕才会去执行。

### 窗口大小变化事件

resize ，这是以前没有css3时常用的响应式布局的方式

```js
		window.addEventListener('resize', function() {
            // 窗口大小一变化 就会触发事件。
        })
```



### 定时器

setTimeout() ,setInterval()

```js
setTimeout(function(){
    alert("你好")
},3000)
```

setTimeout是一个定时器，第一个参数是函数，第二个参数指定延迟几秒，默认是毫秒单位。

页面中可能有很多定时器，我们会给他们分别起个名字。

```js
var t1=setTimeout(function() {
            alert("你好"); //三秒后执行该代码
        }, 3000)
```

### 回调函数

回调函数，就是回头调用函数，这个函数执行完了，回头执行回原来的代码，这就是回调。

### 停止计时器

clearTimeout

通过这个函数，可以清除在执行的计时器。

### 重复定时器

setInterval()，这个定时器会反复调用一个函数，第二个参数是间隔多少秒执行一次。

```js
var timmer = setInterval(function() {
            console.log('1');
        }, 1000)
```

### 倒计时实例

利用时间相减，分别为三个div中的值赋值，即可。

```js
var hour = document.querySelector('.hour');
        var min = document.querySelector('.min');
        var sec = document.querySelector('.sec');
        var inputTime = +new Date('2021-12-25 9:00:00'); //加上+号转换为number数据 方便计算
        countDown(); //先调用一次这个函数 防止刷新之后未执行

        setInterval(countDown, 1000);


        function countDown() {
            var nowTime = +new Date(); //转换为number 然后进行计算。
            var times = (inputTime - nowTime) / 1000; //获得剩余的秒数
            var h = parseInt(times / 60 / 60 % 24);
            h = h < 10 ? '0' + h : h;
            hour.innerHTML = h;
            var m = parseInt(times / 60 % 60);
            m = m < 10 ? '0' + m : m;
            min.innerHTML = m;
            var s = parseInt(times % 60);
            s = s < 10 ? '0' + s : s;
            sec.innerHTML = s;

        }
```

这里有一个计算剩余时间的函数。

### 禁止发送案例

![image-20211224125930041](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211224125930041.png)

```js
<script type="text/javascript">
        var btn = document.querySelector('button');
        var timmer = 10;
        btn.addEventListener('click', function() {
            btn.disabled = true;
            btn.innerHTML = '还剩下' + timmer + '秒';
            timmer--;
            var time = setInterval(function() {
                if (timmer == 0) {
                    btn.disabled = false;
                    btn.innerHTML = '发送';
                    timmer = 10;
                    clearInterval(time);
                } else {

                    btn.innerHTML = '还剩下' + timmer + '秒';
                    timmer--;
                }

            }, 1000)
        })
    </script>
```

思路：设置一个全局时间 十秒，然后按下之后触发定时器，时间到了之后清除定时器。



### this指向问题

在全局函数，window中，this一般指向的是window。

方法中，谁调用，this就指向谁。





### js事件循环机制，同步异步

js这门语言是单线程执行的，没有多线程和并发的概念，因此我们要引入异步的概念，否则单线程顺序执行会消耗很多时间。

回调函数就是典型的异步任务，像click事件，定时器，等。

异步任务会放入消息队列中，而同步任务在主程序执行栈中执行。

会先执行执行栈中的任务，异步任务会先放入队列中，不执行。

![image-20211224131507927](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211224131507927.png)





多个异步任务的时候，会有一个异步进程处理程序进行处理。

比如onclick事件，如果你不点击，异步进程处理程序就不会把任务放入队列当中。

又比如倒计时事件，异步进程处理程序会等三秒后才会放入消息队列中。



由于主线程不断的获取任务，执行任务，再获取任务，再执行任务。

这也叫**js的事件循环机制**。

### location

location,可以用于获取url。

location.href 获取连接

location.search 获取参数

这俩属性比较重要。

#### assign

记录浏览历史，记录后退功能，可以重定向页面。

#### replace 

不记录后退功能，没有历史

#### reload

刷新页面

### navagator

navagator包含了浏览器的agent，各种消息，和各种信息。

### history对象

后退和前进按钮 forward

back

go

## 网页特效导读

这一篇章开始制作一些简单的特效，



### offset偏移量

即元素在网页中的偏移量

offsetTop

offsetBottom

可以在js中动态的获取到元素的位置。这个定位标准以带有定位的父亲元素为准。

offsetWidth height，

返回包含了padding和border的元素的宽度和高度

offset和style的区别：offset的这个属性只能读写，不能赋值。



### 案例:获取鼠标在盒子内的坐标(必备)

![image-20211224142724007](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211224142724007.png)

通过页面xy-去offset的XY，就可以得到鼠标在盒子内的坐标了

```js
var box = document.querySelector('.box1');
        box.addEventListener('mousemove', function(e) {
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            this.innerHTML = 'x:' + x + 'y:' + y;
        })
```

### 案例:模态框

首先写好样式，然后我们可以确定一个关闭按钮，一个黑屏的类，弹出登录框就增加类。

```js
var box = document.querySelector('.display-1');
        var doctitle = document.querySelector('.doc-title');
        var closebtn = document.querySelector('#close');
        doctitle.addEventListener('click', function() {
            box.style.display = 'block';
            document.body.className = 'login-black';
        });
        closebtn.addEventListener('click', function() {
            box.style.display = 'none';
            document.body.className = '';
        })
```

拖拽的效果，我们要根据鼠标在盒子内的坐标，然后去改变盒子的坐标。

模态框的坐标，就是鼠标的坐标，减去鼠标在盒子内的坐标。

### 案例:图片放大（重要）

模仿淘宝物品详情页放大图片的做法

![image-20211224155812591](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211224155812591.png)

```js
// 让鼠标在黄色框框的中间
            var maskX = x - yellowbox.offsetWidth / 2;
            var maskY = y - yellowbox.offsetHeight / 2;
            // 判断是否出框 x轴
            if (maskX <= 0) {
                maskX = 0;
            } else if (maskX >= this.offsetWidth - yellowbox.offsetWidth) {
                maskX = this.offsetWidth - yellowbox.offsetWidth;
            }
            // 判断是否出框 Y轴
            if (maskY <= 0) {
                maskY = 0;
            } else if (maskY >= this.offsetHeight - yellowbox.offsetHeight) {
                maskY = this.offsetHeight - yellowbox.offsetHeight;
            }
```

核心代码，让鼠标在框中间



图片跟着一起走：

![image-20211224160736495](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211224160736495.png)

bigX=maskX/maskMax*bigMax;

bigY=maskY/maskMay*bigMay;

```js
box1.addEventListener('mousemove', function(e) {
            // 计算出鼠标在框内的坐标
            var x = e.pageX - this.offsetLeft;
            var y = e.pageY - this.offsetTop;
            // 让鼠标在黄色框框的中间
            var maskX = x - yellowbox.offsetWidth / 2;
            var maskY = y - yellowbox.offsetHeight / 2;
            // 判断是否出框 x轴
            var maskMax = this.offsetWidth - yellowbox.offsetWidth;
            var maskMay = this.offsetHeight - yellowbox.offsetHeight;
            if (maskX <= 0) {
                maskX = 0;
            } else if (maskX >= maskMax) {
                maskX = maskMax;
            }
            // 判断是否出框 Y轴
            if (maskY <= 0) {
                maskY = 0;
            } else if (maskY >= maskMay) {
                maskY = maskMay;
            }
            // 赋值给yellowbox
            yellowbox.style.left = maskX + 'px';
            yellowbox.style.top = maskY + 'px';
            // 计算大图片的最大移动距离
            var bigimg = document.querySelector('.bigImg');
            var bigMax = bigimg.offsetWidth - bigmask.offsetWidth;
            var bigMay = bigimg.offsetHeight - bigmask.offsetHeight;
            // 计算大图片移动距离
            var bigX = maskX / maskMax * bigMax;
            var bigY = maskY / maskMay * bigMay;
            // 赋值给bigimg
            bigimg.style.left = -bigX + 'px';
            bigimg.style.top = -bigY + 'px';
        })
```

核心就是换算以及其中的一个公式。

逻辑有点绕，但是理清楚应该就差不多。



### client内容区

不包含边框，这个会获得我们内容区的大小和上下。

TopLeft Width Height



### scroll

获取滚动条的相关属性，会获取内容的实际大小

超出宽度也可以获取。

scrolltop代表被卷去的上侧，也就是拉上去的那部分高度。

只要滚动滚动条就会触发scroll事件。

### 侧边栏

可以设置我们的scroll事件，当滚动到一定位置的时候，就显示回到顶部的按钮，

### 三大系列总结

offset 经常会用offsetTop Left获取元素位置

client 会用width height获取元素大学

scroll 会用top left获取滚动的距离

页面滚动的距离 通过window.pageYOffset来获得

### mouseover和mouseenter区别

mouseover在经过子盒子和父盒子时，都会触发，

而enter只会在经过自身盒子时触发。

## js动画

核心原理，通过定时器，不断的移动元素的位置。

**必须要加上定位**

### 简单动画封装函数和动画

```js
// 动画封装函数
        function animate(obj, target) {
            var timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    clearInterval(timer);
                }
                obj.style.left = obj.offsetLeft + 5 + 'px';
            }, 30)
        }


        var div = document.querySelector('.box1');
        animate(div, 500);
```



由于我们每个动画都要新增一个timer

会很占内存，我们可以利用js的动态语言的特性。

把var timer 换成obj.timer,

同时会有一个bug，如果是按钮触发动画 ，不停的按按钮就会不停的触发。因此我们的obj同一时间只能存在一个定时器。为此要在开启定时器之前，清除一下定时器。

最终优化的动画封装函数如下

```js
function animate(obj, target) {
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    clearInterval(timer);
                }
                obj.style.left = obj.offsetLeft + 5 + 'px';
            }, 30)
        }
```



### 缓动动画原理

核心算法(目标位置-当前位置)/10

```js
var length = (target - obj.offsetLeft) / 10;
```

通过这个公式，就能做出由快到慢的动画。



由于动画函数的使用频繁， 我们可以将最终版的函数，封装到单独的js文件中，以后就可以方便使用了。

```js
// 动画封装函数
        function animate(obj, target, callback) {
            // 进入的时候清除一下obj的定时器，避免多个动画同时运行
            clearInterval(obj.timer);
            obj.timer = setInterval(function() {
                if (obj.offsetLeft >= target) {
                    clearInterval(timer);
                    // 回调函数 可以写在定时器结束的时候进行调用
                    // 如果有传入函数参数，就会调用这个函数
                    if (callback) {
                        callback();
                    }
                }
                // 缓动步长公式
                var step = (target - obj.offsetLeft) / 10;

                // 如果是正值则向上取整 如果是负值则向下取整
                step = step > 0 ? Math.ceil(step) : Math.floor(step);

                // 修改obj的位置
                obj.style.left = obj.offsetLeft + step + 'px';
            }, 15)
        }
```





### 实例:轮播图

小圆圈动态生成的思路，即下面的小圆圈的个数要和图片个数相同。

```js
for (var i = 0; i < imgList.children.length; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
    li.setAttribute('index', i);
    // 生成小圆圈的同时 绑定点击事件
    li.addEventListener('click', function() {
        // 小圆圈要有排他的思想 当前激活了其余的要变灰
        for (var i = 0; i < ul.children.length; i++) {
            ul.children[i].className = '';

        }
        this.className = 'pointhover';
```



轮播图，就是让整个ul动起来，每次动图片的一个宽度。

可以给每个小圆点，增加index，可以快捷定位到不同的图片。

```js
// 要对imglist(ul)进行动画，移动整个background 让他左右移动
// 当我们点下小圆圈，用小圆圈的索引号*图片的宽度，让他移动这个距离就行了。
var target = bannerWidth * -this.getAttribute('index');
// 引用动画函数 让imglist动起来;
animate(imgList, target);
```

同时给右键添加响应事件，同样的，右键达到最后一张的时候需要做特殊处理：

克隆第一张图片到最右侧。(在html中就要做好克隆第一张的准备)

当我们再次点击的时候，就不做动画，让位置回到第一张的位置。

```js
// 点击右侧按钮，图片滚动一张。
    var num = 0;
    next.addEventListener('click', function() {
        if (num == imgList.children.length - 1) {
            imgList.style.left = '0px';
            num = 0;

        }
        num++;
        animate(imgList, -num * bannerWidth);
    })
```

当然 可以使用js来进行克隆。

使用一个深克隆，就可以做到，然后加入到imgList的最后面

```js
// 克隆第一张图片放到最后面。
    var first = imgList.children[0].cloneNode(true);
    imgList.appendChild(first);
```



自动播放：其实就相当于我们定时去点击这个右侧按钮。

因此我们可以去调用点击事件来设置定时器。

```js
// 自动播放
    var timer = setInterval(function() {
        next.click();
    }, 5000)
```

当然，但我们鼠标经过这个右侧按键的时候，就要去停止这个定时器。

```js
// 自动播放
    var timer = setInterval(function() {
            next.click();
        }, 3000)
    // 鼠标经过右侧按钮，停止定时器.
    next.addEventListener('mouseenter', function() {
        clearInterval(timer);
        timer = null;
    });
    // 离开 自动开始定时器
    next.addEventListener('mouseleave', function() {
        timer = setInterval(function() {
            next.click();
        }, 3000)
    })
```

### 节流阀

节流阀，目的就是让我们函数动画执行完毕后，再去执行下一个函数动画。

```js
// 节流阀
    var flag=true;
    next.addEventListener('click', function() {
        // 一开始顺利执行
        if(flag){
            // 执行的时候开启节流阀（false
            flag=false;
            if (num == imgList.children.length - 1) {
                imgList.style.left = '0px';
                num = 0;
            }
            num++;
            animate(imgList, -num * bannerWidth,function(){
                // 设置回调函数，动画播放完再关闭节流阀
                flag=true;
            });
            // 小圆圈的轮播
            circle++;
            // 如果circle=4 那就复原
            if (circle == ul.children.length) {
                circle = 0;
            }
            for (var i = 0; i < ul.children.length; i++) {
                ul.children[i].className = '';
            }
            ul.children[circle].className = 'pointhover';
        }

    })
```



### 返回顶部动画

通过之前的动画函数，把位置全部改为页面移动的距离（pageYOffset）

即可



## 移动端网页特效



### 触屏事件

touch 这个事件就是点击一下



touchstart 

touchmove

touchend



touchevent触摸事件对象，可以获取手指的坐标状态等 



targetTouches

可以获得触摸当前dom元素的所有手指列表



### 拖动元素

通过touchstart 

touchmove

touchend来知道手指在拖动

再通过targetTouches[0]获取手指的坐标，最终可以让元素跟着移动

### 移动端轮播图

由于进去就需要无缝，因此需要做一个适配，将第一张复制到最后一张，最后一张复制到最前面



### classList属性

能返回当前的所有class

也可以添加类名

add('class1')

会追加类名

remove('移除类名')

切换类名

toggle('类名') 原来没有 ，就加上，原来有，就去掉。





### 移动端click延时问题

移动端有一个300ms的延时问题，因为移动端是可以两只手指缩放页面，因此在点击后再300ms后我们才会响应事件。

第一个解决方案：禁用缩放

第二个方案：封装函数，并且使用回调函数调用事件。

还有一个方案，就是使用fastclick插件。

  

### Swiper插件 轮播图插件

首先去官网下载相关文件

首先引入相关的swiper.js和css样式

其次打开demo，把相关的部分放入想要放入的轮播图part里

```html
<link rel="stylesheet" href="../JavaScript/css/swiper.css">
    <script src="../JavaScript/js/swiper.js"></script>
```

引入样式和js文件



![image-20211225142634916](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225142634916.png)

然后复制所有内容

引入css样式

![image-20211225142738850](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225142738850.png)

吧swiper相关的样式复制到页面中



最后把demo后的js代码拿过来，

![image-20211225142827800](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225142827800.png)

然后这个效果就完成了，一键轮播图 属于是。

#### Swiper自定义参数

可在官网查阅



### 视频端插件 zy.media.js

这个插件可以统一我们每个浏览器不同的视频风格。



### Bootstrap

后续学习



### 本地存储

localstorage 

以及SessionStorage

local是永久的，Session在浏览器的一次会话中都起作用。

get，set，remove，clear

即是常用的键值对存储方法。





## JQuery

JQuery是一个常用的JavaScript库，里面封装了很多常用的函数，我们可以使用JQuery来进行一些前后端的交互以及其他事情。

### 入口函数

等待页面dom加载完毕 再去加载代码的写法：

```js
$(document).ready(function(){

})
$(function(){

})
```

这俩都是jQuery的入口函数，相当于DOMContentLoaded



### $的功能

其实是一个别名，代表JQuery

```js
$('div').hide();
//等价于
jQuery('div').hide();
```



### dom对象和jQuery对象

当我们使用jQuery去获取到一个对象，那这个对象就是jQuery对象，和我们通过document获取到的对象是不一样的，jQuery本质是利用$对对象进行了一个包装。

jQuery只能用jQuery的方法，而原生Dom对象可以用js原生的方法，但无法用jQuery的方法。

### JQuery对象和Dom对象的相互转换

把Dom对象转换为jQuery对象=》

```js
var d=document.querySelector('div');
            $(d);
```

直接用美刀符号括起来就会转换。





jQuery转换为原生对象

```js
$(d)[0].ariaValueMax
```

后面加个序列号就行。





### JQuery常用API

#### JQuery常用选择器

```js
$('.iou');//这样就是一个选择器
```

jQuery把js复杂的选择器全部封装起来，只剩下统一标准的方式。

选择到的都是一个伪数组的形式。

```js
$('ul li');
```

也可以这么选择全部子集



```js
$('ul li').css('background-color','pink');
```

设置css样式，要用css这个函数，后面加上属性和值。

#### 隐式迭代

会发现我们上面的所有li都添加了pink

这就是jQuery中的隐式迭代，他会在所有匹配的元素内部进行循环以及遍历。

#### 筛选选择器

![image-20211225155649622](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225155649622.png)

比如要选择第x个li

就用eq去选择即可

```js
$('ul li:eq(2)').css('background-color','pink');
```



#### 筛选方法

![image-20211225155934479](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225155934479.png)

```js
var a=$('ul li:eq(2)').css('background-color','pink');
            
console.log(a.parent());
```

parent返回的是最近一级的父元素

children 只返回自己的子级，后代是不会被选择的。

而find会选择上所有后代。

nextAll 当前元素之后的所有兄弟元素

siblings 选了除了自己之外的所有兄弟元素。

$(this),jQuery里用这种方式指代自身。



判断是否拥有特定的类 hasclass

#### jQuery的迭代以及兄弟元素选择

通过把自己颜色设置好，除自己之外的兄弟元素全部设置为空即可

```js
$(document).ready(function(){
    $('button').click(function(){
        $(this).css("background-color",'pink');
        $(this).siblings("button").css("background-color",'');
    })
});
```



#### jQuery.index()

这个方法我们能够快捷的获取当前元素的索引号



#### 链式编程

链式编程就是节约代码，不推荐，可读性很差。



### JQuery样式操作

第一种就是上面介绍过的css方法。

css里面可以传入对象，里面的书写可以不用加引号。

```js
$(this).css({
    width:200,
    height:320,
    backgroundColor:"red"
});
```

也就是我们可以这样来修改样式

注意里面的backgroundColor不用-连接

第二种就是添加类addClass()

```js
$(this).addClass('current');
```

还有toggle切换类，有则删，无则加

```js
$(this).toggleClass('current');
```

#### tab栏切换

```js
$('ul li').click(function(){
    var index=$(this).index();
    $(this).addClass('hover').siblings().removeClass('hover');

    $('.wrapper div').eq(index).show().siblings('div').hide();
})
```

通过jquery 我们大大的简化了之前的操作的繁琐。



### JQuery效果

用到最多的就是show hide 以及toggle

slidedown up toggle



#### show

show里面有三个参数 第一个是速度，第二个是缓入缓出，第三个是回调函数

```js
$('.wrapper div').eq(index).show("normal").siblings('div').hide();
```

第一个要输入 字符串的参数

或者以ms为单位的时间单位



#### slide

参数也和show的一模一样

区别是 这个是上下消失的动画



#### hover

jQuery里封装了该函数，能够做出css3中hover的效果

里面有两个参数，都是函数参数。

不过也可以只写一个函数，只写一个函数就代表：经过离开都触发这个函数



#### 动画节流

动画每次触发，他们都要进入到一个队列，上一次动画未执行完，就不会执行下一个动画，因此动画会一直执行

解决方法就是在执行动画之前时执行一次stop函数，停止上一次执行的动画。



#### fadeInOut

淡入淡出效果，淡的是透明度

fadeto（时间，透明度（0-1））

这个能够指定对应的透明度



#### animate

自定义动画

```js
$('button').click(function () {
    $('div').animate({
        top: 300,
        left: 400
    },500)
})
```

第一个参数是对象，决定了要改变的css样式属性，第二个参数是时间。



### 王者手风琴

思路，即更改li的宽度，让他带个fadein和out

```js
$("ul li").mouseenter(function(){
    $(this).stop().animate({
        width:224
    }).find(".small").stop().fadeOut().siblings(".big").stop().fadeIn();
    // 其余的就要小图片淡入 大图片淡出
    $(this).siblings('li').stop().animate({
        width:69
    }).find(".small").stop().fadeIn().siblings(".big").stop().fadeOut();
})
```



### JQuery属性

获取属性值要使用prop

```js
$(this).prop('innerHTML',"这是按钮");
```

用prop可以设置元素的固有属性，也可以获取固有属性。

两个值的话就是设置，一个值即获取。



如果要获取自定义的属性的话，就要使用attr

```js
$(this).attr('index',45);
```

![image-20211225194330299](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225194330299.png)

data属性：用这个值存放的属性，会存放在元素的内存当中，不会出现在dom中。



### jQuery获取元素值

.html();可以获取标签里整个的内容，连html标签都带上

.text();只把文字内容获取，不包括标签

val();等价value，可以获取表单的值





#### parents(祖先选择器)

可以找到所有上级元素 通过索引可以快速定位上级。





### 元素操作

隐式迭代是对每个元素都做一样的操作。如果想做不同的操作就要进行each来进行遍历。

```js
$('button').each(function(index,domEle){
    if(index%2==0){
        $(domEle).html('偶数');
    }
})
```

两个参数

第一个参数就是每个元素的索引号，第二个参数是获取到的原生dom对象。

要操作他要先转换为jQuery对象

![image-20211225210401623](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211225210401623.png)

#### $.each

两个参数，这个函数可以遍历任何对象

第一个参数是指定的元素对象，第二个参数是函数。

```js
var a=$('button');
$.each(a,function(key,value){

});
```



### 创建元素 删除 等

创建元素在JQuery里比较简单，直接用$('')包裹起来就可以创建一个元素。

我们添加可以使用append函数，直接添加到父元素的后面。

如果要添加到前面，要使用prepend

```js
var li=$('<li></li>');
$('ul').append(li);
```

同时 有after和before也可以添加

不过这两个元素添加的是兄弟元素，而append和prepend添加的是子元素

```js
$('ul').before(ul);
```



同样的 ，要删除子元素，孩子节点，可以用empty，会删除掉匹配元素里的所有的内容。



### 获取元素尺寸

直接使用width()可以获取元素本身的宽度，但不包含padding

如果要获取包含padding的，可以用innerWidth

如果要包含border的 ，就可以用outerWidth

如果要包含margin，可以用outerWidth(true)





### 获取元素位置

offset() position() 

offset(xxx,xxx)是相对于文档的，无论有没有定位，都是得到盒子距离文档的坐标。

position()可以获得带有定位的父级位置的坐标。



### 获取scroll

scrollTop()可以获得我们的页面到底滚动了多少。

要获得文档被拉下去多少，可以直接用

```js
$(document).scrollTop()
```

来获取

返回顶部动画

**注意：要让html和body来做动画，可以直接更改scrollTop来进行动画**

```js
var top=$('.banner').offset().top;
$(window).scroll(function(){
    var down=$(document).scrollTop();
    if(down>=top){
        $('.box1').fadeIn();
    }else{
        $('.box1').fadeOut();
    }
})
$('.box1').click(function(){
    $('body,html').stop().animate({
        scrollTop:0
    })
})
```



### JQuery事件





#### 事件注册

传统的注册事件 ，只能连在一起，但是我们可以通过on()这个方法，来绑定一个或者多个事件函数

通过on可以传入一个对象，放入多个事件并写函数

```js
$(function(){
    $('div').on({
        mouseenter:function(){

        },
        click:function(){

        }
    })
})
```

也有一种写法，第一个参数写上多个事件“字符串”，第二个参数则写上函数

```js
$('div').on("mouseenter mouseleave",function(){
	//todo
})
```



### 事件委派机制

可以通过绑定父元素然后实现事件委派，绑定虽然是父元素的身上，但是触发的确是里面的子元素。

```js
$('ul').on('click','li',function(){

})
```

on可以对动态创建的元素来绑定事件

当前没有的对象，后面可以绑定上去。



### off解绑事件

通过off('xxx');可以解绑特定的事件

可以通过这个函数来做一些一次性事件。



### 自动触发事件

click()

trigger()

triggerHandler()

第三种和其他两种的不同，就是不会触发默认行为（光标闪烁，等等等）。



### JQuery事件对象

和原生的事件对象是 差不多一致的。



### JQuery 其他方法

### 拷贝

```js
var obj;
$.extend(obj,$('button'));
```

这样可以吧button对象拷贝给obj

会覆盖obj原有的数据

还有一个参数即深浅拷贝，是可选参数 默认为false（浅拷贝）

深拷贝会把原来的对象里的复杂数据类型，原原本本的复制一份给obj，也就是不只是单单复制地址过去。

浅拷贝则只把地址复制给obj，也就是新对象里的复杂数据类型，会指向原对象的数据类型的地址。



### JQuery多库共存

有时候有其他库也用上了$符号，当我们想多种库共存的时候，该怎么解决？

统一吧$改成jQuery即可

var f=$.noConflict();

f('div‘)

```js
var f=$.noConflict();

f('div‘)
```

这个可以让用户自定义符号



### JQuery瀑布流

插件使用：

https://www.jq22.com/

http://www.htmleaf.com/

这两个网站可以很方便的找到需要的插件并且使用和下载



### 图片懒加载

当我们页面滑动到可视区域，即加载图片。什么时候需要，什么时候加载。

可以使用插件来进行实现。





### 全屏滚动插件

这个可以用于个人网站 。一屏一屏的滚动

https://www.dowebok.com/demo/2014/77/

中文文档

（待折腾）



### bootstrap插件

bootstrap也带了很多交互效果，可以导入插件并使用。





### JSON.stringify(obj)

这个函数可以将对象转换为json格式。



那怎么把获得的字符串转回obj呢？

### JSON.parse(String)

可以将json格式转换回对象





## 数据可视化

### Echarts的使用和导入

HighCharts和Echarts的区别，相当于office和wps的区别

还有D3.js 等库

接下来我们学习Echarts就好了。



### 使用

1、我们需要一个容器存放

2、需要一个option

3、最后myChart.setOption(option);

```js
var myChart = echarts.init(document.querySelector('.box1'));
var option ={}
myChart.setOption(option);
```



### 配置

配置都在option中修改

![image-20211226163604497](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211226163604497.png)

都在配置项手册当中存放。

我们可以在官网去实时查询。



#### grid

可以配置图表内的格子的区域

可以通过position来配置位置，和我们的容器区域是不一样的大小的。



### xAxis 和yAxis

这俩参数可以设置横竖坐标轴的刻度。

### series

系列 列表





### 适配方案

felxible.js 使用这个js插件，可以自动检测浏览器的宽度，修改html文字大小。

```js
<script src="http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js"></script>
```

引入改文件即可



同时 可以使用rem插件。

有一个插件可以很好的转换单位：cssrem插件



再加上flex布局，

即可完成我们的适配方案。





```css
.box1 {
    width: 7.5rem;
    height: 400px;
}
@media screen and(max-wdith:1024px) {
    html{
        font-size: 42.66px !important;
    }
}
@media screen and(max-wdith:1920px) {
    html{
        font-size: 80px !important;
    }
}
```

我们把屏幕分成了24等分，并把cssrem的root 的字体大小设置为了80px

通过媒体查询，把最小像素和最大宽度设置为了1024-1920



### 边框图片

有时候我们在做一些盒子需要同样的图框，就可以用到这个边框图片。



需要切图，以能够无缝生成边框

![image-20211226185238459](C:\Users\79053\AppData\Roaming\Typora\typora-user-images\image-20211226185238459.png)

repeat用round就可







## 总结

js初级入门就到此为止，

总共六天的学习。

学到了不少关于js的特性。

接下来就通过js高级的教程，来进一步加深js的基础，并且学会js的一些关于es6的新特性。

