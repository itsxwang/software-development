"use strict";
// Basic Types
// ------------------------------------------------------------
// number: All numeric values (integers and floating point)
let age = 30;
// boolean: true or false values
let isLogedIn = true;
// Function Types
// ------------------------------------------------------------
// Functions can have typed parameters and return values
function greet(user) {
    console.log("Hello " + user);
    return undefined;
}
let userName = "Alice";
console.log(greet(userName));
// Function type annotation with arrow syntax , basically this is for function expression
// (parameter: type) => returnType
let functionName = function (parameters) {
    return parameters;
};
functionName('string_value'); // functionName(1); , gives error as this is not a string type
// Array Types
// ------------------------------------------------------------
// Two ways to declare array types:
// 1. Using square brackets: type[]
// 2. Using generic Array<type>
let myNums = [1, 2, 3, 'string'];
let genericArray = [1, 2, 3];
// Object Types
// ------------------------------------------------------------
// Objects with specific property types
let myObj = {
    name: "John Doe",
    age: 30
};
// Special Types
// ------------------------------------------------------------
// any: Opt-out of type checking
let myAny = "Hello"; // Can be assigned any type
// void: Absence of any type, commonly used as function return type
function logMessage(message) {
    console.log(message); // No return value
}
// never: Represents values that never occur
// Used for functions that never return (throw error or infinite loop)
function error(message) {
    throw new Error(message);
}
// Tuple Types
// ------------------------------------------------------------
// Fixed-length array where each element has a specific type
let myTuple = [1, "Hello"];
// Enum Types
// ------------------------------------------------------------
// A way to give friendly names to numeric values
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue"; // Auto-increments to 3
})(Color || (Color = {}));
let myColor = Color.Green;
// Unknown Type
// ------------------------------------------------------------
// Similar to any, but more type-safe as operations require type checking
let myUnknown = "Hello";
myUnknown = 1;
myUnknown = true;
// Union Types
// ------------------------------------------------------------
// Variable can hold more than one type
let myUnion = "Hello";
myUnion = 1; // Valid
// myUnion = true;  // Invalid: boolean not allowed
// Literal Types
// ------------------------------------------------------------
// Specific string/number/any values as types
let myLiteral = "hello"; // Can only be assigned "hello"
