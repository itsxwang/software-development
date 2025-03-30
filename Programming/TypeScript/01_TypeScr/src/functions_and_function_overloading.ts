// Function overloading example 

interface FunctionType {
    (parameter: string): string;
    (parameter: number): number;
}


/* Same thing using type alias

type FunctionType =  {
    (parameter: string): string;
    (parameter: number): number;
}

*/

// means `takesYourFunction` takes that function in its param `f` , that can take string or number type parameter and return string or number type value
function takesYourFunction(f: FunctionType) {
    if (Math.random() > 0.5) return "1";
    return f('1');
}

// Here we do function declaration 

function weirdFunction(x: string): string;
function weirdFunction(x: number): number; // Here we do function overloading , that takes both string and number type and can return both string and number type value , hover on this function to see that

// Note : Just after the function declaration we can not write any code , we first have to implement that function that we declared above , otherwise it will throw error `Function implementation is missing or not immediately following the declaration.`

// Here we do function implementation
function weirdFunction(x: unknown ): string | number { // or like this: function weirdFunction(x: unknown): unknown  (or any) 
    if (Math.random() > 0.5) return "1"; // random logic 
    return 1;
}

//  ------------------------------------------------------------
/* What the point of overloading is that, ts automatically infers(to see that hover on `f()`) on the function call that it returns string or number type value based on the parameter type, 
but note: your implementation should align with ts inferation, ts will not throw error if your function returns different type value than the inferred type(see above example) */
// ------------------------------------------------------------

takesYourFunction(weirdFunction);

// More about function overloading - https://youtu.be/iJkaAJUzeWQ?si=nCKOdhSDUadhe3JU&t=6180 

// ------------------------------------------------------------
/* 
Why do we need to write these two lines?
function weirdFunction(x: string): string;
function weirdFunction(x: number): number;

These are function overload signatures. They tell TypeScript that weirdFunction has specific versions for handling string and number separately.

If you don't include them, TypeScript only sees the actual implementation, which is:
function weirdFunction(x: string | number): string | number {
    if (Math.random() > 0.5) return "1"; 
    return 1;
}

And that leads to a type mismatch when passing it into takesYourFunction.

Why does the error happen?
When you pass weirdFunction into takesYourFunction, TypeScript expects a function that follows the overloaded signatures of FunctionType:
interface FunctionType {
    (parameter: string): string;
    (parameter: number): number;
}

But without function overload signatures, weirdFunction only has this inferred type:
(x: string | number) => string | number

And this does not match FunctionType.

Here's the key reason why:
FunctionType expects two separate function signatures:
string → string
number → number

But our implementation returns a string | number for both string and number inputs.

Why does TypeScript complain?
TypeScript performs strict function compatibility checking, and it doesn't allow a function with a union return type (string | number) to replace a function that has two distinct return types (string → string and number → number).

When TypeScript checks:
takesYourFunction(weirdFunction);
it sees:
(x: string | number) => string | number
and tries to match it with:
(parameter: string) => string;
(parameter: number) => number;

Where is the mismatch?
Mismatch in Return Type
If takesYourFunction calls f(""), it expects a string result.
But our function might return a number, which violates the expected type.

Mismatch in Input Type
If we didn't write the function overload signatures, TypeScript assumes weirdFunction could accept string | number together, but FunctionType defines them separately.

How Do These Two Lines Help?
function weirdFunction(x: string): string;
function weirdFunction(x: number): number;

These tell TypeScript explicitly:
- When input is string, return string.
- When input is number, return number.

Then, TypeScript allows weirdFunction to match FunctionType, because now TypeScript understands:
weirdFunction("hello") → "some string" ✅ (matches `(string) => string`)
weirdFunction(42) → 123 ✅ (matches `(number) => number`)

So now we can pass weirdFunction into takesYourFunction.

What happens if we don’t write the overloads?
Without these overloads, TypeScript only sees the implementation:
function weirdFunction(x: string | number): string | number {
    if (Math.random() > 0.5) return "1";
    return 1;
}

So, TypeScript thinks:
weirdFunction: (x: string | number) => string | number

Which does not match:
(parameter: string) => string;
(parameter: number) => number;

Because:
- weirdFunction("") might return a number, which is not allowed.
- weirdFunction(42) might return a string, which is not allowed.

That's why we need the function overloads!
They force TypeScript to treat weirdFunction as separate function signatures, matching the expected FunctionType.

🔹 Summary
✔ Function overload signatures are needed to tell TypeScript that weirdFunction strictly follows (string → string) and (number → number).
✔ Without them, TypeScript only sees the general (string | number) → (string | number), which does not match FunctionType.
✔ Function overloading ensures better type safety by making sure the function always returns the correct type based on its input.
*/

// ------------------------------------------------------------

/* Its worth to note that if object defined by type assertion or interface contains function signature along with object,
you can call that type also */

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
  };
  function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
  }
   
  function myFunc(someArg: number) {
    return someArg > 3;
  }
  myFunc.description = "default description";
   
  doSomething(myFunc);


// ------------------------------------------------------------
//  Construct Signatures
/* So we already know JavaScript functions can also be invoked with the new operator. TypeScript refers to these as constructors because 
they usually create a new object. You can write a constructor signature by adding the new keyword in front of a call(function) signature: */

// What is a Constructor Signature?
// A constructor signature means we defining what constructor will return
// SomeConstructor is a type that represents a constructor.
// It expects a new call with a string argument and returns an object `{ name: string }`


interface SomeConstructor  {
  new (s: string): { name: string };
};

// fn is a function that expects a constructor function (ctor) as its parameter.
// It calls that constructor that we pass in ctor argument(here person class)
function fn(ctor: SomeConstructor) {
  return new ctor("hello");
}





// so here we define that constructor 
class Person {
  name: string
  constructor(s: string) {
    this.name = s; 
  }  // so here constructor takes s takes a argument of type string and returns an object { name: string }
}

fn(Person);
// Person is a class that matches the constructor signature (new (s: string): { name: string }).

// fn(Person) works because Person has a constructor that takes a string and returns an object { name: string }




// Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily:

interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}
 
function fnn(ctor: CallOrConstruct) {
  // Passing an argument of type `number` to `ctor` matches it against
  // the first definition in the `CallOrConstruct` interface.
  console.log(ctor(10));

 // Similarly, passing an argument of type `string` to `ctor` matches it
  // against the second definition in the `CallOrConstruct` interface.
  console.log(new ctor("10"));
  // console.log(new ctor(10)); //! Argument of type 'number' is not assignable to parameter of type 'string', because constructor signature expects string as argument 
}



fnn(Date);


/* 
Note: TypeScript has special handling for certain global objects like Date, Array, Promise, etc. These objects have well-known,
pre-defined types built into TypeScript's standard library (lib.es5.d.ts, lib.es6.d.ts, etc.).

When TypeScript sees Date, it doesn’t strictly enforce the function signature that you declared in the interface—it
assumes Date behaves as defined in the standard library, which has its own call and constructor signatures, it just check types when you call that function

That's why we can write any signature, if fn takes Date as argument becaue Date is a global object, but that signature should align with how you call it 
*/




// ----------------------------
// Custom implementation of function that satisfy CallOrConstruct interface

// TypeScript has a rule that the `this` parameter must be the first argument in a function signature.

/*
And, When called with new, a new instance is created, and this refers to the new object.
When called without new, this refers to the global object (in non-strict mode) or undefined (in strict mode). 
*/



 
function MyFunc(this: any, value?: number | string): any {
  console.log('this',this)
  if (!(this instanceof MyFunc)) {
    // If called as a normal function
    return `Called without new: ${value}`;
  }
  // If called with 'new'
  return new Date();
}

// Assign the function to a variable of the interface type
const func: CallOrConstruct = MyFunc as CallOrConstruct;
// we above do assertion because, TypeScript doesn't automatically infer that MyFunc can be used as both a function and a constructor.

// But we can do this also, and this way not require even type assertion
// -------------------------------------------------------------------------------
/* 
interface CallOrConstruct {
  (n?: number): string;
  new (s: string): Date;
}

class MyFuncClass {
  constructor(s: string) {
    return new Date();
  }
  static call(n?: number) {
    return `Called without new: ${n}`;
  }
}

✅ Assigning a function that satisfies both signatures
const func = Object.assign(MyFuncClass.call, MyFuncClass) as CallOrConstruct;

✅ Now works
console.log(func(10)); // Called without new: 10
console.log(new func("Hello")); // Outputs a Date object

*/
// So this is also possible

// -------------------------------------------------------------------------------


// Usage
// console.log(func(10)); // ✅ Called without new: 10
console.log(new func("Hello")); // ✅ Outputs a Date object


// to refer to the class constructor type. For example:

class Animals {
  constructor() {}
}

class Zoo {
  AnimalClass: typeof Animals;

  constructor(AnimalClass: typeof Animals, public animal: Animals) {
    this.AnimalClass = AnimalClass;
    this.animal = animal;
  }
}
// This ensures that AnimalClass can only be a constructor of a class that extends Animal.

/* Some objects, like JavaScript’s Date object, can be called with or without new. You can combine call and construct signatures in the same type arbitrarily: -
see this example - https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures
 */

// For more complex scenarios, such as dynamically loading subclasses of a given class, you can use generics to define the constructor type:
class Zoos<T> {
  constructor(public readonly AnimalClass: new () => T) { // new () => T is a constructor signature, manas AnimalClass takes a constructor signature that returns object of T(here Animals)
    this.AnimalClass = AnimalClass;
  }
}

const zoo = new Zoos<Animals>(Animals); 
console.log(new zoo.AnimalClass()) 

// This allows you to specify the type of the object that the constructor will create.