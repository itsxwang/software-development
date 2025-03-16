//* ___________________________________________________________

//* Enums in TS

//* ___________________________________________________________

// //? Enums in TypeScript are commonly used when you want to represent a set of related values
// and choose one value from multiple options. Enums provide a convenient way to define a set of 
// named values and associate them with specific meanings.

// //* In TypeScript, when enum constants are not explicitly assigned numeric values, they are 
// automatically assigned incremental numeric values starting from 0. The default numeric value for 
// the first enum constant is 0, and subsequent enum constants receive values incremented by 1.

//* ___________________________________________________________

//* Example

enum Direction {
  Up,
  Down,
  Left,
  Right
}

// Non string enums like this:
/*  
{
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
   ----- So numbers are also assigned each enum key, if enum array elements are not explicitely assigned string values ------
    0: 'Up',
    1: 'Down',
    2: 'Left',
    3: 'Right'
}



*/






const UpDirection = Direction.Up;

console.log(UpDirection); // Output: 0
// A one practical example -> https://youtu.be/J3DcFIFE7SE?si=txw42cVnr1LzDo3A&t=150


// let's say we have player in game and we want to represent the direction of the player

// But enums considered Harmful - See this video -> https://youtu.be/jjMbPt_H3RQ?si=mLYUGkwlS-EdQKKo by Matt Pocock


enum StringEnum {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
enum StringEnum {
    p = 'p'
}
// Enums can be extended but existing properties are not allowed to be changed
// String Enums kind same behave same like object
console.log('StringEnum',StringEnum); // Output: {Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right'}

// We can also make enum with const, that make them just on compile time and not on runtime, means only at type level
const enum ConstEnum {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right'
}
// console.log(ConstEnum); // 'const' enums can only be used in property or index access expressions or the right hand side of an import declaration or export assignment or type query.

// But we can use Pojo(Plain Old JavaScript Object) instead of enums - https://youtu.be/jjMbPt_H3RQ?si=YV0dhjhyrD75DYuQ&t=311

const PojoEnum = {
  Up: 'Up',
  Down: 'Down',
  Left: 'Left',
  Right: 'Right'
} as const;

// We can use this PojoEnum like this: Basically in T Generic here Object `PojoEnum` type is coming, which is 
// `{Up: 'Up', Down: 'Down', Left: 'Left', Right: 'Right'}` type, and then we are getting the keys of this object `[keyof T]`
// then we are getting the values of this object
type ObjectValues<T> = T[keyof T];

type pojoenum = ObjectValues<typeof PojoEnum>;
function getEnumValue(value: pojoenum) {
  return value;
}


getEnumValue(PojoEnum.Up); // Output: Up, But since getEnumValue function param not take enum type, so its not compulsory to pass value like this `enumName.key`
getEnumValue('Right'); // Output: Right, so this also works and this is the advantage of using Pojo over enums






