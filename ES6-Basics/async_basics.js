
// console.log("Hello World!!")

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(res => res.json())
// .then(json => json)
// .then(console.log)
// .catch(console.error)

// console.log("\n------------------------------------------------\n")

// fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then(function(res) {
//     console.log(res.json())
// })
// .catch(console.error)

// const getTodos = async () => {
//     try {
//         let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         const resp = await res.json()
//         return resp
//     } catch (error) {
//         console.error(error)
//     }
// }

// console.log(getTodos())

let hello = async () => {return "Hello World!!"}

hello().then((value) => {console.log(value)})

const getTodos = async() => {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    return await response.json()
}

getTodos()
.then((value) => console.log(value))
.catch(console.error)

const getusers = async() => {
    let res = await fetch("https://api.randomuser.me/?nat=US&results=1")
    let {results} = res.json()
    console.log(results)
}

getusers()