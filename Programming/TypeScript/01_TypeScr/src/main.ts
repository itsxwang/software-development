let username= "John Doe";

console.log("Hello " + username);

/* tsc ./main.ts --outFile ./main.js
/* or just run `tsc` , it also does the same thing but it work only if in tsconfig file we specified rootDir*/
// now if you run this command , it will create a main.js file , so basically when we run this  command typescript compiler will convert our main.ts file to main.js */

username = 'dcd';
console.log("Hello " + username);
/* so everytime we make a change in ts we have to recompile our ts file to make those same changes in js file , but we can use 
`tsc ./main.ts -w`, now if we make changes in main.ts file it will automatically recompile our js file
 */

// console.log(7/'7'); type coercion not allowed in typescript , however it is allowed in javascript