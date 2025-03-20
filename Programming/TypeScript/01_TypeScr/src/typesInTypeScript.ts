// TypeScript has Structural type system
// ------------------------------------------------------------
// One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.


// Read about Types for tooling in TypeScript : https://www.typescriptlang.org/docs/handbook/2/basic-types.html#types-for-tooling, that helps to prevent bugs in first place

interface Point {
    x: number; // so you can also use ; instead of comma
    y: number;
  }
   
  function logPoint(p: Point) {
    console.log(`${p.x}, ${p.y}`);
  }
   
  // logs "12, 26"
  const point = { x: 12, y: 26 };
  logPoint(point);


/* The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.

The shape-matching only requires a subset of the object’s fields to match. */

const point3 = { x: 12, y: 26, z: 89 };
logPoint(point3); // logs "12, 26"
 
const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect); // logs "33, 3"

 
// const color = { hex: "#187ABF" };
// logPoint(color);
//! Argument of type '{ hex: string; }' is not assignable to parameter of type 'Point'.
//!   Type '{ hex: string; }' is missing the following properties from type 'Point': x, y

// There is no difference between how classes and objects conform to shapes, because we know classes is just syntactic sugar for object literals:
class VirtualPoint {
  x: number;
  y: number;
 
  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}
 
const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint); // logs "13, 56"

// If the object or class has all the required properties, TypeScript will say they match, regardless of the implementation details.


// Implicitly , this happens when we not explicitly define types
// ------------------------------------------------------------
let myString = "Hello"; // here ts automatically inferred(figure out) the type that this is a string
// myString = 1; because ts inferred that this is a `myString` take string type values implicitly, so we can't assign number to string type variable

// if we take case of function

function Message(message: string) {
    return message
}
/*  ts automatically inferred that what function going to return based on the information it knows about that funtion 
    like here it inferred that this function going to return string type value based on the parameter type it knows
 */




// Explicitely define types , when we explicitly define types we called that `type annotation`
// ------------------------------------------------------------
// number: All numeric values (integers and floating point)
let age: number = 30;

// boolean: true or false values
let isLogedIn: boolean = true;
// ------------------------------------------------- // Note: The type names String, Number, and Boolean (starting with capital letters) are
// legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.



// Regex Type
// ------------------------------------------------------------
let myRegex: RegExp = /foo/;

// Function Types
// ------------------------------------------------------------
// Functions can have typed parameters and return values
function greet(user: string): undefined {
    console.log("Hello " + user);
    return undefined;
}

// One unique example of function type annotation, with destructuring
function createUser({ name, isPaid }: { name: string; isPaid: boolean }) {}

createUser({ name: "Johnyy", isPaid: false });




let userName = "Alice";
console.log(greet(userName));

// Function type annotation with arrow syntax , basically this is for function expression
// (parameter: type) => returnType

// so we make parameter `parameterType` optional  , so now parameterType can be string | undefined , and in ts optional params must be at last of all required parameters(if exist)
let functionName: (parameterType?: string) => string  = function(parameters = 'default_value') {
    return parameters;
};

functionName('string_value');  // functionName(1); , gives error as this is not a string type


/*
can also be done like this   
let functionName = (parameterType: string) : string => { 
    return parameters;
}
*/
// ------------------------------------------------------------
/* 
Interfaces can also be used for make function type annotation , so yeah TypeScript, interfaces can also define function types using call signatures ,
when an interface has only a function signature, it behaves like a function type alias.
In an interface, when you define a function signature like (parameter: string): string;, it means any function assigned to this interface must match this signature.
Here The function(that assigned to the interface) must accept a string and return a string.
---- Example ----

interface FunctionType {
    (parameter: string): string;
    }

- Note : When implementing an interface with function overloads, the function must explicitly handle all cases. Like in example that i give in another file of named : function_overloading.ts 
means the function implementation must explicitly define a parameter types and return types that includes all possible cases (string | number in that example) in the case of overloading , although using function overloads directly (without an interface) is often a better approach for defining multiple function signatures , using Union.

*/


// ------------------------------------------------------------
/* 
type aliases can also be use for make function type annotation 
---- Example ----
type FunctionType = (parameter: string) => string;
*/


// Array Types
// ------------------------------------------------------------
// Two ways to declare array types:
// 1. Using square brackets: type[]
// 2. Using generic Array<type>
let myNums: (number | string)[] = [1, 2, 3,'string'];
let genericArray: Array<number>  = [1, 2, 3]; // will explore this soon in detailed
// We can also do this
type specifyLiterals = ['s' | 'd'] // instead of do this : ('s' | 'd')[]
const a:specifyLiterals = ['s']


// Object Types
// ------------------------------------------------------------
// Objects with specific property types
let myObj: { 
    name: string,  // Required property
    age: number    // Required property
} = {
    name: "John Doe",
    age: 30
};

// Special Types
// ------------------------------------------------------------
/* When a value is of type any, you can access any properties of it (which will in turn be of type any), call it like a function, assign it to (or from) a value of any type, or pretty much anything else that’s syntactically legal: */
// any: Opt-out of type checking
let myAny: any = "Hello";  // Can be assigned any type

// void: Absence of any type, commonly used as function return type , Basically we can say the function that returns nothing ts infers implicitly that it returns void , until we explicitly define the return type
function logMessage(message: string): void {
    console.log(message);  // No return value
}

// never: Represents values that never occur
// Used for functions that never return (throw error or infinite loop)
function error(message: string): never {
    throw new Error(message);
}

// Tuple Types
// ------------------------------------------------------------
// Fixed-length array where each element has a specific type
let myTuple: [number, string] = [1, "Hello"];
// here's a quick thing to know:
// if we make some array 
let myArray: (number | string)[] = [1,'s'];
// now if we try to assign myTuple a myArray
// myTuple = myArray;  // gives error , reason : Target(myTuple) requires 2 and only 2 element(s) but source(myArray) may have fewer or more.

// Enum Types
// ------------------------------------------------------------
// more about enums : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#enums

// A way to give friendly names to numeric values
enum Color {
    a = 1,    // Starts from 1 , default start from 0
    b,      // Auto-increments to 2
    c       // Auto-increments to 3
}
let myColor: Color = 2; // so myColor can only contain 1,2,3 

// Unknown Type
// ------------------------------------------------------------
// Similar to any, but more type-safe as operations require type checking

let myUnknown: unknown = "Hello";
myUnknown = 1;
myUnknown = true;

// Union Types
// ------------------------------------------------------------
// Variable can hold more than one type
let myUnion: string | number = "Hello";
myUnion = 1;  // Valid
// myUnion = true;  // Invalid: boolean not allowed


// The separator of the union members is allowed before the first element, so you could also write this:

function printTextOrNumberOrBool(
  textOrNumberOrBool:
    | string
    | number
    | boolean
) {
  console.log(textOrNumberOrBool);
}


// Working with Union Types
/* TypeScript will only allow an operation if it is valid for every member of the union. For example, if you have the union string | number, you can’t use methods that are only available on string:

function printId(id: number | string) {
  console.log(id.toUpperCase());
Property 'toUpperCase' does not exist on type 'string | number'.
  Property 'toUpperCase' does not exist on type 'number'.
}


----- The solution is to narrow the union by making checks(type guards) that are specific to the union members. -----   
 */


// Literal Types
// ------------------------------------------------------------
// Specific string/number/any values as types
let myLiteral: 'hello' = "hello";  // Can only be assigned "hello"

// We can also specify a variable that can be object of a specific class
// ------------------------------------------------------------
/* Literal Types
In addition to the general types string and number, we can refer to specific strings and numbers in type positions.

One way to think about this is to consider how JavaScript comes with different ways to declare a variable. Both var and let allow for changing what is held inside the variable, and const does not. This is reflected in how TypeScript creates types for literals */

let changingString = "Hello World";
changingString = "Olá Mundo"; 
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString; // hover it, let changingString: string, so see here ts inferred that changingString is a string type,
// (that is correct also because we can assign different values(string) to changingString as it is a let variable)
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString; // hover it,  const constantString: "Hello World", so see here ts inferred that constantString is a literal type "Hello World"
//  (that is correct also because we can't reassign to constant variable)
      
// const constantString: "Hello World" error because we can't assign different string to constantString

// We can also explicitly define the literal type of a variable like this
let literalVar: 'hello' = "hello";  // Can only be assigned "hello"


// Define a custom types , using type keyword , these are also called type aliases
// ------------------------------------------------------------ 
type stringval = String;

type guitarist = {
    name: String,
    age?: Number, // optional as we put question mark after property name , here its type become Number | undefined
    instrument: String
};


let guitaristobj : guitarist = {
    name: "John Doe",
    // age: 30, still work fine
    instrument: "Guitar"
};

// let's make type for some function 
type logMessage = (message: string) => void;


// define custom types using interface keyword
// -------------------------------------------------------------
interface brainyEnginner {
    name?: String, // let's make this also optional to see one example
    age?: Number, // optional as we put question mark after property name , here its type become Number | undefined
    instrument: String
};
// so both are same 


function sayBye(message: brainyEnginner){
    // now if we do this 
    // console.log( message.name.toUpperCase() )it gives error because : 'message.name' is possibly 'undefined'.
    // so we have to check if message.name is defined or not
    // if(message.name){} // we can use if 
    // or just do 
    console.log( message.name?.toUpperCase() ); 
   /*  so typescript realize in advance that message.name can also be undefined and upperCase() can cause error because of that,
   so that's one way it helps you eliminate errors in your code at compile time(development time) rather at run time(when the app runs) unlike in JavaScript  */
}

// ------------------- Note -----------------------
const sumAll = (a:number=10,b:number,c:number = 9 ) => a + b + c;
console.log(sumAll(undefined,1,undefined)); // in js and ts both if param is given undefined it use default value(but only if default value is specfied for that param)
// Note : you can't give default values in function signature(type aliases / interface) direct , you have to give them in function implementation

// type annotation with rest operator
// -------------------------------------------------------------
const factorial = (...args:number[]) => args.reduce((a,b) => a * b);
console.log(factorial(1,2,3,4,5));



// -------------------- Note -----------------------
/*
 this will gives error , 
 ```Function lacks ending return statement and return type does not include 'undefined'```
TypeScript requires all code paths to return a value if the function has a return type.
TypeScript expects a guaranteed return value in all possible cases.
Here, we have if statements, but no default return outside the conditions.
TypeScript does not assume that value is always number | string. In some cases, TypeScript may think that execution could fall through without returning anything, resulting in an implicit undefined.

So to solve this error first , you can do , - Simply You can use else instead of if statement , which handle all paths

- Or you can just add 3rd return statement outside of both if statements

- Or last that is a motive of this example : throw a error, or call a function that has never type, now you have question why if our function has string return type, it should only return string, so how can we return never type 
Its bacause : 
1️⃣ Understanding never in TypeScript
In TypeScript, never is a special type that represents a value that will never be observed. This happens in two main cases:

1. A function that never returns (e.g., throw or while(true))
2. A function that has unreachable code paths

Since throw always terminates execution, TypeScript treats throwError() as returning never.

2️⃣ Why Doesn’t Your Function Throw a Type Error?
So Below is our function: So Why Does It Work Without an Error?

1. TypeScript sees throw as an "exit"

- The function return type is string.
- When throw new Error() is encountered, execution stops. That guarantees undefined never be return.
- The throw statement has a never type because the function does not proceed past this point.


2. TypeScript does not require unreachable code to match the function's return type

- The function always returns string OR throws an error.
- Since throw means the function will never reach an invalid state, TypeScript does not complain.
- In TypeScript, never is compatible with all return types, because execution is halted.

3️⃣ Final Answer
👉 TypeScript does not throw an error because throw new Error() effectively ends execution, and never is considered compatible with string.
🚀 This means that any function that throws an error is "safe" in TypeScript's eyes because it will never return an incorrect value!

4️⃣ Conclusion : 
So from here what we conclude is : 
Ts more focus on not returning the type (that is not specified as return type) as compare to returning the type (that is specified)

*/
const numOrString =  (value : number | string) :string => { 
    
    if (typeof value === 'number'){
        return 'number'
    }

    if (typeof value === 'string'){
        return 'string'
    }
    throw new Error('value must be number or string') 
};


// -------------------------------------------------------------
// declare keyword
// What Does declare Do?
// The declare keyword is used to tell TypeScript that a function (or variable, class, etc.) exists somewhere else 
// (e.g., in another file or an external library), but we are not providing its implementation here.

// So, when you write:
// `declare function create(o: object | null): void;`
// TypeScript treats this as a declaration only, meaning it assumes create already exists somewhere else (like in a .d.ts file or external library).
// And its worth to note: declare const variables and functions are not allowed to be implemented in same file. 

interface Backpack<Type> {
    add: (obj: Type) => void;
    get: () => Type;
  }
  

declare const backpack: Backpack<string>; // because we can't declare with const directly, that's why ts provide us declare keyword to do that thing 

// We can also declare a function if we don't wanna implement it
// declare function create(o: object | null): void;
// // implement it later
// function create(o: object | null) {
//     return o;
// }


// const object = backpack.get(); // but this throw error, at runtime

// ------------------------------------------------------------

// This will thow an error
// const value = Math.random() < 0.5 ? "a" : "b";
// if (value !== "a") {
  // ...
// } else if (value === "b") {
// ! This comparison appears to be unintentional because the types '"a"' and '"b"' have no overlap.
  // Oops, unreachable
// } 

// ------------------------------------------------------------
// TypeScript has several type-checking strictness flags that can be turned on or off
// NoImplicitAny : https://www.typescriptlang.org/docs/handbook/2/basic-types.html#noimplicitany

    //   - Turning on the noImplicitAny flag will issue an error on any variables whose type is implicitly inferred as any
// strictNullChecks : https://www.typescriptlang.org/tsconfig/#strictNullChecks


// ------------------------------------------------------------
// Literal Inference

/* 
When you initialize a variable with an object, TypeScript assumes that the properties of that object might change values later. For example, if you wrote code like this:
 */
const obj = { counter : 0 };
// if (someCondition) {
//   obj.counter = 1;
// }

/*
TypeScript doesn’t assume the assignment of 1 to a field which previously had 0 is an error. Another way of saying this is that obj.counter must have the type number, not 0, because types are used to determine both reading and writing behavior.

The same applies to strings: */

// we declare it because we just giving demo, we not need to implement it
declare function handleRequest(url: string, method: "GET" | "POST"): void;


const req = { url: "https://example.com", method: "GET"};
// handleRequest(req.url, req.method); //!Error : Argument of type 'string' is not assignable to parameter of type '"GET" | "POST"'.

/* In the above example req.method is inferred to be string, not "GET". Because code can be evaluated between the creation of req and the call of
handleRequest which could assign a new string like "GUESS" to req.method, TypeScript considers this code to have an error. */


// There are several ways to work around this.

// 1. You can change the inference by adding a type assertion in either location:


// ```
/* Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };

or do this 
Change 2
handleRequest(req.url, req.method as "GET"); */
// ```

/* Change 1 means “I intend for req.method to always have the literal type "GET", preventing the possible assignment of "GUESS" to that field after.”
Change 2 means “I know for other reasons that req.method has the value "GET"“.(So basically we do assertions here not much more)
 */

// 2. You can use as const to convert the entire object to be type literals:

/* const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method); */
/* The as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general
version like string or number. */

// 2. Use as const(makes every property readonly) to convert the entire object to be type literals:

const req2 = { url: "https://example.com", method: "GET" } as const;
// handleRequest(req2.url, req2.method);

/* So the as const suffix acts like const but for the type system, ensuring that all properties are assigned the literal type instead of a more general
version like string or number.
 */


// --------------------------------------------------
// Non-null Assertion Operator (Postfix !) (for compile time only)

// null and undefined types in detail and how they behave corresponding to strictNullChecks flag : https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#null-and-undefined
// btw ts updates, made null and undefined system little but more strict 
  
/* TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is 
effectively a type assertion that the value isn’t null or undefined: */

function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
/* Just like other type assertions, this doesn’t change the runtime behavior of your code, so it’s important to only use ! when you know that the value can’t
be null or undefined or instead use optional chaining(?) to check if the value is null or undefined. */
// liveDangerously(null); //! will throw error at runtime

type Fish = { swim: () => 'void' };
type Bird = { fly: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 else if ("fly" in animal) {

   return animal.fly();
 }
}

move({swim:()=>'void'})
