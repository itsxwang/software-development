/* 1️⃣ Basics of JSON.parse()
The JSON.parse() method is used to convert a JSON string into a JavaScript object.

*/

// Basic Example 
const jsonString = '{"name": "Alice", "age": 25}';
const obj = JSON.parse(jsonString);
console.log('first output : convert json string to object',obj,'\n--------------------------\n ');  
// Output: { name: 'Alice', age: 25 }

/* 
2️⃣ The Second Parameter: reviver Function
What is the reviver Function?
The reviver function is an optional second parameter that allows you to modify values while parsing JSON.
*/

/*
JSON.parse(jsonString, (key, value) => { 
    return modifiedValue;
});

key: The current property name being processed.
value: The value associated with that key.
Return Value:
If you return undefined, the key will be removed (from parsed object)
If you return a modified value, it replaces the original one.
*/

/* 💡 The reviver function executes recursively from inside the objects back up to corresponding root object where those properties are located.Unlike json.stringify replacer that goes from root to inside the object

Let’s take an example JSON: */
const jsonString2 = '{"name":"Alice","car":"vw","details":{"age":25,"location":"USA","obInsideObject":{"a":1,"b":2}}}';

// Using this reviver:

const parsed = JSON.parse(jsonString2, (key, value) => {
    console.log(`Processing key: "${key}", Value:`, value);
    return value;  // Returning the value without modification
});
// Output 
/* Processing key: "name", Value: Alice
Processing key: "car", Value: vw
Processing key: "age", Value: 25
Processing key: "location", Value: USA
Processing key: "a", Value: 1
Processing key: "b", Value: 2
Processing key: "obInsideObject", Value: { a: 1, b: 2 }
Processing key: "details", Value: { age: 25, location: 'USA', obInsideObject: { a: 1, b: 2 } }
Processing key: "", Value: {
  name: 'Alice',
  car: 'vw',
  details: { age: 25, location: 'USA', obInsideObject: { a: 1, b: 2 } }
} */

console.log(parsed,'\n--------------------------\n ');

// 4️⃣ Removing a Key with reviver
const noAgeProperty = JSON.parse(jsonString2, (key, value) => {
    if (key === "age") return undefined; // Remove "age"
    return value;
});
console.log(noAgeProperty);

/* 5️⃣ Practical Example :
Converting Dates Automatically , By default, JSON.parse() does not parse strings into Date objects obviously it treat them string
*/


// Problem
const jsonString3 = '{"event":"Conference","date":"2025-05-10T14:00:00.000Z"}';
/* const parsedJsonString3 = JSON.parse(jsonString);
console.log(parsedJsonString3.date instanceof Date);  
Output: false (It remains a string!) */



// Solution: Use reviver to Convert Dates

const parsedJsonString3  = JSON.parse(jsonString3, (key, value) => {
    if (key === "date") return new Date(value);
    return value;
});

console.log(parsedJsonString3.date instanceof Date);  
// Output: true (Now it's a Date object!)
console.log(parsedJsonString3.date.toISOString());  
// Output: 2025-05-10T14:00:00.000Z



/* 8️⃣ Handling Arrays in reviver
Arrays are treated the same way as objects. */

// Let's we wanna parse array to set directly from jsonString
const jsonStringArray = '{"numbers":[1,2,3,4],"words":["hello","world"]}';

const parsedJsonStringArray = JSON.parse(jsonStringArray, (key, value) => {
    if (Array.isArray(value)) return new Set(value.map(item => `${item}`));
    return value;
});

console.log(parsedJsonStringArray);
/* Output:
{
  numbers: {"1", "2", "3", "4"},
  words: {"hello", "world"}
}
*/

// Now let's say we wanna convert objects to maps directly from jsonString

const jsonStringObjects = '{"objects":[{"a":1,"b":2},{"c":3,"d":4,"e":{"p":1}}],"l":1}';

const parsedJsonStringObjects = JSON.parse(jsonStringObjects, (key, value) => {

    if (!key) {
        return new Map(Object.entries(value));
    }

    return value;
})

console.log(parsedJsonStringObjects,'\n--------------------------\n');


// Btw : reviver callback also can take 3rd param context , which has source property that contains the original JSON string
/* Now Difference between context and value param is:
For root objects context will be empty object but value never empty until value of the property is really an empty */
// Sample JSON data as a string
const bigJSON = '{"p":1,"s":2,"d":{"ps4":122 , "nest":{"Qm":"Quantum-mechanics"}}}';

// Parsing the JSON using a reviver function with context parameter
const bigObj = JSON.parse(bigJSON, (key, value, context) => {
  console.log('Key:', key);
  console.log(`Value for ${key}:`, value);
  
  // Logging additional information from the context object
  if (context && context.source) {
    console.log('Source of JSON:', context.source);
  }
  else {
    console.log('For root objects context will be empty object but values never empty, see yourself:',context)
  }
  // Returning the value as is or modifying it based on conditions
  
  return value;
});

// Outputting the parsed object
console.log(bigObj);