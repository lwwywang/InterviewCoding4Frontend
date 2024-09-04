//res = {res, a: 1, b:{c: 1}}
//即自己能够复制自己，而不是res中有obj
//map可以有对象，也可以有‘a’这种，可以是任何类型
//但weakmap只能有对象，不能有‘a’这种

let obj = { a: 1, b: { c: 1 } };
obj.e = obj; // 添加自身引用

function deepClone(objOrArr, map = new WeakMap()) {
    // 如果是基本类型，直接返回
    if (typeof objOrArr !== 'object' || objOrArr === null) {
        return objOrArr;
    }

    // 如果已经拷贝过，直接返回存储的副本
    if (map.has(objOrArr)) {
        return map.get(objOrArr);
    }

    // 创建副本
    let res = Array.isArray(objOrArr) ? [] : {};
    map.set(objOrArr, res);

    // 递归拷贝属性
    for (let key in objOrArr) {
        if (objOrArr.hasOwnProperty(key)) {
            res[key] = deepClone(objOrArr[key], map);
        }
    }

    return res;
}

let res = deepClone(obj);
console.log(res);
console.log(res.e === res); // 输出 true，验证循环引用