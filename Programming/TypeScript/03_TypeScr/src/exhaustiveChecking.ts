// Exhaustiveness checking
// The never type is assignable to every type; however, no type is assignable to never (except never itself). This means you can use narrowing and rely on never turning up to do exhaustive checking in a switch statement.

// For example, adding a default to our getArea function which tries to assign the shape to never will not raise an error when every possible case has been handled because shape will be narrowed down to never type by that time.

interface Circle {
    kind: "circle";
    radius: number;
  }
   
  interface Square {
    kind: "square";
    sideLength: number;
  }
   
// type Shape = Circle | Square;
 
// function getArea(shape: Shape) {
//   switch (shape.kind) {
//     case "circle":
//       return Math.PI * shape.radius ** 2;
//     case "square":
//       return shape.sideLength ** 2;
//     default:
//       const _exhaustiveCheck: never = shape;
//       return _exhaustiveCheck;
//   }
// }




// Adding a new member to the Shape union, will cause a TypeScript error:

/* interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle; // this will cause an error 
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;  //! Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
} */