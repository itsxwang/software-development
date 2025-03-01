// Basic Types
// ------------------------------------------------------------
// number: All numeric values (integers and floating point)
let age: number = 30;

// boolean: true or false values
let isLogedIn: boolean = true;

// Function Types
// ------------------------------------------------------------
// Functions can have typed parameters and return values
function greet(user: string): undefined {
    console.log("Hello " + user);
    return undefined;
}

let userName = "Alice";
console.log(greet(userName));

// Function type annotation with arrow syntax , basically this is for function expression
// (parameter: type) => returnType
let functionName: (parameterType: string) => string  = function(parameters) {
    return parameters;
};
functionName('string_value');  // functionName(1); , gives error as this is not a string type

// Array Types
// ------------------------------------------------------------
// Two ways to declare array types:
// 1. Using square brackets: type[]
// 2. Using generic Array<type>
let myNums: (number | string)[] = [1, 2, 3,'string'];
let genericArray: Array<number>  = [1, 2, 3];

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
// any: Opt-out of type checking
let myAny: any = "Hello";  // Can be assigned any type

// void: Absence of any type, commonly used as function return type
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

// Enum Types
// ------------------------------------------------------------
// A way to give friendly names to numeric values
enum Color {
    Red = 1,    // Starts from 1
    Green,      // Auto-increments to 2
    Blue        // Auto-increments to 3
}
let myColor: Color = Color.Green;

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

// Literal Types
// ------------------------------------------------------------
// Specific string/number/any values as types
let myLiteral: 'hello' = "hello";  // Can only be assigned "hello"