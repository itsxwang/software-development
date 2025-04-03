// https://youtu.be/8B514jlvkqE?si=HAshzy4culZnH15i , see this video by `Steve Griffith - Prof3ssorSt3v3`

/* https://youtu.be/8B514jlvkqE?si=i_ltw-iIW7Qsgkuv&t=17 - Strong References 

- So by default js have strong references; means if any one of the variable hold reference to a value , 
then that value not going to be garbage collected by garbage collector
*/

/* https://youtu.be/8B514jlvkqE?si=ACtYb84fDr9oLfx3&t=214 - Weak References
When we talking about weak reference in js we generally talk about WeakSets and WeakMaps
- Normal sets holds strong references

WeakSet:
WeakSets are designed to store unique objects with weak references, allowing for automatic garbage collection of objects
when they are no longer in use. This means that WeakSets do not provide methods like keys(), values(), or entries(), nor do
they support iteration with forEach(). Additionally, they do not have a size property, as the size of a WeakSet could
change as objects are garbage collected, and exposing the size property would not provide accurate information.
To check if a specific object is contained in a WeakSet, you can use the has() method, which returns a boolean indicating whether the object still exists in the WeakSet.
The inability to directly view or iterate through the contents of a WeakSet is by design, as it ensures that the contents
can be garbage-collected while your algorithm is still running, which helps to reduce memory consumption and prevent leaks.

All values must be objects unlike normal Set that can hold any type of value, 
not allowed to loop through them(means no for-each) like normal sets,
every object in the WeakSet has weak references, means - https://youtu.be/8B514jlvkqE?si=NnhQlujZsuAbITid&t=309

What's the reason of that why we can't loop through WeakSet - https://youtu.be/8B514jlvkqE?si=neFRIOwDQKhLadk6&t=515



*/
// Example of WeakSet
const ws = new WeakSet();
const obj = { name: 'John' };
ws.add(obj);
console.log(ws) // WeakSet { <items unknown> }
console.log(ws.has(obj)); // true

// Now weakMap
/* 
A WeakMap in JavaScript is a collection of key-value pairs where the keys must be objects and the values can be of any data type.
Unlike a Map, a WeakMap does not create strong references to its keys, allowing the garbage collector to remove objects that are only referenced by 
WeakMaps when they are no longer in use.
This feature makes WeakMaps useful for storing metadata associated with objects without affecting their lifetime.
WeakMaps are not iterable and do not have some of the properties that Maps have, such as .forEach and .size.
Unlike WeakSet , you can access value of WeakMap 
*/

const wm = new WeakMap();
let obj2 = { name: 'John' };
wm.set(obj2, 'value');

// Create a new reference for this { name: 'John' } object
newReferenceToObj = obj2;
obj2 = null 
console.log(wm) // WeakMap { <items unknown> }
console.log(wm.has(obj2)); // false , because obj2 is null and wm don't have reference to null(obviously it is primitive type also , so how it can have reference also)
console.log(wm.has(newReferenceToObj)); // true beacause(btw its obvious because `newReferenceToObj` just a reference to the object that we store in `wm` WeakMap) - https://youtu.be/8B514jlvkqE?si=l_oCd6rEOqT--P4_&t=857
console.log(wm.get(newReferenceToObj)); // 'value'

