# JS 常用函数和简单算法

刚才无聊看Github Trends，发现了这个神奇的项目freecodecamp，号称可以免费和跟很多人组团学编程，我看了下基本都是前端内容，包括JS/HTML/CSS这些基础内容，深入学习的话还有React, D3等等，后端现在只涉及到了 Node，学习方式是交互式的在线编程，提倡 Read-Search-Ask，比自己学好处体现在可以问别人，而且还有机会参见线下活动，感觉很赞。So, 今天开个坑，把自己的学习笔记放在这里。第一篇就用简单算法开头, 后面不定期更.

反转字符串

如：hello -> olleh

function reverseString(str) {
  str = str.split('').reverse().join('');
  return str;
}

reverseString("hello");
注意两个''代表空字符串，不能丢

计算阶乘

如：5! = 1 * 2 * 3 * 4 * 5 = 120

function factorialize(num) {
    if(num <= 1) {
        return 1;
    } else {
        return num * factorialize(num - 1);
    }
}

factorialize(5);
这样写比较消耗资源，还可以使用尾递归进行优化，以后有空填上。

检查是否为回文

如：'eye' -> true, 'Zz' -> true, 'race car' -> true, 'never odd or even' -> true, 0_0 (: /-\ :) 0-0 -> true, gua~ -> false

function palindrome(str) {
  // 统一为小写，除去空格、逗号、句号
  str = str.toLowerCase().replace(/[ |\,|\.|\_|\-|\(|\)]/g,'');
  // 反转
  var rts = str.split('').reverse().join('');

  return str==rts?true:false;
}

palindrome("never odd or even");
这里主要是一个正则表达式，需要把空格，逗号，句号等标点去掉。

找出一段文字中的最长单词，返回该单词长度

如：'What is the average airspeed velocity of an unladen swallow' -> 8

function findLongestWord(str) {
  return str
    .split(' ')
    .sort(function(a,b){return a.length-b.length;})
    .pop().length;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow");
参考了StackOverflow上一位答主的方法

sort()默认会将数字转换为字符串进行比较，如果需要定制排序方法，可以给 sort() 自定义一个比较函数，这个函数返回值为负数，顺序不变，反之交换位置。《JS 语言精粹》讲到这里时有更多例子，包括怎样排序包含数字、文字等的复杂列表 etc.

pop()返回Array()最右端的元素.

把一个字符串转换成标题（单词首字母大写）

如：'Don't you LOVE me' -> 'Don't You Love Me'

function titleCase(str) {
    return str
      .toLowerCase()
      .replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}

titleCase("I'm a little tea pot");
中文里基本上用不到，有兴趣可以看下：用 charAt(0) 替换 or 用正则表达式替换




续上篇，基本都是数组和字符串的操作x8题

有二维数组，返回每个子数组中的最大数字

如 ：[[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]] -> [9, 35, 97, 1000000]

function largestOfFour(arr) {
  var newArr=[];
  for(var i=0;i<=3;i++){
    newArr[i]=arr[i]
      .sort(function(a,b){return a-b;}) // 数字升序排序
      .pop();
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
sort()在这里有个小坑，在进行数字比较的时候，会提前将数字转化为字符串，然后进行比较，所以会出现1001<857的情况。我们需要做的跟上一篇中找最长单词类似，就是给sort()指定比较方法

给定一个语句和一个单词，检查语句末尾是否为该单词

如：
("What's your name","name") -> ture;("I'm fine","bad" -> false)

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var len = target.length;
  return str.substr(-len) == target?true:false;
}

confirmEnding("Bastian", "n");
substr()方法返回字符串中从指定位置开始到指定长度的子字符串。

语法：

str.substr(start[, length])

start 为负数时，从右边第start个字符位置开始，即从str.length+start开始

重复一个字符串n次

如：('abc',3) -> 'abcabcabc

function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr='';
    for(var i=0;i<num;i++){
    newStr += str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
可能有更好的方法，欢迎大家可以邮件给我。

给定一段文字，从头截取一定长度的字符串

要求：文字长度小于3，或者小于需要截取的字符长度时，略去...；否则加上省略号，并且省略号本身也计算进截取字符串的长度中。

这题比较奇葩，额外要求多，有兴趣请看原题: Truncate a string

如：("Peter Piper picked a peck of pickled peppers", 14) -> Peter Piper...;

function truncateString(str, num) {
  // Clear out that junk in your trunk
  var len = str.length;
  var newStr = '';
  if(num<=3){
    if(len<=num){
      return str;
    }else{
      return str.slice(0,num) + '...';
    }
  }else{
    if(len<=num){
      return str;
    }else{
      return str.slice(0,num-3) + '...';
    }
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
slice()方法复制string的一部分构成新的字符串。

语法：

slice(start, end), end 在这题里为 num 或者 num - 3

将一维数组转换为二维数组，每个子数组的长度为给定长度

最后一个子数组长度不确定

如：(["a", "b", "c", "d"], 2) -> [["a", "b"], ["c", "d"]]

function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArr = [];
  for(var i=0;i<arr.length;i+=size){
    var subArr = arr.slice(i,i+size);
    newArr.push(subArr);
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
这题比较简单，用到数组的两个方法：

Array.push()

Array.slice()

给定数组，删除前n位，并返回删除后的新数组

如：([1, 2, 3], 2) -> [3]

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(arr,howMany);
  return arr;
}

slasher([1, 2, 3], 2);
这题也很简单，用到了Array的splice()方法：

Array.splice()方法从Array中移除一个或多个元素，并用新的item替换它们.

语法：

array.splice(start, deleteCount[, item1[, item2[, …]]])

给定一段文字str1和一个短语str2，检查str2是否为str1的子集

忽略大小写和字符顺序

如：["hello", "hey"] -> false;["Alien", "line"] -> true

function mutation(arr) {
  var m = arr[0].toLowerCase();
  var n = arr[1].toLowerCase();
  for(var i=0;i<n.length;i++){
    if(m.indexOf(n[i])==-1){return false;}
  }
  return true;
}

mutation(["hello", "Hello"]);
第一次使用indexOf()方法.

String.indexOf()方法返回指定值在字符串对象中首次出现的位置。从 fromIndex 位置开始查找，如果不存在，则返回 -1。

语法：

str.indexOf(searchValue[, fromIndex])

过滤数组中可以表示false的值

可判断为false的值有：false, null, 0, “”, undefined, and NaN

如：[7, "ate", "", false, 9] -> [7, 9]; [1, null, NaN, 2, undefined] -> [1, 2].

function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  function isFalsy(el){
    return Boolean(el) !== false;
  }

  return arr.filter(isFalsy);
}

bouncer([7, "ate", "", false, 9]);
用到一个Array.filter()方法

Array.filter()方法使用一个指定的过滤函数，检测Array中的所有元素，并返回一个全部符合过滤条件的新数组。

























