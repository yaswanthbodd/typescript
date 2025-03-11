"use strict";
// chapter - 8 Generics
const echo = (arg) => arg;
const isObj = (arg) => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg != null);
};
console.log(isObj(true)); // false
console.log(isObj('yash')); // false
console.log(isObj([1, 2, 3])); //  false
console.log(isObj({ name: 'yash' })); // true
console.log(isObj(null)); // false
/////////////////////////////////
const isTrue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { arg, is: false };
    }
    return { arg, is: !!arg };
};
console.log(isTrue(false));
console.log(isTrue(0));
console.log(isTrue(true));
console.log(isTrue(1));
console.log(isTrue('yash'));
console.log(isTrue(''));
console.log(isTrue(null));
console.log(isTrue(undefined));
console.log(isTrue({}));
console.log(isTrue({ name: 'yash' }));
console.log(isTrue([]));
console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));
console.log(isTrue(-0));
const checkBoolValue = (arg) => {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: !!arg };
};
const processUser = (user) => {
    //process the user with logic her
    return user;
};
console.log(processUser({ id: 1, name: 'yash', marks: 20 })); // { id: 1, name : 'yash'}
// console.log(processUser({name:'d'}))
// Generics in class
class StateObject {
    constructor(value) {
        this.data = value;
    }
    get state() {
        return this.data;
    }
    set state(value) {
        this.data = value;
    }
}
const store = new StateObject("yash");
console.log(store.state);
store.state = 'deeksha';
// store.state = 2
const myState = new StateObject([15]);
myState.state = (['yash', 21, true]);
console.log(myState.state); // ['yash',21,true]
