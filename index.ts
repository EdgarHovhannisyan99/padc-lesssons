const object = {
    "data": 10,
    "res": 20,
    "data1": 30,
    "res1": 50,
}

interface IObjType {
    [key: string] : number
}


class PreviousValues  {
    private readonly obj: IObjType = {}

    constructor(obj: IObjType) {
        this.obj = obj
    }

    [Symbol.iterator] = () => {
        let done: boolean = false
        let index: number = 0
        let size: Array<string> = Object.keys(this.obj)
        let key: string = ''
        let previous: number = 0
        return {
            next: () => {
                if(index === size.length){
                    done = true
                }
                index++
                if(size[index - 1]){
                   key =  size[index - 1]
                   previous = this.obj[size[index]]
                }
                return {
                    value: this.obj[key] + previous,
                    done
                }
            }
        }
    }
}


const testObj = new PreviousValues(object)

for(let i of testObj){
    console.log(i)
}













//
// interface ICustomArray<T> {
//     [key: string]: T;
// }
//
//
// class CustomArray<T> {
//     private _state: ICustomArray<T> = {};
//     public size: number = 0;
//
//     constructor(arr: Array<T> = []) {
//         if (arr?.length > 0) {
//             for (let i of arr) {
//                 this.set(i)
//             }
//         }
//     }
//
//     // @ts-ignore
//     set(item: T): ICustomArray<T> {
//         if(this._state[JSON.stringify(item)]){
//             return this._state
//         }else {
//             this._state[JSON.stringify(item)] = item;
//             this.size++;
//         }
//     }
//
//     [Symbol.iterator] = () => {
//         let done = false;
//         let i: number = 0;
//         const keys = Object.keys(this._state);
//         return {
//             next: () => {
//                 const key = keys[i];
//                 if (i === keys.length) {
//                     this.size = keys.length
//                     done = true;
//                 }
//                 i++;
//                 console.log(key)
//                 return {
//                     value: this._state[key],
//                     done
//                 }
//             }
//         }
//     }
// }
//
//
// const test = new CustomArray<number>([22, 2, 2, 1]);
// test.set(6)
// console.log(test)
//
