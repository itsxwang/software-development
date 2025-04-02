// Some of the utility types we already see 

// 1. Partial 
interface veg {
    name : string
    color : string
    price : number
}

const vegLIst1: Partial<veg> = {
    name : 'cucumber'
}


// 2. Readonly
const vegList2: Readonly<veg> = {
    name : 'cucumber',
    color : 'green',
    price : 10
}

// 3. Pick
const vegList3: Pick<veg, 'name' | 'color'> = {
    name : 'cucumber',
    color : 'green'
}

// 4. Omit
const vegList4: Omit<veg, 'price'> = {
    name : 'cucumber',
    color : 'green'
}

// 5. Record
const vegList5: Record<string | number, veg> = {
    '1' : {
        name : 'cucumber',
        color : 'green',
        price : 10
    }
}




// 6. Exclude
/* Exclude<T, U>
Removes all types from T that are assignable to U.

Useful for filtering out specific types from a union.

Example: */

type A = "apple" | "banana" | "cherry";
type B = "banana" | "cherry";

type Excluded = Exclude<A, B>; // "apple"
// ✅ Explanation: "banana" and "cherry" are removed from A because they are in B. And only values in A will be assignable to Excluded Type
const exampleExcluded : Excluded = 'apple'


// Another example with built-in types:
type Primitive = string | number | boolean;
type NotString = Exclude<Primitive, string>;  // number | boolean , Btw this is just for showing how Exclude
const x: NotString = 42  ;

// Basically T(1st type argument) should be of union type when we use Exclude



// 7. Extract<T, U>
/* Keeps only types from T that are assignable to U.

Opposite of Exclude<T, U>.

Example: */

type secA = "apple" | "banana" | "cherry";
type secB = "banana" | "cherry";

type Extracted = Extract<secA, secB>; // "banana" | "cherry"
// ✅ Explanation: Only "banana" and "cherry" remain because they exist in both A and B.

// Another example with types:

type OnlyString = Extract<Primitive, string>;  // means only will contains string
const y: OnlyString = 's'
