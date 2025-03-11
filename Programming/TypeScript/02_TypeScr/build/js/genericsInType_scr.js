"use strict";
// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types 
// What and when to use generics
// https://youtu.be/EcCTIExsqmI?si=Ui1QlmcZkwHrXZuc&t=49 see this clip
// So we can give any name to our generic , as its functionality is not depend on names 
function getFirstElement(array) {
    return array[0];
}
// hover and see the in the place of T 
getFirstElement([1, 2, 3]);
getFirstElement(['a', 'b', 'c']);
getFirstElement(['a', 'b', 'c', 1]);
/* So what we observe here is that the T is changing dynamically according to the type of the array that we are passing
because with the help of generics ts can infer the param , return value if not been set explicitly */
// If ts not automatically infer or not infer correctly, you can do this , to tell it explicitly , and this is what we called assertion:
// So now in the place of T (means where we have written T) in place of that number will come
getFirstElement([1, 2, 3]);
// The way how its work is - https://youtu.be/EcCTIExsqmI?si=rtH06nH0Qt1uoXGp&t=227
// Now see isn't this thing we doing in assertions, basically in this way assertion work ,  queryselctor accepts generic type and that we define as HTMLImageElement
const image = document.querySelector('img');
// Fact : in ts almost in every place generics has been used , even we are using them without actually came to know that we are using them
// One more example  - https://youtu.be/EcCTIExsqmI?si=C1fJw81HpIteVcUT&t=300
// Generics in map and sets - https://youtu.be/EcCTIExsqmI?si=CrOJDA7sKC_5cktB&t=336
// const input = <HTMLInputElement>document.getElementById('exammple-input'); 
// but before this let's learn about js maps and sets deeply , in separate file
const map = new Map();
console.log(map);
