// es6-basics.js
//

// const
// * const变量: 一旦声明，不可修改
const name = "Joe"
// name = "Jack" // error
 
// let
// * if/else 并不会限定var变量的作用域
// 例子

var topic = "JavaScript"
if (topic) {
    var topic = "React"
    console.log("block => ", topic) // React
}

console.log("global => ", topic) // React , {} 并没有限定var变量的作用域

// * let关键字可以解决这个作用域的问题
if (topic) {
    let topic = "Block React"
    console.log("block => ", topic) // Block React
}
console.log("global => ", topic) // React

// 模板字符串

const first_name = "Tim"
const last_name = "Cook"
console.log(`${first_name}, ${last_name}`)

// 创建函数
// ES6 引入
// * 默认参数
// * 箭头函数

// 默认函数
function default_log(first_name = "Steve", last_name = "Jobs") {
    console.log(`${first_name} ${last_name}`)
}

default_log()
default_log("Allen")
default_log("Allen", "Pual")

// 箭头函数
const arrow_default_log = (first_name = "Mike", last_name = "Page") => console.log(`${first_name} ${last_name}`)
arrow_default_log()
arrow_default_log('George')
arrow_default_log('George', 'Pike')

// * 箭头函数返回对象

const make_dog = (name, age) => ({
    name: name,
    age: age
})

const dog = make_dog("Jack", 18)
console.log(`name: ${dog.name} age: ${dog.age}`)

// * 箭头函数与作用域
// ** 常规函数不限定this作用域，
/*
// 错误 this的作用域
const tahoe = {
    mountains: ['Freel', 'Rose', 'Rubicon', 'Silver'],
    print: function(){
        setTimeout(function(){
            console.log(this.mountains.join('-'))
        }, 2000)
    }
}
tahoe.print()
*/

const tahoe1 = {
    mountains: ['Freel', 'Rose', 'Rubicon', 'Silver'],
    print: function(){
        let that = this  // 常规解决办法
        setTimeout(function(){
            console.log(that.mountains.join('-'))
        }, 1000)
    }
}
tahoe1.print()

const tahoe2 = {
    mountains: ['Freel', 'Rose', 'Rubicon', 'Silver'],
    print: function(){ // ES6的解决办法，箭头函数保全了this的作用域
                        // * 如果把print改成箭头函数，则this代表的是窗口
        setTimeout(()=>{console.log(this.mountains.join('**'))}, 1000)
    }
}
tahoe2.print()

// 对象和数组
const animal = {
    a_name: 'Tim',
    a_age: 199
}

const {a_name, a_age} = animal
console.log(`${a_name} ${a_age}`)

//a_name = "George"
//a_age = 188
//console.log(`${animal.a_name} ${animal.a_age}`)
