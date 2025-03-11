// chapter - 8 Generics
const echo = <T>(arg: T):T => arg
const isObj=<T>(arg: T): boolean =>{
    return (typeof arg === 'object' && !Array.isArray(arg) && arg!=null)
}

console.log(isObj(true)) // false
console.log(isObj('yash')) // false
console.log(isObj([1,2,3])) //  false
console.log(isObj({name:'yash'})) // true
console.log(isObj(null)) // false

/////////////////////////////////
const isTrue = <T>(arg: T): {arg: T, is: boolean} => {
    if(Array.isArray(arg) && !arg.length){
        return {arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {arg, is: false}
    }
    return {arg, is: !!arg}
}

console.log(isTrue(false))
console.log(isTrue(0))
console.log(isTrue(true))
console.log(isTrue(1))
console.log(isTrue('yash'))
console.log(isTrue(''))
console.log(isTrue(null))
console.log(isTrue(undefined))
console.log(isTrue({}))
console.log(isTrue({name : 'yash'}))
console.log(isTrue([]))
console.log(isTrue([1,2,3]))
console.log(isTrue(NaN))
console.log(isTrue(-0))

interface BoolCheck<T> {
    value: T,
    is: boolean
}

const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    if(Array.isArray(arg) && !arg.length){
        return {value: arg, is:false}
    }
    if(isObj(arg) && !Object.keys(arg as keyof T).length){
        return {value: arg, is: false}
    }
    return {value: arg, is: !!arg}
}


//////////////////////////////////////////
interface HasID {
    id: number
}

const processUser = <T extends HasID>(user: T): T =>{
    //process the user with logic her
    return user
}

console.log(processUser({id: 1, name:'yash', marks: 20})) // { id: 1, name : 'yash'}
// console.log(processUser({name:'d'}))


// Generics in class
class StateObject<T> {
    private data: T
    constructor(value: T){
        this.data = value
    }
    get state(): T{
        return this.data
    }
    set state(value: T){
        this.data = value
    }
}

const store=new StateObject("yash")
console.log(store.state)
store.state='deeksha'
// store.state = 2

const myState = new StateObject<(string | number | boolean)[]>([15])
myState.state = (['yash',21,true])
console.log(myState.state) // ['yash',21,true]

