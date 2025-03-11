"use strict";
// class coder{
//     name: string
//     music: string
//     age: number
//     lang: string
class Guitarist2 {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}.`;
    }
}
const Page = new Guitarist2('Jimmy', 'Guitar');
console.log(Page.play('trums'));
/////////////////////////////////////
class Peeps {
    static getCount() {
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
}
Peeps.count = 0;
const John = new Peeps('John');
const yash = new Peeps('steve');
const srinu = new Peeps('hy');
console.log(John.id); // 1
console.log(srinu.id); // 3
console.log(yash.id); // 2
console.log(Peeps.count); //3
/////////////////////////////////////
class Bands {
    constructor() {
        this.dataState = [];
    }
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
const MyBands = new Bands();
MyBands.data = ['yash', 'srinu'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'subbu', 'syam'];
console.log(MyBands.data);
