// Generics in TypeScript allow you to create reusable components or functions that can work with multiple d ata types 

// What and when to use generics
// https://youtu.be/EcCTIExsqmI?si=Ui1QlmcZkwHrXZuc&t=49 see this clip

function getFirstElement<T>(array: T[])  {
        return array[0]
}

// hover and see the <T> changing its type dynamically according 
getFirstElement([1,2,3])
getFirstElement(['a','b','c'])
getFirstElement(['a','b','c',1])

// ----file in progress
