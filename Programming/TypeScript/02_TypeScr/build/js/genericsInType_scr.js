"use strict";
// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types 
/* A central idea of understanding generics is to understand that they can infer(in many cases)the type arguments you pass them(maybe through return statatement or parameters values , etc...)without actually needing to pass any type arguments, this is the source of lot of the magic that you can do with generics
 */
// What and when to use generics
// https://youtu.be/EcCTIExsqmI?si=Ui1QlmcZkwHrXZuc&t=49 see this clip
// So let's create generic function, before that it worth to tell that generic function is a normal function with a type helper mapped top of it
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
// Generics in maps - https://youtu.be/EcCTIExsqmI?si=CrOJDA7sKC_5cktB&t=336    
// Generic in sets - https://youtu.be/dLPgQRbVquo?si=prdRa32FqA9tY36y&t=187
// getElementById not takes generic type but still we can define it after assignment operator
// const input = <HTMLInputElement>document.getElementById('exammple-input'); 
// Maps and sets are deeply explained in separate js files
/* Here we passing two types of arguments : inside () is runtime argument and inside <> is type argument
means now map can only contain key of type string and value of type number
*/
const map = new Map([['xyProperty', 5]]);
map.set('a', 1);
console.log(map);
// Now its obvious to tell that generics can be pass to genrics(nested generics) :
const newMap = new Map();
// Sets
const mySet = new Set([1, 2, 3, 77, 88]); // if we want our Set will be only of Number type values
const obj = {
    name: 'abc',
    value: 5
};
// so now we can directly specify that this variable type is blogResponse
const res = {
    data: {
        text: 'Some blog data'
    },
    isError: false
};
/* NOTE:You don't have to specify every single time which argument should be pass in generics , in most of the cases Ts automatically figure out that type
based on which the function take as a input or of which type of output it is returning */
const response = {
    data: {
        status_code: 200,
        text: 'Some response text',
        CORS: true
    },
    isError: false
};
const defaultResponse = {
    data: {
        text: 'some_data',
    },
    isError: false
};
// ------------------------------------------------------
// Some more examples:
// One more example of generics usecase - 'https://youtu.be/dLPgQRbVquo?si=xaOvLGW9WM2X9rjH&t=105' 
// Another example - https://youtu.be/dLPgQRbVquo?si=SbIHzBM0W--T2VMm&t=265 
// Another example(constraint in functions) - https://youtu.be/dLPgQRbVquo?si=f5iZId3RvySc2jp0&t=507 // this is about extends keyword
// One more, Multiple type arguments example -  https://youtu.be/dLPgQRbVquo?si=G3RhLBwZ8tjzuta0&t=685
// One of the most powerful thing you can do in ts is to use generics to link up amazing inference from external libraries - https://youtu.be/dLPgQRbVquo?si=L7Z5H0ZEhmYYYomX&t=901
