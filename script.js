const obj1 = {
    name: 'Joe',
    friends: {
        friend1: 'Andre',
        friend2: 'Vaspur',
    },
    age: '60',
}

const obj2 = {
    name: 'Joe',
    age: '60',
    friends: {
        friend1: 'Andre',
        friend2: 'Vaspur',
    }
}

function checkObjects(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
        return false
    }

    for (let i = 0; i < keys1.length; i++) {
        let flag = false
        for (let j = 0; j < keys2.length; j++) {
            if (keys1[i] === keys2[j]) {
                if (obj1[keys1[i]] === obj2[keys1[i]]) {
                    flag = true
                }
            }
            if (typeof obj1[keys1[j]] === 'object' && typeof obj2[keys1[j]] === 'object') {
                return checkObjects(obj1[keys1[j]], obj2[keys1[j]])
            }
        }
        if (!flag) {
            return false
        }
    }

    return true
}

console.log(checkObjects(obj1, obj2))
