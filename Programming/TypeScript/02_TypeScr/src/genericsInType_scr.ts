// Generics in TypeScript allow you to create reusable components or functions that can work with multiple data types 
// they are all about relating two or more values with the same type

/* 
A central idea of understanding generics is to understand that they can infer(in many cases)the type arguments 
you pass them(maybe through return statatement or parameters values , etc...)without actually needing to pass any type arguments, 
this is the source of lot of the magic that you can do with generics
 */
// What and when to use generics
// https://youtu.be/EcCTIExsqmI?si=Ui1QlmcZkwHrXZuc&t=49 see this clip


// So let's create generic function, before that it worth to tell that generic function is a normal function with a type helper mapped top of it
// So we can give any name to our generic , as its functionality is not depend on names 


function getFirstElement<T>(array: T[]): T {
        return array[0]
}
/* Note: `function getFirstElement<1 | 2 | 3>(array: (1 | 2 | 3)[]): 1 | 2 | 3` , if you want this type of inference instead of this type of 
`function getFirstElement<number>(array: Number[]): number` , you should use this type of `extends string | number` , but it also add a constraint that 
array must be array of string or number 
More about generics constraints - https://www.typescriptlang.org/docs/handbook/2/functions.html#constraints
*/

// hover and see the in the place of T 
getFirstElement([1, 2, 3])
getFirstElement(['a', 'b', 'c'])
getFirstElement(['a', 'b', 'c'])

/* So what we observe here is that the T is changing dynamically according to the type of the array that we are passing
because with the help of generics ts can infer the param , return value if not been set explicitly */

// If ts not automatically infer or not infer correctly, you can do this , to tell it explicitly , and this is what we called assertion:

// So now in the place of T (means where we have written T) in place of that number will come
getFirstElement<number>([1, 2, 3])

// The way how its work is - https://youtu.be/EcCTIExsqmI?si=rtH06nH0Qt1uoXGp&t=227

// Now see isn't this thing we doing in assertions, basically in this way assertion work ,  queryselctor accepts generic type and that we define as HTMLImageElement
const image = document.querySelector<HTMLImageElement>('img');

// Fact : in ts almost in every place generics has been used , even we are using them without actually came to know that we are using them
// One more example  - https://youtu.be/EcCTIExsqmI?si=C1fJw81HpIteVcUT&t=300



// Generics in maps - https://youtu.be/EcCTIExsqmI?si=CrOJDA7sKC_5cktB&t=336    
// Generic in sets - https://youtu.be/dLPgQRbVquo?si=prdRa32FqA9tY36y&t=187



// getElementById not takes generic type but still we can define it after assignment operator
const input = <HTMLInputElement>document.getElementById('exammple-input');

// Maps and sets are deeply explained in separate js files


/* Here we passing two types of arguments : inside () is runtime argument and inside <> is type argument
means now map can only contain key of type string and value of type number 
*/

// so map take two generic types, first type for key and second type for value
const map = new Map<string, number>([['xyProperty', 5]])
map.set('a', 1)

console.log(map);

// Now its obvious to tell that generics can be pass to genrics(nested generics) :
const newMap = new Map<string, Map<string, number>>()

// Sets
const mySet = new Set<number>([1, 2, 3, 77, 88]) // if we want our Set will be only of Number type values


// Making a type that takes two generics, and its obvious to tell that we can 
type genricTypeExample<T, U> = {
        name: T,
        value: U
}

const obj: genricTypeExample<string, number> = {
        name: 'abc',
        value: 5
}

// Practical example of this:
/* We can also set default type and value for generic type like this: <Data = number> for seeting default type  
<Data = {name:'default_val'}>  , means by default(if we not pass any value in anchor brackets) it will be {name:'default_val'}
*/

/* so here if we not pass arguments for generic type here, generic type will default hold {text:'some_data'} , basically it is a default type argument, you can think of it as default runtime(that we pass for function params)argument but it is for default argument for generic type parameter instead of runtime parameter*/
// extends object means the value we pass to this generic param must be object , so extends keyword use to add a constraint to genric types

type APIResponse<Data extends object = { text: 'some_data' }> = {
        data: Data
        isError: boolean
}

// One more extends example:  type APIResponse<Data extends Record<string,number> > = {} , means Data generic type can accept any object , with n number of properties as of type string and values as number 

type userResponse = { status_code: number, text: string, CORS: boolean }

// We can also do like this, means blogresponse type takes APIResponse type and pass arg {text:userResponse} to its generic
type blogResponse = APIResponse<{ text: userResponse }>
// so now we can directly specify that this variable type is blogResponse

const res: blogResponse = {
        data: {
                text: {
                        status_code: 200,
                        text: 'Some blog data',
                        CORS: true
                }
        },
        isError: false
}

/* NOTE:You don't have to specify every single time which argument should be pass in generics , in most of the cases Ts automatically figure out that type
based on which the function take as a input or of which type of output it is returning */

const response: APIResponse<userResponse> = {
        data: {
                status_code: 200,
                text: 'Some response text',
                CORS: true
        },
        isError: false
}
const defaultResponse: APIResponse = {
        data: {
                text: 'some_data',
        },
        isError: false
}

// Example of generics with interface
/* interface KeyValueProcessor<T, U> {
    (key: T, val: U): void;
} */


/* So key to take away with generics is when you want to create a function or a type where some piece of data inside of it could be 
multiple different types but during the entire iteration(of that type or function) you want that type to be same thing, its a perfect use case 
for generics  */

// -------------------------------------------------------
// Understand Awaited<> and RetrunType<> - https://youtu.be/dLPgQRbVquo?si=VaKpvHC0ON5MhaWJ&t=357

// basically Awaited means something that pass in `Awaited type`, type argument means inside <>, you call await on that
// in below line of code , ts infers in a way `Promise<number> means promise will resolve to number value instead of returning promise it ensures it returns resolved value` 
type Result = Awaited<Promise<number>> // so ts infers that in Result variable number value will come 
// But if we only do:  type Result = Promise<number>, now it will infer that in Result variable Promise will come(as promises have to be awaited in order to return resolve values)

// ReturnType<> , does the same thing for functions, it returns that value, that function returns(that we pass in ReturnType generic type argument)
type Result1 = ReturnType<() => number>

// When you combined the two(Awaited and ReturnType), you get a type helper - https://youtu.be/dLPgQRbVquo?si=WXdabrFLbP-RLRZa&t=395 or see below example

/*
 * Understanding `GetPromiseReturnType`
 * This TypeScript utility extracts the resolved return type of a function that returns a `Promise<T>`.
 */

type GetPromiseReturnType<T extends (...args: any) => any> = Awaited<ReturnType<T>>;

// Hower Resultt and see, TS automatically infer that type `Resultt` takes `{ firstName: string; lastName: string; id: string; }` !!
type Resultt = GetPromiseReturnType<() => Promise<{ firstName: string; lastName: string; id: string; }>>;

// Example of incorrect usage that causes an error
// @ts-expect-error
// `string` is not a function, so TypeScript throws an error
type ErrorLine = GetPromiseReturnType<string>; // Type 'string' does not satisfy the constraint '(...args: any) => any'.

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





// One more example of `extends`
/* Let’s write a function that returns the longer of two values. To do this, we need a length property that’s a number. 
We constrain the type parameter to that type by writing an extends clause: */

function longest<Type extends { length: number }>(a: Type, b: Type) {
        if (a.length >= b.length) {
          return a;
        } else {
          return b;
        }
      }
       
      longest({length: 10}, {length: 100}) // this will work fine


        /*  But this is also work fine : Because TypeScript uses structural typing, meaning a type is valid as long as it matches the expected structure.
         It does not enforce class-based or nominal typing and both, arrays and strings object have length property and they extend that object with more 
         properties, and that's also the reason why we write extends clause */
      // longerArray is of type 'number[]'
      const longerArray = longest([1, 2], [1, 2, 3]);
      // longerString is of type 'alice' | 'bob'
      const longerString = longest("alice", "bob");
      // Error! Numbers don't have a 'length' property
//       const notOK = longest(10, 100); - Error : Argument of type 'number' is not assignable to parameter of type '{ length: number; }'.







// ------------------------------------------------------
// Some more examples:
// One more example of generics usecase - 'https://youtu.be/dLPgQRbVquo?si=xaOvLGW9WM2X9rjH&t=105' 

/* TypeScript understands that makeFetch returns a Promise<Data>, and since fetch(url).then(res => res.json()) is returning a Promise<Data>, TypeScript
infers that then will be called only when the promise resolves. But by default res.json() returns `Promise<any>` */
const makeFetch = <Data>(url: string): Promise<Data> => {
        return fetch(url).then(res => res.json())
}

makeFetch<{ title: string }>('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res))




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
          .then((res) => schema.parse(res)); // here it returns promise (every .then returns promise)
      };
      
      
makeZodSafeFetch("/api/endpoint", z.object({
        firstName: z.string(),
        lastName: z.string(),
        id: z.string()
      })).then((res) => {
        console.log(res); //  Correctly logs validated data
      }).catch((err) => {
        console.error("Validation failed:", err); //  Catches validation errors properly
      });
       */