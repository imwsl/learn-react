// 高阶函数
// 第一类：接受其他函数为参数的函数 Array.map, Array.filter, Array.reduce
const invokeIf = (condition, fnTrue, fnFlase) => 
    condition ? fnTrue() : fnFlase()

const showWelcome = () => console.log("Welcome!!!")

const showUnauthorized = () => console.log("Unauthorized!!")

invokeIf(true, showWelcome, showUnauthorized)

// 柯理化(currying)

const userLogs = userName => message => console.log(`${userName} : ${message}`)

const log = userLogs("grandpa23")

log("Hello World!!")

// 其实上面就是生成函数的函数，这样写也可以
const logger = function(username) {

    return function(message) {
        console.log(`${username} : ${message}`)
    }
}

const log1 = logger("Normal")
log1("Hello World!!")

// 递归
const countdown = (value, fn) => {
    fn(value)
    value > 0 ? countdown(value - 1, fn) : value
}

countdown(10, value => console.log(value))

const delayDown = (seconds, fn, delay=1000) => {
    fn(seconds)
    return seconds > 0 ? setTimeout(() => delayDown(seconds - 1, fn, delay), delay) : seconds
}

delayDown(10, value=>console.log(value), 1000)

// compose
// 1、一组函数的组合
// 2、除了第一个函数接受参数以外，剩下的函数的参数是前一个函数的返回值
const toUpper = (str) => (str.toUpperCase())
const greeting = (str) => console.log(`Hi ${str}`)
const both = compose(
    toUpper,
    greeting
)

both('jack dorsey')