// JavaScript函数式编程，需要重点用到Array.fliter, Array.map Array.reduce
//

const list = ['New York', 'Washington & Liberty', 'Wakefield']

const w_list = list.filter(name => name[0] === 'W')

console.log(w_list.join(', '))

const highschools = list.map(school => `${school} High School`)

console.log(highschools)

const names = list.map(school => ({name : school}))

console.log(names)

const editnames = (oldname, newname, arr) => {
    return arr.map(item => {
        if (item.name === oldname) {
            return {
                name: newname
            }
        } else {
            return item
        }
    })
}

const newnames = editnames('Wakefield', 'Standford', names)
console.log(newnames)

const ages = [22, 13, 78, 69, 34]

// find max age
const max = ages.reduce((max, age) => (age > max ? age : max), 0)
console.log(max)

// Array.reduceRight 从数组末尾开始规约
const max1 = ages.reduceRight((max, age) => (age > max ? age : max), 0)
console.log(max1)

const colors = [
    {
        id: 'xekare',
        title: 'rad red',
        rating: 3
    },
    {
        id: 'jbwsof',
        title: 'big blue',
        rating: 3
    }
]

// 变成一个散列
const hash_colors = colors.reduce((h, {id, title, rating}) => {
    h[id]= {title, rating}
    return h
}, {})

console.log(hash_colors)