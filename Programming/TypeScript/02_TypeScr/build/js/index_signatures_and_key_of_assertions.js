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
let id1_User3 = Symbol('User3-Id1');
let user3 = {
    name: "John",
    age: 30,
    [id1_User3]: 7
};
console.log(user3[id1_User3]);
// user3[id1_User3] = 20 Error !!  `Index signature in type 'User3' only permits reading.`
// And one more thing , if we do :
console.log(user3['random_property']); /* undefined , now you may thought isn't ts should throw error as `random_property` is not in user3 object, so why it not throw? The reason is simple ts think user3 may have this property and
ts not know the names of properties could be , it only knows that keys can be string | Symbol type, and their values could be string | number type, so ts thinks it going to return string | */
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
// console.log(user5[keyOf_User5 as keyof User5])
Object.keys(user5).map(key => {
    console.log(user5[key]);
});
console.log(typeof user5);
