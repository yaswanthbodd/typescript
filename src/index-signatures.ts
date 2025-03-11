// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number,
// }

//index-signatures interface
interface TransactionObj {
    readonly [index: string] : number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -10,
    Job: 50
}

console.log(todaysTransactions.Pizza)
console.log(todaysTransactions['Pizza'])

let prop: string = 'Pizza'
console.log(todaysTransactions[prop])

const todaysNet = (transactions: TransactionObj) : number =>{
    let total=0
    for(const transaction in transactions){
        total+=transactions[transaction]
    }
    return total
}

console.log(todaysNet(todaysTransactions))
console.log(todaysTransactions['dave']) // undefined

///////////////////////////////////////////////////////////
interface Student{
    // [key: string]:string | number | number[] | undefined
    name: string,
    GPA: number,
    classes?:number[]
}

const student: Student ={
    name: "yaswanth",
    GPA: 8.7,
    classes:[100,200]
}

// console.log(student.test)

// for(const key in student){
//     console.log(`${key}: ${student[key]}`)
// }

for(const key in student){
    console.log(`${key}: ${student[key as keyof Student]}`)
}

//If you doesn't know the Student type
Object.keys(student).map(key=>{
    console.log(student[key as keyof typeof student])
})

const logStudentKey = (student: Student, key: keyof Student): void =>{
    console.log(`Student ${key}: ${student[key]}`)
}

logStudentKey(student,'GPA')

//////////////////////////////////////////////
// interface Incomes{
//     [key: string] : number
// }

type Streams = 'salary' | 'bonus' | 'sidehustle'

type Incomes = Record<Streams,number | string>
const monthlyIncomes: Incomes = {
    salary : 500,
    bonus : 100,
    sidehustle : 250
}

for(const revenue in monthlyIncomes){
    console.log(monthlyIncomes[revenue as keyof Incomes])
}