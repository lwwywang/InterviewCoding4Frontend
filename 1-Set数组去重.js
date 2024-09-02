//数组去重

const arr = [1, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9, 9, 10, 10];
function unique(arr) {
  return [...new Set(arr)];
}

console.log(unique(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//不用set去重

function uniqueFilter(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(uniqueFilter(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//原数组上去重

function uniqueInPlace(arr) {
    let set = new Set();
    for (let i = 0; i < arr.length; i++){
        if(!set.has(arr[i])){
            set.add(arr[i]);
        } else {
            //array.splice(start, deleteCount, item1, item2, ..., itemN)
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

console.log(uniqueInPlace(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//包含的对象属性字段去重
let list = [{id: 1, value: 'react'}, {id: 2, value: 'react'},  {id: 3, value: 'vue'}]
function removeDuplicate(list) {
    //缓存之前出现的信息
    let set = new Set()
    //将不重复的放到新数组中
    return list.filter(v => !set.has(v.value)&&set.add(v.value))
}
console.log(removeDuplicate(list) )