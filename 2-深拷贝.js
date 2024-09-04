let obj = {a: 1, b:{c: 1}}
let obj2 = [1, {b: 1}, {c: 1}]

function deepClone(objOrArr) {
    let res = Array.isArray(objOrArr) ? [] : {}
    for (let key in objOrArr){
        if(typeof objOrArr[key] !== 'object' || objOrArr[key] === null){
            res[key] = objOrArr[key]
        } else {
            res[key] = deepClone(objOrArr[key])
        }
    }
    return res
}

let obj3 = deepClone(obj)
obj3.b = 2

console.log(deepClone(obj3))
console.log(obj)