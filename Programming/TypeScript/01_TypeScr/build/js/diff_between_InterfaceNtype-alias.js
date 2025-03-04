"use strict";
// In TypeScript, both interfaces and type aliases are used to define the shape of objects, but they have some key differences:
// Now, `MergedUser` has both `name` and `age`
const person = { name: "Alice", age: 25 };
// Interfaces cannot do this.
// 5. Performance & Compilation
// Interfaces are more efficient during compilation and preferred for objects & classes.
// Type aliases are better for complex types (unions, intersections).
// When to Use What?
// - Use `interface` for objects, class structures, and when you need declaration merging.
// - Use `type alias` for unions, tuples, and other types.
