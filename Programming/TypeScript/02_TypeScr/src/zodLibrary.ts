// Zod makes TS even better - See this video by `Web Dev Simplified` https://youtu.be/9UVPk0Ulm6U?si=hul_pR17jec3CGze



// Zod is a validation library (specifically schema validation library)
// UseCase - https://youtu.be/9UVPk0Ulm6U?si=ipw4dHhT5zOWFFnK&t=40
// Basic Usage - https://youtu.be/L6BE-U3oy80?si=Iim-pCgUDL_bZgGi&t=77
    // - z.infer to make type annotations -  https://youtu.be/L6BE-U3oy80?si=4L1MxFBGc18bzLXC&t=204
    // - Basic Validation for particular types

// Practical example - https://youtu.be/9UVPk0Ulm6U?si=f9V7RpIJYR6E0px4&t=311


// ---------------------------
import { z } from 'zod';

const something = ['s', 'sk'] as const; // as const means it readonly array and we can't change it 
type SomethingType = typeof something;
// something.push('sdsd'); // will throw error

// first example
const mySchema = z.string();
const result = mySchema.safeParse('Some_string');



if (!result.success) {
  console.error(result.error);  // This logs the Zod validation error
} else {
  console.log(result.data); // Valid string data
}

// Second Example

enum Nicknames {
  Alice,
  Bob,
  Charlie 
}

const UserSchema = z.object({
  name: z.string().min(1),
  age: z.number().gt(0,'Custom error can also be make'), // will handle negative numbers and 0 as well  
  email: z.string().email().default("example@gmail.com").optional(),
  hobby:z.enum(['Programming','Weight Lifting']),
  nicknames  : z.nativeEnum(Nicknames, {required_error: "Nicknames is required"}  )  
})

// to keep code DRY, we can use z.infer<typeof Schema>
type UserType = z.infer<typeof UserSchema>

const user:UserType= {
  name: "Alice",
  age: 25,
  email: "alice@gmail.com",
  hobby: "Programming",
  nicknames: Nicknames.Alice  
}
console.log("UserSchema", UserSchema.parse(user));  // {name: 'Alice', age: 25, email: 'alice@gmail.com', hobby: 'Programming'}


// So we can also access particular element of the schema like this
console.log(UserSchema.shape.hobby.Enum)  


// Object has really cool things to do with 
console.log("UserSchema.shape",UserSchema.shape);  // it will give us the shape of the object and we can use it to create a new object

const UserSchema2 = z.object({
  ...UserSchema.shape,
  // we can also make custom validation like this 
  likes: z.custom<SomethingType>((val) => 
    Array.isArray(val) && 
    val.length === 2 && 
    val[0] === 's' && 
    val[1] === 'sk'
  )
})  

type UserType2 = z.infer<typeof UserSchema2>
const user2:UserType2 = {
  name: "Alice",
  age: 25,
  email: "alice@gmail.com",
  hobby: "Programming",
  nicknames: Nicknames.Alice,
  likes: something
}
console.log("UserSchema2",UserSchema2.parse(user2));  // {name: 'Alice', age: 25, email: 'alice@gmail.com', hobby: 'Programming', nicknames: 0}

// partial just make the object optional, btw we also have deepPartial() which also make the nested objects optional
const UserSchema3 = UserSchema.partial(); 
type UserType3 = z.infer<typeof UserSchema3> // hover over UserType3 and see the difference, it make all the properties optional by putting ? in front of the properties
const user3:UserType3 = {
  name: "Alice",
  age: 25
} 
console.log("UserSchema3",UserSchema3.parse(user3));  // {name: 'Alice', age: 25}

// we can also make certain properties required by using .required(), its useful when we have lot of optional props and just wanna make certain props required
const UserSchema4 = UserSchema.required({
  email: true

})  
type UserType4 = z.infer<typeof UserSchema4>
const user5:UserType4 = {
  name: "Alice",
  age: 25,
  email: "alice@gmail.com",
  hobby: "Programming",
  nicknames: Nicknames.Alice  
}
console.log("UserSchema4",UserSchema4.parse(user5));  // {name: 'Alice', age: 25}

// pick and omit are used to pick or omit certain properties from the object, if prop alread exist it overrides the existing prop
const UserSchema5 = UserSchema.pick({name: true, age: true})
// so interface can also be used
interface UserType5 extends z.infer<typeof UserSchema5> {}
const user6:UserType5 = {
  name: "Alice",
  age: 25,
}
console.log("UserSchema5",UserSchema5.parse(user6));  // {name: 'Alice', age: 25}

// extend is used to extend the object with new properties
// merge can be used to merge schemas 
const FruitsSchema = z.object({
  apple: z.number(),
  banana: z.number()
})
const VegetablesSchema = z.object({
  tomato: z.number(),
  potato: z.number()
})
const drinksSchema = z.object({
  water: z.number(),
  juice: z.number()
})

const GrocerySchema = FruitsSchema.merge(VegetablesSchema).merge(drinksSchema)
type GroceryType = z.infer<typeof GrocerySchema>
const grocery:GroceryType = {
  apple: 1,
  banana: 2,
  tomato: 3,
  potato: 4,
  water: 5,
  juice: 6,
  // juices: 6
}
console.log("GrocerySchema",GrocerySchema.parse(grocery));  // {apple: 1, banana: 2, tomato: 3, potato: 4}

// passthrough is used to pass the value to the next schema
const UserSchema6 = z.object({
  name: z.string(),
  age: z.number()
}).passthrough()
type UserType6 = z.infer<typeof UserSchema6>
const user7:UserType6 = {
  name: "Alice",  
  age: 25,
  email: "alice@gmail.com"
}
console.log("UserSchema6",UserSchema6.parse(user7));  // {name: 'Alice', age: 25, email: 'alice@gmail.com'}


