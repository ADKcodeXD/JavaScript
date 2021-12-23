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

















