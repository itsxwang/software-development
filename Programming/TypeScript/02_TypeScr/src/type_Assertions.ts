// type assertions are also called Typescript casting
// What is type assertions
// https://youtu.be/lOuaE3nGS4g?si=ElgBPc1myX1Pairq&t=10
// So type assertion in ts is a way to tell the ts compiler that we know more about the type than the compiler does 

/* 

Type assertion in TypeScript allows you to inform the compiler about the specific type of a value, overriding its inferred type when you have more information about the value's type than compiler infer

This is useful for enhancing type safety without altering the actual type or value at runtime

There are two primary ways to perform type assertion: using the "as" keyword and the "<>" (angle bracket) syntax. 
While both syntaxes are equivalent, the "as" keyword is preferred in environments like JSX to avoid conflicts.

Type assertions are commonly used with DOM elements, such as asserting the return value of document.getElementById to a more specific type like HTMLInputElement like if your 
document.getElementById() return some input element

So with the help of type assertions you can convert to more or less specific type you start with

And note : mistakes can be made using assertions , if you not set up them correctly

*/


// example of type assertions using as 

type one = string; // specific
type two = string | number; // lesser specific than one and three
type three = 'hello'; // most specific than two 

// convert to less specific type
let a: one = 'welcome';

// so in this way we can assign the value of `a` to `b` at the same time making type of `b` less specific than `one`
let b = a as two; // convert to less specific type, as `one` is more specific than `two` because `two` can be string or a number both, but one can only be string

let c = a as three; // convert to more specific type, as `one`(we said `one` because , it is a type of `a`) is less specific than three (the actual literal value 'hello') 
console.log(c);
// c = 'string other than hello' // it not raise error above but it raise error below , why , shouldn't it raise error above ?

/*
Understanding Type Assertions
Type assertions in TypeScript do not change the actual type of the variable at runtime; they only tell TypeScript to treat the variable as a different type at compile time. However, TypeScript does not perform runtime checks to ensure the assertion is correct.

Why No Error at let c = a as three;?
let c = a as three;
Here, a is of type one, which is string.
three is specifically the string literal 'hello'.
Normally, you can't directly assign a general string to a specific literal type ('hello').
However, TypeScript allows type assertions (as three) even when they are incorrect, as long as the underlying type (string) is assignable.
Type assertions do not enforce correctness—they just override TypeScript's type checking.
Meaning: TypeScript trusts that you, the programmer, know what you're doing.
At this point, c is pretending to be 'hello', but it actually holds 'welcome'.

Why Does the Error Occur Later?
c = 'string other than hello';
Now, c is already declared as three ('hello').
'hello' is a literal type, meaning it can only be the string 'hello'.
'string other than hello' does not match the allowed value ('hello').
At this point, TypeScript enforces strict type checking, and an error is raised.

Shouldn't It Have Raised an Error Earlier?
Technically, yes, but TypeScript's type assertion mechanism does not check whether the asserted type is correct. It only allows you to override the type system.
Type assertions (as someType) do not perform runtime validation.
They are only checked when you actually try to assign an invalid value without an assertion.

Key Takeaways
- Type assertions (as) override TypeScript's checks but do not validate correctness.
- let c = a as three; does not raise an error because TypeScript assumes you know what you're doing.
- The error only appears when you later assign a value ('string other than hello') that does not match the literal type ('hello').
- If you want stricter checking, avoid using as too loosely. Instead, use proper type guards(basically if-else statements for make check on types) or narrowing (basically narrowing also refers to same thing:
In TypeScript, narrowing means refining a broader type into a more specific one based on runtime checks.
Think of it as "narrowing down the possibilities" of what a variable can be.

Narrowing can be done in many ways: 

📌 Example of Narrowing using if-else
Let's say we have a variable that can be a string or a number:


function printLength(x: string | number) {
    if (typeof x === "string") {
        console.log(x.length); // ✅ Here, TypeScript knows `x` is a string
    } else {
        console.log(x.toFixed(2)); // ✅ Here, TypeScript knows `x` is a number
    }
}

)

Why does let c = true as three; give an error?
let c = true as three; // ❌ ERROR
So basically ts can check assertions when it can , but not in all cases.
Here, true is a boolean, while three is a string literal ('hello').
A boolean is NOT compatible with a string at all. 
Unlike string -> string literal, TypeScript does NOT allow boolean -> string because they are completely unrelated types., 
and ts find out that it 100% false that true is a any string literal.
Even with as, TypeScript enforces that the base types must be compatible.

Conclusion
✅ Allowed: string → string literal
🚫 Not Allowed: boolean → string literal

TypeScript allows string → 'hello' (literal) assertions because they belong to the same family of types (string).
TypeScript does NOT allow boolean → 'hello' because boolean and string are completely different types.
So, type assertions work only if the types are related—but they don't check correctness(at runtime), just compatibility!

*But if you still wanna assign c a true value and wanna assert it as string , you can do that in this way :* 
let c = true as unknown as three; 

You're performing double type assertion:

1. true as unknown → This tells TypeScript to first treat true as unknown. Since unknown is the most flexible type (it can be anything), TypeScript allows this assertion.
2. unknown as three → Now, you're telling TypeScript to treat this unknown value as the literal type 'hello'. Since unknown can be assigned to anything (with a type assertion), TypeScript allows this as well.
🔥 Why does this work?
unknown is a universal type that can hold any value.
TypeScript allows unknown to be cast to any type using assertions.
🤔 Is this safe?
No, it's not safe at runtime! You're basically forcing TypeScript to believe that true is 'hello', but in reality, it's still true. If you try to use c as 'hello', you might get unexpected behavior at runtime.

So now ts not complain about that and we complete two assertions in a row and this is also called double / force casting(or assertion)


*/

// same thing can be done using angle brackets example
let totalBill:any = 123;
let finalBill= <string> totalBill + 5 ; /* here it consider `totalBill + 5` expression return string  , so from here on it consider finalBill as taking string type value , 
but after runtime it will consider that not at runtime(when `finalBill` is assigned to `totalBill + 5`(that is number) at runtime ts trust you that you are assigning a correct type 
that you specify in assertion
and now if we assign number to finalBill now it gives error because finalBill not take a number type after runtime , instead it takes string type after runtime
finalBill = 7 , error  */

console.log(finalBill)

// one solid  pratical example : https://youtu.be/gieEQFIfgYc?si=MECNMb46Mqe4_DE2 , see this clip to see that example




// so here we are saying consider the return value of document.getElementById('exammple-input') as HTMLInputElement
const inputElement = document.getElementById('exammple-input') as HTMLInputElement;
inputElement.value = 'Hello';
/* So basically what we did above is : 
So before asserting the return type of document.getElementById('exammple-input'), TypeScript compiler automatically infers the type of that value to HTMLElement | null, but now we are telling the compiler that this value is HTMLInputElement more specifically, `so here we convert type to more specific type from lesser specific type`.
And here above, because TypeScript compiler automatically infers the type of the value that comes in inputElement as HTMLElement | null, and therefore HtmlElement and null do not have the property `value`, 
so it also gives an error if we do not explicitly tell the TypeScript compiler that the type of value that comes in inputElement is HTMLInputElement, not HtmlElement.
*/
// Wanna see more About usefullness of assertions : https://youtu.be/gieEQFIfgYc?si=hAKxw22UjSJhoWr7&t=6795 , see this clip by Dave Gray 

// so as we know ts automatically infers either its a HtmlElement or null, so if we wanna assert that this element actually exist (means not null) , we can put `!` at last of statement , it also called non-null assertion
const canvasElement  = document.getElementById('#canvas')! ;

function isString(x: any) {
    return typeof x === "string";
}

function test(x: string | number) {
    if (isString(x)) {
        console.log(x.toUpperCase());
    }
}


// assertion funcions 
// ------------------------------------------------------------
// read about assetrion functions for assertion here : https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
function assert(condition: any, msg?: string): asserts condition {
    if (!condition) {
      throw new Error(msg);
    }
  }

//  asserts condition says that whatever gets passed into the condition parameter must be true if the assert returns (because otherwise it would throw an error)

// ------------------------------------------------------------
//  The in operator narrowing

/* JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the in operator. 
TypeScript takes this into account as a way to narrow down potential types.

For example, with the code: "value" in x. where "value" is a string literal and x is a union type. 
The “true” branch narrows x’s types which have either an optional or required property value, and the “false” 
branch narrows to types which have an optional or missing property value. */

// type Fish = { swim: () => string };
// type Bird = { fly?: () => void, p:1 };
 
// So what this union argument will say, that animal can only contain those properties, which are present in union(Fish | Bird)
// function move(animal: Fish | Bird) {
//   if ("swim" in animal) {
//     return animal.swim();
//   }
 
//   return animal.fly?.();
// }

// console.log(move({p:1,swim:()=>'s'}))

/* To reiterate, optional properties will exist in both sides for narrowing. For example, a human could both swim and fly (with the right equipment) 
and thus should show up in both sides of the in check:
Think of like this in ts language, Human7 not narraowed down in first check, because Human7 has `swim` property as optional, so it will be in both sides (if and else)
 */
type Fish7 = { swim: () => void };
type Bird7 = { fly: () => void };
type Human7 = { swim?: () => void; fly?: () => void };
 
function move7(animal: Fish7 | Bird7 | Human7) {
  if ("swim" in animal) {
    animal;
      

  } else {
    animal;
      
  }
}

// ------------------------------------------------------------
// More about narrowing - https://www.typescriptlang.org/docs/handbook/2/narrowing.html

// ------------------------------------------------------------
// One example of is operator

type Fish = { swim: () => 'swim' };
type Bird = { fly: () => 'fly'};

function getSmallPet(): Fish | Bird  {
    return Math.random() > 0.5 ? {swim:()=>{return 'swim'}} : {fly:()=>{return 'fly'}}
}

// ---cut---
// this is saying if function isFish return true, then pet is Fish(means pet parameter contains Fish type value) otherwise its other way around
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

const pet = getSmallPet();
if (isFish(pet)) {
  console.log(pet.swim());
} else {
  pet.fly();
}
// Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don't have a Fish, so you must have a Bird

const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish); 
// or, equivalently
const underWater2= zoo.filter(isFish);
 
// The predicate may need repeating for more complex examples, optional `pet is Fish`
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  // Remove the name check since name property doesn't exist on Fish or Bird
  return isFish(pet);
});

// In above examples, there's no need to explicitely mention that underWater Variables takes Fish[], Ts automatically infer that it takes Fish[] type value

// ------------------------------------------------------------
// this based type guards

/* You can use this is Type in the return position for methods in classes and interfaces. When mixed with a type narrowing (e.g. if
statements) the type of the target object would be narrowed to the specified Type
read this - https://www.typescriptlang.org/docs/handbook/2/classes.html#this-based-type-guards */

// Example:

class FileSystemObject {
  isFile(): this is FileRep {
    return this instanceof FileRep;
  }
  isDirectory(): this is Directory {
    return this instanceof Directory;
  }
  isNetworked(): this is Networked {
    return this.networked;
  }
  constructor(public path: string, private networked: boolean) {}
}
 
class FileRep extends FileSystemObject {
  constructor(path: string, public content: string) {
    super(path, false);
  }
}

class Directory extends FileSystemObject {
  children: FileSystemObject[];
  constructor(path: string, children: FileSystemObject[]) {
    super(path, false);
    this.children = children;
  }
}

interface Networked {
  host: string;
}

const fso: FileSystemObject = new FileRep("foo/bar.txt", "foo");
 
if (fso.isFile()) {
  fso.content;
}
else if (fso.isDirectory()) {
  fso.children;
}
else if (fso.isNetworked()) {
  fso.host;
  fso.path;
}
