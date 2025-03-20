// any 
// ------------------------------------------------------------
// Allows any type of value to be assigned

let anyType: any = "Hello";
anyType = 1;
anyType = true;
// can perform any operation on anyType
anyType.toUpperCase();
anyType.toFixed();
anyType();

// unknown
// ------------------------------------------------------------
// Similar to any, but more type-safe as operations require type checking

let unknownType: unknown = "Hello";
// can perform any operation on unknownType
/* unknownType.toUpperCase();
unknownType.toFixed();                           //! Gives Error - 'unknownType' is of type 'unknown'.
unknownType();
*/

// so first we have to check(narrowing) the type of unknownType, before performing any operation on it
if (typeof unknownType === "string") {
    unknownType.toUpperCase();
}
else if (typeof unknownType === "number") {
    unknownType.toFixed(); 
}
else if (typeof unknownType === "function") {
    unknownType();
}

// or can do this also 
(unknownType as string).toUpperCase();
(unknownType as number).toFixed();
(unknownType as Function)();
// its worth to mention that assertions can be wrong also, and like type annotation not affect runtime behavior of code, even flexibility of unknown on the next level 
// so we can assert type unknown to anything

// One practical example - https://youtu.be/iJkaAJUzeWQ?si=_g-DHC5uJu9U-IC-