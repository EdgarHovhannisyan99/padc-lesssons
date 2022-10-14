// ------ Custom Find ------
// const testArray = [1, 2, 3, 4, 8, 25]
//
// function customFind(arr, findFunc) {
//     if(Array.isArray(arr)){
//         for(let i = 0; i < arr.length; i++){
//             if(findFunc(arr[i])){
//                 return arr[i]
//             }
//         }
//     }else {
//         return 'First argument must be array and the second function'
//     }
// }
//
// function testFunc (value) {
//     return value > 4
// }
//
// console.log(customFind(testArray, testFunc))


// ----- Custom find index ------

// const testArray = [1, 2, 3, 4, 8, 25]
// function customFindIndex (arr, func) {
//     if(!Array.isArray(arr) || typeof func !== 'function'){
//         return 'First argument must be array and the second function'
//     }
//
//     for(let i = 0; i < arr.length; i++){
//         if(func(arr[i])){
//             return i
//         }
//     }
//     return -1
// }
//
// function finder(value) {
//     return value === 4
// }
//
// console.log(customFindIndex(testArray, finder))

// ----- Custom reverse ------

// const testArray = [1, 2, 3, 4, 8, 25]
//
// function customReverse(arr) {
//     if(!Array.isArray(arr)){
//         return 'First argument must be array'
//     }
//     const res = []
//
//     for (let i = arr.length - 1; i >= 0; i--) {
//         res.push(arr[i])
//     }
//     return res
// }
//
// console.log(customReverse(testArray))


// ----- Custom Join -----

/*const testArray = [1, 2, 3, 4, 8, 25]

function customJoin(arr, separator = ',') {
    if (!Array.isArray(arr)) {
        return 'First argument must be array'
    }
    let res = ''
    for (let i = 0; i < arr.length; i++) {
        if(i === 0) {
            res = res + arr[i]
        }else {
            res = res + separator + arr[i]
        }
    }
    return res
}

console.log(customJoin(testArray, ''))*/


// ------ Custom Some -----
// const testArray = [1, 2, 3, 4, 8, 25]
//
// function customSome(arr, func) {
//     if(!Array.isArray(arr) || typeof func !== 'function'){
//         return 'First argument must be array and the second function'
//     }
//     for(let i = 0; i < arr.length; i++) {
//         if(func(arr[i])){
//             return true
//         }
//     }
//     return false
// }
//
// function finder(value) {
//     return value === 9
// }
//
// console.log(customSome(testArray, finder))


// ----- Custom index of string -------

// const testStr = 'test string'
//
// function customStr(str, index) {
//     if(typeof str !== 'string'){
//         return 'First argument must be array'
//     }
//     if(index && index.length === 1) {
//         for (let i in str) {
//             if(str[i] === index){
//                 return i
//             }
//         }
//     }
//
//     const arr = []
//     let newStr = ''
//     for(let i = 0, n = 0; i < str.length * index.length; i++, n++) {
//         newStr = newStr + str[n]
//         if(newStr.length === index.length) {
//             arr.push(newStr)
//             n = n - index.length + 1
//             newStr = ''
//         }
//     }
//
//     if(arr.length) {
//         for(let i = 0; i < arr.length; i++){
//             if(arr[i] === index){
//                 return  + i
//             }
//         }
//     }
//
//     return -1
// }
//
// console.log(customStr(testStr, ''))


// -------- Custom split@ chexav-------

// const testStr = 'test string'
//
// function customSplit(str, separator = ',') {
//     if(typeof str !== 'string'){
//         return 'First argument must be array'
//     }
//     const arr = []
//     if(!separator) {
//         arr.push(str)
//         return  arr
//     }
//
//     let newStr = ''
//     for(let i = 0, n = 0; i < str.length * separator.length; i++, n++) {
//         newStr = str[i]
//         if(newStr.length === separator.length) {
//             console.log(newStr)
//         }
//     }
//
//
// }
//
// console.log(customSplit(testStr, ' '))





