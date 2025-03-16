// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types 
/*
A central idea of understanding generics is to understand that they can infer(in many cases)the type arguments you pass them(maybe through return statatement or parameters values , etc...)without actually needing to pass any type arguments, this is the source of lot of the magic that you can do with generics
 */
// What and when to use generics
// https://youtu.be/EcCTIExsqmI?si=Ui1QlmcZkwHrXZuc&t=49 see this clip
// So let's create generic function, before that it worth to tell that generic function is a normal function with a type helper mapped top of it
// So we can give any name to our generic , as its functionality is not depend on names 
function getFirstElement(array) {
    return array[0];
}
/* Note: `function getFirstElement<1 | 2 | 3>(array: (1 | 2 | 3)[]): 1 | 2 | 3` , if you want this type of inference instead of this type of
`function getFirstElement<number>(array: number[]): number` , you should use this type of `extends string | number` , but it also add a constraint that
array must be array of string or number */
// hover and see the in the place of T 
getFirstElement([1, 2, 3]);
getFirstElement(['a', 'b', 'c']);
getFirstElement(['a', 'b', 'c']);
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
const input = document.getElementById('exammple-input');
// Maps and sets are deeply explained in separate js files
/* Here we passing two types of arguments : inside () is runtime argument and inside <> is type argument
means now map can only contain key of type string and value of type number
*/
// so map take two generic types, first type for key and second type for value
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
/*
 * Breaking it Down:
 * - `T extends (...args: any) => any`: Ensures `T` is a function.
 * - `ReturnType<T>`: Extracts the return type of a T(T should be a function, because functions can only return,and we are expecting function inside T should return Promise that's why we give that to Awaited).
 * - `Awaited<ReturnType<T>>`: Resolves the value of Promise(the promise that return by the `ReturnType<T>`).
 *
 * ✅ So, `Resultt` becomes `{ firstName: string; lastName: string; id: string; }`.
 */
/*
 * What Does `T extends (...args: any) => any` Mean? 🤔
 * - It ensures that `T` **must** be a function.
 * - `(...args: any) => any` means "a function that takes any number of arguments and returns anything. Btw we can make it more safe like this: `(...args: any) => Promise<any>` "
 * - **So because of that constraint if `T` is not a function, TypeScript will throw an error.**
 * - This prevents invalid types (like `string`, `number`, `boolean`) from being passed to `GetPromiseReturnType<T>`.
 */
/*
 * 🔥 Final Summary
 * --------------------------------------------
 * | Code Part | Explanation |
 * |-----------|------------|
 * | `T extends (...args: any) => any` | Ensures `T` is a function |
 * | `ReturnType<T>` | Extracts the return type of `T` |
 * | `Awaited<ReturnType<T>>` | Resolves the inner type of a `Promise<T>` |
 * | `GetPromiseReturnType<() => Promise<{ firstName: string; lastName: string; id: string; }>>` | Extracts `{ firstName: string; lastName: string; id: string; }` |
 * | `GetPromiseReturnType<string>` | Causes a TypeScript error (since `string` is not a function) |
 * --------------------------------------------
 */
// ------------------------------------------------------
// Some more examples:
// One more example of generics usecase - 'https://youtu.be/dLPgQRbVquo?si=xaOvLGW9WM2X9rjH&t=105' 
/* TypeScript understands that makeFetch returns a Promise<Data>, and since fetch(url).then(res => res.json()) is returning a Promise<Data>, TypeScript
infers that then will be called only when the promise resolves. But by default res.json() returns `Promise<any>` */
const makeFetch = (url) => {
    return fetch(url).then(res => res.json());
};
makeFetch('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res));
export {};
// Another example - https://youtu.be/dLPgQRbVquo?si=SbIHzBM0W--T2VMm&t=265
// Another example(constraint in functions) - https://youtu.be/dLPgQRbVquo?si=f5iZId3RvySc2jp0&t=507 // this is about extends keyword
/* One more, Multiple type arguments example -  https://youtu.be/dLPgQRbVquo?si=G3RhLBwZ8tjzuta0&t=685
by seeing this we came to know that we can also make inference happen
between the arguments of a function with the help of generics (see last seconds of this video clip, to see what im trying to say)
*/
/* One of the most powerful thing you can do in ts is to use generics to link up amazing inference from external libraries -
- Zod is explained in separate file(zodLibrary), and its example is with generics is here */
/* import { z } from 'zod';
const makeZodSafeFetch = <TData>(
        url: string,
        schema: z.Schema<TData>
      ): Promise<TData> => {
        return fetch(url)
          .then((res) => res.json())
          .then((res) => schema.parseAsync(res)); // ✅ Use parseAsync to properly return a Promise
      };
      
      
makeZodSafeFetch("/api/endpoint", z.object({
        firstName: z.string(),
        lastName: z.string(),
        id: z.string()
      })).then((res) => {
        console.log(res); // ✅ Correctly logs validated data
      }).catch((err) => {
        console.error("Validation failed:", err); // ✅ Catches validation errors properly
      });
       */ 
