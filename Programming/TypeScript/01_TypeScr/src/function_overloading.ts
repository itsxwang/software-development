// Function overloading example 
interface FunctionType {
    (parameter: string): string;
    (parameter: number): number;
}

// means `takesYourFunction` takes that function in its param `f` , that can take string or number type parameter and return string or number type value
function takesYourFunction(f: FunctionType) {
    if (Math.random() > 0.5) return "1";
    return f("");
}

// Here we do function declaration 

function weirdFunction(x: string): string;
function weirdFunction(x: number): number; // Here we do function overloading , that takes both string and number type and can return both string and number type value , hover on this function to see that

// Note : Just after the function declaration we can not write any code , we first have to implement that function that we declared above , otherwise it will throw error `Function implementation is missing or not immediately following the declaration.`

// Here we do function implementation
function weirdFunction(x: string | number): string | number {
    if (Math.random() > 0.5) return "1"; // random logic 
    return 1;
}

takesYourFunction(weirdFunction);

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