/* This will cover:

Basic Usage of JSON.stringify
Replacer Function in Detail(2nd param of JSON.stringify)
The Third Parameter (Pretty Formatting)
Advanced Replacer Examples */

// 📌 1. Basic Usage of JSON.stringify()
const obj = { 
    name: "Alice", 
    age: 25, 
    skills: ["JS", "Python"], 
    details: { country: "USA", active: true }
};

console.log("Basic JSON.stringify:");
console.log(JSON.stringify(obj)); 
// Output: {"name":"Alice","age":25,"skills":["JS","Python"],"details":{"country":"USA","active":true}}


// 📌 2. Replacer Function - Controlling What Gets Stringified
// Before telling about replacer function, it worth to know about very simple usecase of 2nd param of JSON.stringify :
// Example : JSON.stringify({p:7,s:25,r:'of','d':'k'},['p']) => {"p":7} , so properties you pass in array will only going to come in output json string

// But what if callback as a argument to 2nd parameter of JSON.stringify instead of array 
console.log("\nUsing Replacer Function:");

// this function we will passed in 2nd param 
const replacer = (key, value) => {
    // 🔍 What Happens Step-by-Step?
    /* 
    1️⃣ Root Object Processing (key === "")
    key = "" because root object obviusly has no key , its value is just iteslf 
            Example here : 
root object is itself ``` { 
    name: "Alice", 
    age: 25, 
    skills: ["JS", "Python"], 
    details: { country: "USA", active: true } ```
}

    The first call to the replacer function is for the root object.
    If your function does not return anything (return;), it returns undefined, and the entire object is removed from JSON output.

    2️⃣ Processing Individual Keys ("name", "age")
    If key === "name", we return "ALICE" for the "name" key , for output JSON string .
    If key === "age", we return undefined (means this removes age from ouput JSON string).


    💡 If the root object itself is removed, nothing is left to process, even if we return "ALICE" later. And we get undefined
    So Always Return the Root Object 
    - To avoid deleting the entire object, we should return the root object as it is in every case. And that root object here will be return by third(last) return statement. 
    However you can still do, if (key === "") return value;  // To ensure the root object is returned, but its often not required depends on your useCase

 */


    console.log(`Processing key: "${key}" -> Value:`, value);
    
    // Removing 'age' from output, because if JSON.stringify() sees undefined while converting object to json it will omits that key in output json string , btw in array it will convert it to null

    // basically the values it return will comes in place of the value of corresponding key 
    if (key === "age") {
        return undefined; // Removes this key from JSON output
    }
    
    // Modifying 'name'
    if (key === "name") {
        return value.toUpperCase(); // Converts name to uppercase
    }

    return value; // Default return for all other keys
};

const jsonWithReplacer = JSON.stringify(obj, replacer);
console.log("\nFinal JSON Output:");
console.log(jsonWithReplacer);
// Output: {"name":"ALICE","skills":["JS","Python"],"details":{"country":"USA","active":true}}


// 📌 3. Third Parameter - Pretty Formatting (Indentation)
console.log("\nPretty Formatting:");

// basically it give 4 spaces indentation
const prettyJson = JSON.stringify(obj, null, 4);  // 4 spaces indentation , you can also provide string values for indentation , For example "\t"
console.log(prettyJson);
/* Output:
{
    "name": "Alice",
    "age": 25,
    "skills": [
        "JS",
        "Python"
    ],
    "details": {
        "country": "USA",
        "active": true
    }
}
*/

// 📌 4. Advanced Replacer Examples

// Example: Only include specific keys
console.log("\nInclude Only Certain Keys:");

const filterKeys = ["name", "skills"];  // Only allow these keys
const filteredJson = JSON.stringify(obj, (key, value) => 
    filterKeys.includes(key) || key === "" ? value : undefined // so we use key === "" to include root object
);
console.log(filteredJson);  
// Output: {"name":"Alice","skills":["JS","Python"]}


// Example: Masking Sensitive Information
console.log("\nMasking Sensitive Data:");

const user = { username: "admin", password: "12345", email: "admin@example.com" };

const maskSensitive = JSON.stringify(user, (key, value) => 
    key === "password" ? "*****" : value
);
console.log(maskSensitive);
// Output: {"username":"admin","password":"*****","email":"admin@example.com"}

// Convert Maps and sets to json string 

const replacerForMapSet = (key,val)  => {
    if (val instanceof Map) {
        console.log('Ineer (root)',val)
        // Here , [['a', 1],['b', 2],['c', 3]] , comes in fromEntries method argument which converts it to object
        return Object.fromEntries(val);
    }
    else if (val instanceof Set) {
        console.log('Ineer',val)
        // Here , [1, 2, 3, 4, 5] comes in from method argument which converts it to array 
        return Array.from(val);
    }
    // handling for key = "" (means root object)
    console.log(`key ${key} = ${val}`);
    return val;
}

const mapObj = new Map([
    ['a', 1],
    ['b', 2],
    ['c', 3]
])

const newSet = new Set([1, 2, 3, 4, 5]);

const mapJson = JSON.stringify(mapObj, replacerForMapSet);

console.log(mapJson);


const setJson = JSON.stringify(newSet,replacerForMapSet);

console.log(setJson);
// Output: {"a":1,"b":2,"c":3}