// class coder{
//     name: string
//     music: string
//     age: number
//     lang: string

//     constructor(name: string,music: string,age: number,lang: string){
//         this.name = name
//         this.music = music
//         this.lang = lang
//         this.age=age 
//     }
// }


// class Coder {
    
//     secondLang!: string

//     constructor(
//         public readonly name: string,
//         public music: string,
//         private age: number,
//         protected lang: string = 'TypeScript'
//     )
//         {
//         this.name = name
//         this.music = music
//         this.age=age 
//         this.lang = lang
//     }

//     public getAge(){
//         return `Hello, I'm ${this.age}`
//     }
// }

// const yash = new Coder('yash','Rock',21)
// console.log(yash.getAge())
// // console.log(yash.age)
// // console.log(yash.lang)

// const WebDev extends Coder {
//     constructor(
//         public computer: string,
//         name: string,
//         music: string
//         age: number,
//     ) {
//         super(name, music, age)
//         this.computer = computer
//     }
//     public getLang(){
//         return `I write ${this.lang}`
//     }
// }

// const Sara = new WebDev('Mac','Sara','Rock',22)
// console.log(Sara.getLang())

interface Musician{
    name: string,
    instrument: string,
    play(action: string): string
}

class Guitarist2 implements Musician{
    name:string
    instrument: string

    constructor(name: string, instrument: string){
        this.name=name
        this.instrument = instrument
    }

    play(action: string) {
        return `${this.name} ${action} the ${this.instrument}.`
    }
}

const Page =  new Guitarist2('Jimmy','Guitar')
console.log(Page.play('trums'))

/////////////////////////////////////

class Peeps{
    static count: number = 0;

    static getCount(): number {
        return Peeps.count
    }

    public id: number;
    constructor(public name: string){
        this.name=name
        this.id=++Peeps.count
    }
}

const John = new Peeps('John')
const yash = new Peeps('steve')
const srinu = new Peeps('hy')


console.log(John.id) // 1
console.log(srinu.id) // 3
console.log(yash.id) // 2
console.log(Peeps.count) //3

/////////////////////////////////////
class Bands{
    private dataState: string[]

    constructor(){
        this.dataState = []
    }

    public get data(): string[] {
        return this.dataState
    }

    public set data(value: string[]){
        if(Array.isArray(value) && value.every(el => typeof el === 'string')){
            this.dataState = value
            return
        }else throw new Error('Param is not an array of strings')
    }
}

const MyBands = new Bands()
MyBands.data = ['yash','srinu']
console.log(MyBands.data)
MyBands.data = [...MyBands.data, 'subbu','syam']
console.log(MyBands.data)