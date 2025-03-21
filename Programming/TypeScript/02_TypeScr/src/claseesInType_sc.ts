/* class Coder {
    name: string
    lang: string
    so here two things to understand (if we not use visibility modifiers)
    1. for initailaize any property we first have to declare it outside a constructor
    2. after declare some property , we have to initialize it 
    constructor(name: string) {
        this.name = name; // if we not initialize these properties here, we get error `Property 'name' has no initializer and is not definitely assigned in the constructor.`
        this.lang = lang;
    }

} */

// Now to keeps things dry (do not repeat yourself) we can use visibility modifiers like public , private , protected , etc. they are also be called data/access modifiers

class Coder {
    // #name : string  , our js way to create a private property 

    // and if we wanna just declare a property without initializing it , we can use `!` to declare it like this: 
    secLang!: string;

    // by default all properties and method of a class is public , we also have readonly modifier that makes property readonly
    constructor(
        public readonly name: string,
        public lang: string,
        public age: number,
        // means it can also be access in sub classs but not outside the class
        protected id: number = 0,

    ) {
/*         so by using visibility modifiers we can declare and initialize a property in a single line ,
           and assignments in the body of the constructor are not required here
 */     this.name = name;
        this.lang = lang;
        this.id = id;
    }
    public code(language: string) {
        console.log(`${this.name} is coding in ${language}`)
    }

    public getId() {
        return `${this.id} Only`
    }
    // 
}

const coder = new Coder('John Doe', 'TypeScript', 30, 1); // now we already know like python , now if you not give any value to any required argument it will give error 
// coder.name = 'John Doe' Cannot assign to 'name' because it is a read-only property.
// console.log(coder.name) 
coder.code('TypeScript')
// console.log(coder.id) // Property 'id' is protected and only accessible within class 'Coder' and its subclasses.
console.log(coder.getId()) // instead use method



class WebCoder extends Coder {
    constructor(name: string,
        lang: string,
        age: number,
        public framework: string
    ) {
        super(name, lang, age);
        this.framework = framework

    }
    public getDecoratedId() {
        return `#${super.getId()}`
    }

}

const webCoder = new WebCoder('Johny', 'TypeScript', 30, 'Angular');
console.log(webCoder.getDecoratedId())


// -----------------------------------------------------------
// how to implement interface to class

interface ICoder {
    name: string;
    lang: string;
    code(language: string): void;
}

// in this way we can implement interface to some class , implements means Codere class must have all properties of ICoder , if it not ts compile gives error
class Codere implements ICoder {

    // name: string;
    // lang: string;
    constructor(public name: string, public lang: string) {
        this.name = name;
        this.lang = lang
    }
    code(language: string): void {
        throw new Error("Method not implemented.");
    }
}
const coder1 = new Codere('John Doe', 'TypeScript')
// coder1.code('TypeScript') throws error

// -----------------------------------------------------------

class Peeps {
    private data  = 0 //, so we can also use visibility modifiers outside the constructor


    constructor
    (
        public name: string,
        private age: number,
        private collection : string[],
        data = 'sample_data'
    ) {

    }

    public get my_collection() : string[] {
        return this.collection
    }
    

    
    public set my_collection(new_collection : string[]) {
        this.collection = new_collection
    }
    

}

const peeps = new Peeps('John Doe', 30,['js','python']);
peeps.my_collection = [...peeps.my_collection , 'TypeScript']
console.log(peeps.my_collection)


// ------------------------------------------------------------
// Its also worth to tell, that if any class extends another class, and variable has a type of parent class, we can assign a child class instance to it.

class Hello {
  sayHello():void{
    console.log('Hello');
  }
}

class World extends Hello {
  sayWorld():void{
    console.log('World');
  }
}   

const hi : Hello = new World();


if (hi instanceof World){
  hi.sayWorld();
}
else{
  hi.sayHello();
}