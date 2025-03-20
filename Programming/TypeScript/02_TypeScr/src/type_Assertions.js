// type assertions are also called Typescript casting
// What is type assertions
// https://youtu.be/lOuaE3nGS4g?si=ElgBPc1myX1Pairq&t=10
// So type assertion in ts is a way to tell the ts compiler that we know more about the type than the compiler does 
// convert to less specific type
var a = 'welcome';
// so in this way we can assign the value of `a` to `b` at the same time making type of `b` less specific than `one`
var b = a; // convert to less specific type, as `one` is more specific than `two` because `two` can be string or a number both, but one can only be string
var c = a; // convert to more specific type, as `one`(we said `one` because , it is a type of `a`) is less specific than three (the actual literal value 'hello') 
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
var totalBill = 123;
var finalBill = totalBill + 5; /* here it consider `totalBill + 5` expression return string  , so from here on it consider finalBill as taking string type value ,
but after runtime it will consider that not at runtime(when `finalBill` is assigned to `totalBill + 5`(that is number) at runtime ts trust you that you are assigning a correct type
that you specify in assertion
and now if we assign number to finalBill now it gives error because finalBill not take a number type after runtime , instead it takes string type after runtime
finalBill = 7 , error  */
console.log(finalBill);
// one solid  pratical example : https://youtu.be/gieEQFIfgYc?si=MECNMb46Mqe4_DE2 , see this clip to see that example
// so here we are saying consider the return value of document.getElementById('exammple-input') as HTMLInputElement
var inputElement = document.getElementById('exammple-input');
inputElement.value = 'Hello';
/* So basically what we did above is :
So before asserting the return type of document.getElementById('exammple-input'), TypeScript compiler automatically infers the type of that value to HTMLElement | null, but now we are telling the compiler that this value is HTMLInputElement more specifically, `so here we convert type to more specific type from lesser specific type`.
And here above, because TypeScript compiler automatically infers the type of the value that comes in inputElement as HTMLElement | null, and therefore HtmlElement and null do not have the property `value`,
so it also gives an error if we do not explicitly tell the TypeScript compiler that the type of value that comes in inputElement is HTMLInputElement, not HtmlElement.
*/
// Wanna see more About usefullness of assertions : https://youtu.be/gieEQFIfgYc?si=hAKxw22UjSJhoWr7&t=6795 , see this clip by Dave Gray 
// so as we know ts automatically infers either its a HtmlElement or null, so if we wanna assert that this element actually exist (means not null) , we can put `!` at last of statement , it also called non-null assertion
var canvasElement = document.getElementById('#canvas');
function isString(x) {
    return typeof x === "string";
}
function test(x) {
    if (isString(x)) {
        console.log(x.toUpperCase());
    }
}
// -------------------------------------------
/* Using type predicates (is)

1. The is keyword creates a "type guard" → It tells TypeScript to narrow the type inside an if block.
2. Without is, TypeScript in some cases won’t trust your function to properly check the type. However in newer version of TypeScript, compile able to infer that also.
3. It does NOT return a pet here. It just tells TypeScript:
"If this function returns true, then treat the variable as this type.

Using type predicates
We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type is a type predicate:
```
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```
Try
pet is Fish is our type predicate in this example. A predicate takes the form parameterName is Type, where parameterName must be the name of a parameter from the current function signature.

Any time isFish is called with some variable, TypeScript will narrow that variable to that specific type if the original type is compatible.

Both calls to 'swim' and 'fly' are now okay.
```
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}
```
Try
Notice that TypeScript not only knows that pet is a Fish in the if branch; it also knows that in the else branch, you don’t have a Fish, so you must have a Bird.

You may use the type guard isFish to filter an array of Fish | Bird and obtain an array of Fish:
```
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
```
Try
In addition, classes can use this is Type to narrow their type.


*/
// assertion funcions 
// ------------------------------------------------------------
// read about assetrion functions for assertion here : https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions
function assert(condition, msg) {
    if (!condition) {
        throw new Error(msg);
    }
}
// So what this union argument will say, that animal can only contain those properties, which are present in union(Fish | Bird)
function move(animal) {
    var _a;
    if ("swim" in animal) {
        return animal.swim();
    }
    return (_a = animal.fly) === null || _a === void 0 ? void 0 : _a.call(animal);
}
console.log(move({ p: 1, swim: function () { return 's'; } }));
function move7(animal) {
    if ("swim" in animal) {
        animal;
    }
    else {
        animal;
    }
}
// ------------------------------------------------------------
// More about narrowing - https://www.typescriptlang.org/docs/handbook/2/narrowing.html
