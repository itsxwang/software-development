// See this video by Javascript Mastery `https://youtu.be/hLgUTM3FOII?si=HbsoZXxd2Wu3tc2p`

// ----------------------------------------------
// Sets 

// Note : 1 major difference sets and arrays is: sets are not-ordered and unique , arrays are ordered

// Like:
console.log([66,7][1]); // 7
console.log(new Set([667])[0]  ); // undefined

const myArray = [7, 2, 3, 4, 5,7,5];
const mySet = new Set(myArray);
// convert set back to array , after removing duplicates , using spread operator
const myArray2 = [...mySet];
console.log(myArray2)
console.log(mySet) 



// Different methods of sets
// add , delete , has
mySet.add(10);
mySet.delete(2);
console.log(mySet.has(10));
console.log(mySet);
// mySet.clear() // clear set `mySet`

console.log(mySet.size) // return number of elements in set

// and basically set has all math set methods like intersection , union , difference etc ... , that we already know or read it from docs 


// ----------------------------------------------
// Maps - https://youtu.be/hLgUTM3FOII?si=j3mvWFEBj4QMD-yO&t=462
// the map object holds key value pairs , and remembers the original insertion order of the keys
// Maps allowed you to map arbitrary values to other values , and most importantly you can use object as keys
// Maps allows you to manipulate data easily

const myMap = new Map([['name', 'John'], ['age', 22]]);
console.log(myMap)

// What problem map solves - https://youtu.be/hLgUTM3FOII?si=qt6NpZO65ip8ZyGQ&t=538
// Example : https://youtu.be/hLgUTM3FOII?si=eZZuVEftscdC0new&t=556

// We can use object as keys  , and keep track of all objects keys , unlike objects in which one object key override other
// Object

const obj1 = {
    
}
const firstKey = {a:'1'};
const secondKey = {b:'1'};
obj1[firstKey] = 1;
obj1[secondKey] = 2;
console.log(obj1) // { '[object Object]': 2 } , one object key override other as we can see , but we know they are different objects , but object keys treat them as same single object

// Now map 
const map1 = new Map();
map1.set(firstKey, 1); // so set method is another way of adding key value pairs in Map 
map1.set(secondKey, 2);
console.log(map1) // Map(2) { { a: '1' } => 1, { b: '1' } => 2 } , and that's we said `you can use object as keys in Maps`


// More Map methods
// for deleting a key , we use delete method
map1.delete(firstKey)  
console.log(map1)

// has() return true , if key is present in map 
console.log(map1.has(firstKey)) // false

console.log(map1.has(secondKey)) // true


// same like python get dictionary method
console.log(map1.get(secondKey)) // 2

// like set , map also has size property 
console.log(map1.size)

// you can directly iterate on keys and values of maps unlike objects, because maps store particular key and its corresponding value in one array

for (const [key, value] of map1) {
    console.log(`key is ${key} and value is ${value}`)
}

/* but in objects this thing is little bit long     
for (const key in obj1) {
    console.log(`key is ${key} and value is ${obj1[key]}`)
}   */
/* or object.keys(obj1).forEach(key => console.log(`key is ${key} and value is ${obj1[key]}`))
 or Object.entries(obj1).forEach(([key, value]) => console.log(`key is ${key} and value is ${value}`))
 */



// And because maps are ordered and made using [] we can use array destructuring syntax for destructure maps
const map3 = new Map([['a', 1], ['b', 2]]);
console.log(map3) // Map(2) { 'a' => 1, 'b' => 2 }
const [keyA , keyb] = map3
console.log('first key',keyA) // [ 'a', 1 ]
console.log('second key',keyb) // [ 'b', 2 ]

// We can also easily extend maps like objects
const map4 = new Map(map3);
map4.set('c', 3);
console.log('map4 is',map4) 

// like objects using structuredClone() method can also be use to deepCopy maps 
const map5 = structuredClone(map4);
map5.set('d', 4);
console.log('map5 is',map5 , 'and map4 is still',map4)

// Maps are equally able to extend as object(as objects can be extended with spread operator) , because maps are just iterable just make a new map with old map values as argument 

let map6 = new Map(map4);

// or you can also use spread operator for extend maps also 
// map6 = new Map([...map4]);
map6.set('e', 5);
console.log('map6 is',map6)



// Converting map to object so easy , just Object.fromEntries()

// --------------------------------------
// Now when to use maps 
// delete obj[key] , is slower than map.delete(key)
// so maps are fast and especially very good in case , it performs better than objects if you frequently adding and removing keys 

// For more ----
// https://youtu.be/hubQQ3F337A?si=YqYrJs9UPJ9u7Qh6 see this clip by Steve (Builder.io)

// One advantage that Objects and Arrays have over maps and sets - https://youtu.be/hubQQ3F337A?si=24WH1KBuB9r6PFkS&t=214

/* for converting maps and sets to json string , see file `stringifyMethod_in _detail`
for parse objects and arrays from jsonString to maps and sets directly, see file `parseMethod_in_detail`
Btw :here is the code of doing that (serializing(converting maps and sets to json string) and deserializing(converting json string to maps and sets) -  */

let anyValue = new Map([['a', 1], ['b', 2]]);
const valueMapOrSet = JSON.stringify(anyValue, (key, value) => {
    if (value instanceof Map) {
        return { __type: 'Map', value: Object.fromEntries(value) };
    }
    if (value instanceof Set) {
        return { __type: 'Set', value: Array.from(value) };
    }
    return value;
});

console.log(valueMapOrSet)
let parsObj = JSON.parse(valueMapOrSet, (key, value) => {
    if (value?.__type === 'Set') {
        return new Set(value.value);
    }
    if (value?.__type === 'Map') {
        console.log('Finally root object comes in value see: ',value)
        return new Map(Object.entries(value.value));
    }
    console.log('value=',value)
    return value;
});
console.log(parsObj)


// So when you should object vs map , and set vs array - https://youtu.be/hubQQ3F337A?si=frJKKMDHjz6Hu56K&t=298


var foo = 3;
foo = false;