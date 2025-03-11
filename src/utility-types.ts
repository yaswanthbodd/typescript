// Utility - types

//partial
interface Assignment {
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean,
}

const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment =>{
    return { ...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId : '21761A0577',
    title: 'Final Project',
    grade : 10
}

console.log(updateAssignment(assign1,{ grade: 95}))
const assignGraded: Assignment = updateAssignment(assign1,{grade:95})

//Required and readOnly

const recordAssignment = (assign: Required<Assignment>): Assignment => {
    //send to database, etc.
    return assign
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded,
    verified: true 
}

recordAssignment({...assignGraded, verified: true})

//Record
const hexColorMap: Record<string,string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

type Students = 'yash' | 'srinu'
type LetterGrades = "A" | "B" | "C" | "D" | "U"

const finalGrades: Record<Students,LetterGrades> = {
    yash: 'B',
    srinu: 'U'
}

interface Grades{
    assign1: number,
    assign2: number,
}

const GradeData: Record<Students, Grades> = {
    yash: {assign1: 85,assign2: 96},
    srinu: {assign1: 76, assign2: 15}
}

//Pick and Omit

type AssigResult = Pick<Assignment, "studentId" | "grade" >

const score: AssigResult = {
    studentId: "21761A0591",
    grade: 91,
}

type AssignPreview = Omit<Assignment, "grade" | "verified"> 
const preview: AssignPreview = {
    studentId: "21761A0578",
    title: "final project"
    // grade: 21 - error
}

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">
type highGrades = Extract<LetterGrades,"A" | "B">

//Nonnullable
type AllPossibleGrades = 'Yash' | 'Sai' | null | undefined
type NamesOnly = NonNullable<AllPossibleGrades>

//ReturnType
const createNewAssign = (title: string, points: number) =>{
    return {title, points}
}

type NewAssign= ReturnType<typeof createNewAssign>
const tsAssign: NewAssign = createNewAssign("Utility",100)
console.log(tsAssign)

//Parameters
type AssignParams = Parameters<typeof createNewAssign>
const assignArgs: AssignParams = ['Generics',100]
console.log(assignArgs)

const tsAssign2: NewAssign = createNewAssign(...assignArgs)
console.log(tsAssign2)

// Awaited - helps us with the ReturnType of a Promise
interface User {
    id: number,
    name: string,
    username: string,
    email: string
}

const fetchUsers = async (): Promise<User[]> =>{
    const data = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then(res=>{
        return res.json()
    }).catch(err=>{
        if(err instanceof Error)
            console.log(err.message)
    })
    return data
}

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>
fetchUsers().then(users=>console.log(users))