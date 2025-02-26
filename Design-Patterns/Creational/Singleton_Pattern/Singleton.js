/* Singleton Pattern -> 
Purpose:
Ensures that a class has only one instance and provides a global point of access to it.

How It Works:
Restricts object creation for a class.
Ensures only one instance is shared across the entire application.
Commonly used in logging, configuration management, and database connections. */


// CODE
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
        return Singleton.instance;
    }
  
  }
  console.log(Singleton.instance); // undefined  , as Currenlty Singleton instance is not created
  const instance1 = new Singleton();
  const instance2 = new Singleton();

  console.log(instance1 === instance2); // true , as both are pointing to same object (proves both are same instance)

  instance1.name = "John"; // chanage in one instance leads to change in other instances also 
  console.log(Singleton.instance) // Singleton { name: 'John' } 
  console.log(instance1) // Singleton { name: 'John' }
  console.log(instance2) // Singleton { name: 'John' }

// Use Cases:
// --> Managing a single database connection.
// --> Implementing global configurations.
// --> Creating a shared caching system.
console.log(Singleton.instance)
