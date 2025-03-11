"use strict";
// interface TransactionObj {
//     Pizza: number,
//     Books: number,
//     Job: number,
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -10,
    Job: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
console.log(todaysTransactions[prop]);
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
console.log(todaysTransactions['dave']); // undefined
const student = {
    name: "yaswanth",
    GPA: 8.7,
    classes: [100, 200]
};
// console.log(student.test)
// for(const key in student){
//     console.log(`${key}: ${student[key]}`)
// }
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
//If you doesn't know the Student type
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'GPA');
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehustle: 250
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
