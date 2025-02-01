# Let's Get Straight to the Point! 

## What are Design Patterns?
Design patterns are reusable solutions to common problems in software design. They provide a structured approach to solving issues that frequently arise during software development. These patterns help make code more maintainable, scalable, and efficient by promoting best practices. Just a technical definition by ChatGPT that we not need often, just to revise.

## Types of Design Patterns

### Creational Patterns
Creational design patterns focus on object creation mechanisms, ensuring that objects are created in a way that is flexible, reusable, and scalable. These patterns help in ***decoupling**(this word explained below) the creation process* from the actual system, making it easier to manage and extend.

- **Singleton** – Ensures a class has only one instance.
- **Factory Methods** – Provides an interface for creating objects.
- **Builder** – Simplifies complex object construction.
- **Prototype** – Creates objects by cloning an existing object.

### Structural Patterns
Structural design patterns focus on object composition and relationships.

- **Adapter** – Bridges two incompatible interfaces.
- **Decorator** – Adds functionality to an object dynamically.
- **Facade** – Provides a simplified interface to a complex system.
- **Proxy** – Controls access to an object.

### Behavioral Patterns
Behavioral design patterns deal with object interaction and communication.

- **Observer** – Notifies multiple objects when a state changes.
- **Strategy** – Allows selecting an algorithm at runtime.
- **Command** – Encapsulates a request as an object.
- **State** – Allows an object to change behavior dynamically.

## Why Use Design Patterns?
- Improves code reusability and maintainability.
- Encourages best practices in software development.
- Makes code scalable and modular.
- Helps with code readability and team collaboration.

----------
 
## Some terminologies / Fancy words / Terms / ...(that we not understand above) Explained
- **Decoupling** -> In software design, decoupling means separating different parts of a system so they are independent of each other, making the code more modular(export / import becomes easy peasy), flexible, and easier to maintain.\
Coupling describes (especially in software stuff) the degree of interdependence between software modules. High coupling means that modules are closely connected and changes in one module may affect others, while low coupling indicates that modules are independent, and changes in one module have little impact on others  , so we focus on decoupling to make different parts of code more independent of each other . Factory Patterns are one way for decoupling .\
 **In the Context of Creational Design Patterns:**
When we say *"decoupling the creation process from the actual system,"* it means that:

1. The logic for creating objects is separated from the main system logic(like for example in some other class).
2. The system does not directly instantiate objects using `new ClassName()`.
3. Instead, specialized classes or methods (like *Factories*, *Builders*, or *Prototypes*) handle object creation.

*Practical Example:* 

1️⃣ *Without a Factory (Tightly Coupled)*
```
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

const myCar = new Car("Tesla", "Red");  // Direct object creation
```
🔴 Problem: Every time we create a Car, we must manually call `new Car`(brand, color). If object creation logic changes (e.g., default colors, validation, logging, etc.), we must update every instance of `new Car()` across our codebase.

2️⃣ *With a Factory (Decoupled)*
```
class Car {
  constructor(brand, color) {
    this.brand = brand;
    this.color = color;
  }
}

class CarFactory {
  static createCar(brand, color = "Black") {
    console.log(`Creating a car: ${brand}, Color: ${color}`);
    return new Car(brand, color);
  }
}

const myCar = CarFactory.createCar("Tesla");  // Uses default color (Black)
const myCar2 = CarFactory.createCar("BMW", "Blue");
```

🟢 ***Benefits of Using a Factory Pattern***: 
✅ Centralized Object Creation: If we need to change object creation logic, we only update the factory, not every `new Car()` in our code. \
✅ Default Values & Validation: The factory can set default values or validate inputs before creating an object. \
✅ Additional Functionality: We can log, cache, or modify objects before returning them.






----

# Each topic/Pattern is more deeply explained in specific files ! :)