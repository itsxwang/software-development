// In TypeScript, both interfaces and type aliases are used to define the shape of objects, but they have some key differences:

// 1. Syntax & Definition
// Interface:
interface User {
    name: string;
    age: number;
  }
  
  // Type Alias:
  type UserType = {
    name: string;
    age: number;
  };
  
  // Both look similar when defining object shapes.
  
  // 2. Extending (Inheritance)
  // Interfaces can be extended using `extends`:
  interface Employee extends User {
    salary: number;
  }
  
  // Type aliases use intersections (`&`) for extension:
  type EmployeeType = User & { salary: number };
  // Interfaces are generally preferred for extending.
  
  // 3. Merging & Declaration Merging
  // Interfaces can merge when declared multiple times:
  interface MergedUser {
    name: string;
  }
  
  interface MergedUser {
    age: number;
  }
  // Now, `MergedUser` has both `name` and `age`
  const person: MergedUser = { name: "Alice", age: 25 };
  
  // Type aliases CANNOT merge:
  type AliasUser = { name: string };
//   type AliasUser = { age: number }; // ❌ Error: Duplicate identifier 'AliasUser'
  
  // 4. Can be Used for Other Types?
  // Interfaces can only define object structures.
  // Type Aliases can define primitives, tuples, unions, and function types:
  type ID = string | number; // ✅ Works with union types
  type Coordinates = [number, number]; // ✅ Works with tuples
  
  // Interfaces cannot do this.
  
  // 5. Performance & Compilation
  // Interfaces are more efficient during compilation and preferred for objects & classes.
  // Type aliases are better for complex types (unions, intersections).
  
  // When to Use What?
  // - Use `interface` for objects, class structures, and when you need declaration merging.
  // - Use `type alias` for unions, tuples, and other types.

 
