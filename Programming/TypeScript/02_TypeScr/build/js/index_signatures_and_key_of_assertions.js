"use strict";
// Index Signatures
// Index signatures are useful when you creating a objects but you not know the exact name of the object keys , but you know the shape of a object and you declare the type of keys and values
// but there is another reason they are also useful because ts requires index signatures if you attempt to access object properties dynamically 
/* basically we see before how to create basic objects using interface and type alias , now let's see how to create object signatures so we can create properties and values dynamically
without explicitely defined each property name and its corresponding value
 */
// but there could come times when we not know the names of properties could be 
// if we instansiate this object :
const g = {
    name: "John",
    age: 30
};
let gObjectKey = 'name';
let user2 = {
    name: "John",
    1: '30',
};
console.log(user2[gObjectKey]); // it not gives error , as we created index signature(that tells ts that type of key can be string , and therfore allow accesing keys using string variables)
let user4 = {
    name: "John",
    age: 30,
    isActive: true
};
let user5 = {
    name: "John",
    age: 30
};
// This is also an option but it is not an assertion
/* let keyOf_User5 : keyof User5 = 'name'
console.log(user5[keyOf_User5]) */
// But using assertion we can do like this :
// let keyOf_User5 = 'name' as keyof User5
// or like this , direct
let keyOf_User5 = 'name';
// console.log(user5[keyOf_User5 as keyof User5]) , // `as keyof object` is also right way
/* Understand what happening here

Step 1: Understanding Object.keys(user5)

 
-`Object.keys(user5)` returns an array of strings representing the keys of user5 → ["name", "age"].
- Important: The return type of Object.keys() is string[], NOT "name" | "age" (which is keyof User5).
- This means TypeScript does not automatically infer the correct type of keys for user5.


Step 2: Understanding key as keyof object

`console.log(user5[key as keyof object])`
Here’s what happens:

1. What is key?
- Object.keys(user5) returns a string[](hover it and see), so key is a string (not keyof User5 directly).
2. What is object?
- `object` in TypeScript is a very broad type that represents any non-primitive value (arrays, functions, objects, etc.).
- `keyof object` means "any valid key for any object", which effectively resolves to string | number | symbol in TypeScript.


Key Observation:
Since Object.keys() gives a string[], and keyof object is also string | number | symbol, there’s no type conflict, and TypeScript allows the cast.


Step 3: Why Does This Work?
- TypeScript does not validate if key is actually a keyof User5 here, because Object.keys(user5) only guarantees string[], not "name" | "age".
- key as keyof object tells TypeScript:
  - "Trust me, key is a valid key of some object."
  - This works because key is already a string, and keyof object includes string.



*/
Object.keys(user5).map(key => {
    console.log(user5[key]);
});
console.log(user5['name']); // here typeScript automatically infers 'name' returns name literal which is actually present in user5 , so we don't have to use assertion here 
// But let's say ts not know that some property it not exist in object , an therefore gives error , because ts throws error if we try to access that property that not exist in object according to ts 
// We can do assertion simply , btw we already know this :
console.log(user5['random_property']); // or  `as keyof User5` for better type safety
// means key param only accepts the keys that we defined in User5 type annotation 
let logkey = (obj, key) => {
    console.log(`User5 key ${key} value is ${obj[key]}`);
};
logkey(user5, 'name'); // no error 
logkey(user5, 'height'); // no error 
let user6 = {
    name: 'John',
    age: 30
};
// so this syntax is handy if you not wanna specify a specific type for specific property and not wanna make index signatures
// if we want that Object can take property with anyname , we can do this:
// type User6 = Record<string, string | number> means Object with User6 type can take any property with type string
// ---------------------------------------------
// And Note : An index signature parameter type cannot be a literal type or generic type. Consider using a mapped object type instead.
