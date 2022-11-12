// ----  PROMISE TEST -----

// --  Test 1 --
// function testPromise() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             resolve(8)
//         }, 2000)
//     })
// }
// const res = testPromise()
//
// // @ts-ignore
// res.then(function (result:number):number {
//    return  result + 5
// }).then(function (result) {
//     // @ts-ignore
//     console.log(result + 5)
// })



// -- Test 2 ---

// function randomPromise() {
//     return new Promise(function (resolve, reject){
//         setTimeout(() => {
//             const num = Math.floor(Math.random() * 10)
//             const res = num % 2
//             if (res) {
//                 resolve('Success: the number is even')
//             }else {
//                 reject('Error: the number is odd')
//             }
//             resolve(res)
//         }, 1500)
//     })
// }

// randomPromise().then(function (result) {
//     console.log(result)
// }).catch(function (result) {
//     console.log(result)
// })



// -- Test 3 --

// const testPromise1 = new Promise(resolve => resolve('first promise'))
// const testPromise2 = new Promise(resolve => resolve('second promise'))
// const testPromise3 = new Promise(resolve => resolve('third promise'))
// // const testPromise3 = new Promise((resolve, reject) => reject('third error'))
//
// Promise.all([testPromise1, testPromise2, testPromise3]).then(function (result) {
//     console.log(result)
// }).catch(function (result) {
//     console.log(result)
// })



// ----  CLOSURE TEST -----

// let a = 5
//
// function func(){
//     let b = 10
//     return function d() {
//         let c = 3
//         console.log(a + b + c)
//     }
// }
//
// const res = func()
// a = 20
// res()

