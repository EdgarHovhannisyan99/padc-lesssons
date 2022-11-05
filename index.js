"use strict";
var _a;
class CustomArray {
    constructor(arr = []) {
        this._state = {};
        this.size = 0;
        this[_a] = () => {
            let done = false;
            let i = 0;
            const keys = Object.keys(this._state);
            return {
                next: () => {
                    const key = keys[i];
                    if (i === keys.length) {
                        this.size = keys.length;
                        done = true;
                    }
                    i++;
                    console.log(key);
                    return {
                        value: this._state[key],
                        done
                    };
                }
            };
        };
        if ((arr === null || arr === void 0 ? void 0 : arr.length) > 0) {
            for (let i of arr) {
                this.set(i);
            }
        }
    }
    // @ts-ignore
    set(item) {
        if (this._state[JSON.stringify(item)]) {
            return this._state;
        }
        else {
            this._state[JSON.stringify(item)] = item;
            this.size++;
        }
    }
}
_a = Symbol.iterator;
const test = new CustomArray([22, 2, 2, 1]);
test.set(6);
console.log(test[Symbol.iterator]().next());
