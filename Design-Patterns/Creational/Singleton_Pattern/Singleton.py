"""
We can use `__new__` dunder method to implement the Singleton pattern in Python.   
The `__new__` method is a special method responsible for creating a new instance of a class.
It is called before the `__init__` method and is used to control the creation of a new instance.
The `__new__` method is a static method (though it doesn't need to be explicitly decorated as such)
and takes the class as its first argument, followed by any additional arguments that are passed
to the class constructor.
"""

class Singleton:
    """
    A class that demonstrates the use of the `__new__` method to implement the Singleton pattern.
    The Singleton pattern ensures that only one instance of the class is ever created.
    """

    _instance = None  # Class-level variable to store the single instance

    def __new__(cls, *args, **kwargs):
        """
        Override the `__new__` method to control instance creation.
        If an instance does not already exist, create one. Otherwise, return the existing instance.
        """
        if cls._instance is None:
            print("Creating the instance")
            cls._instance = super().__new__(cls)  
            """ Here super() refers to the parent class `<class 'object'>` 
            This ensures that the instance creation logic from the parent class is executed.
            The __new__ method of the parent class(<class 'object'>) is responsible for actually creating the instance of the class(here `Singleton` named class).  
            """

        return cls._instance  # Return the instance (new or existing)

    def __init__(self, value):
        """
        The `__init__` method initializes the instance.
        This method is called after `__new__` and is used to set instance attributes.(we already know this)
        """
        self.value = value


# Example usage of the Singleton class
# Creating instances of the Singleton class
singleton1 = Singleton(10)
singleton2 = Singleton(20)

# both instances Singleton(10) and Singleton(20) pointing to the same object in the memory , because of our logic we write in __new__ above
# that's why `value` attribute is shared between both variables , and the value now becomes 20 as `singleton2.value = 20` runs in __init__ , when `singleton2` object is created

# Both instances are the same (Singleton pattern ensures only one instance exists)
print(singleton1 is singleton2)  # Output: True

# The value is shared between instances because they are the same object in the memory , and we already know `singleton2` object creation updates the value of `value` attribute
print(singleton1.value)  # Output: 20
print(singleton2.value)  # Output: 20

# Now if we do , as both variables are pointing to same object therefore singleton2.value also == 77
singleton1.value = 77
print(singleton1.value == singleton2.value )  # True , because there is only one instance that is created(when we create `singleton1` object) , first time only (we already know this)


"""
Key Points:
- `__new__` is called to create a new instance of the class.
- It must return an instance of the class (or a subclass).
- If `__new__` does not return an instance of the class, the `__init__` method will not be called.
- `__new__` is often used in cases where you need to control the creation of immutable objects,
  implement singletons, or customize instance creation.

When to Use `__new__`:
- Immutable Objects: When working with immutable objects like tuples or strings, you might need
  to override `__new__` to customize instance creation.
- Singleton Pattern: To ensure that only one instance of a class exists.
- Custom Instance Creation: When you need to control how instances are created, such as returning
  instances of a different class or modifying the instance before it is returned.
"""
