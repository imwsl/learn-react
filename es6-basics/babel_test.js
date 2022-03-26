// babel_test.js
//

// 并非所有的浏览器支持ES6 可以使用babel将ES6的语法编译成适合浏览器的语法
// * babel还不是很熟
const add = (x=5, y=6) => (x + y)
console.log(add()) // 11