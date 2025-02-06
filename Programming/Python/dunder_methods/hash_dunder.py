# The __hash__() method is a special method in Python that is used to return an integer
# representing the hash value of an object. This hash value is used in hash-based collections
# like dictionaries and sets to quickly locate, insert, and delete objects.

# The hash value should remain the same for an object as long as the object is not modified.
# If two objects are considered equal (using the __eq__() method), they must have the same hash value.

# Let's create a simple class to demonstrate how __hash__() works.

class Person:
    def __init__(self, name, age):
        """
        Initialize a Person object with a name and age.
        
        :param name: The name of the person.
        :param age: The age of the person.
        """
        self.name = name
        self.age = age

    def __eq__(self, other):
        """
        Define equality between two Person objects.
        
        Two Person objects are considered equal if they have the same name and age.
        
        :param other: Another Person object to compare with.
        :return: True if the objects are equal, False otherwise.
        """
        if isinstance(other, Person):
            return self.name == other.name and self.age == other.age
        return False

    def __hash__(self):
        """
        Return the hash value of the Person object.
        
        The hash value is computed based on the name and age of the person.
        This ensures that two Person objects that are equal (according to __eq__)
        will have the same hash value.
        
        :return: An integer representing the hash value.
        """
        # We use the built-in hash() function to compute the hash of a tuple containing
        # the name and age. This is a common practice to combine multiple attributes
        # into a single hash value.
        return hash((self.name, self.age))

    def __repr__(self):
        """
        Return a string representation of the Person object.
        
        This is useful for debugging and logging.
        
        :return: A string representation of the object.
        """
        return f"Person(name={self.name}, age={self.age})"

# Example usage:

# Create two Person objects with the same attributes.
person1 = Person("Alice", 30)
person2 = Person("Alice", 30)

# Check if the two objects are equal.
print(f"Are person1 and person2 equal? {person1 == person2}")  # Output: True

# Check the hash values of the two objects.
print(f"Hash of person1: {hash(person1)}")  # Output: Some integer value
print(f"Hash of person2: {hash(person2)}")  # Output: The same integer value as person1

# Since the hash values are the same, these objects can be used in hash-based collections
# like sets and dictionaries without issues.

# Create a set with these objects.
people_set = {person1, person2}

# The set will only contain one Person object because person1 and person2 are considered equal.
print(f"People in the set: {people_set}")  # Output: {Person(name=Alice, age=30)}

# Create a dictionary with these objects as keys.
people_dict = {person1: "Person 1", person2: "Person 2"}

# The dictionary will only have one entry because person1 and person2 are considered equal.
print(f"People in the dictionary: {people_dict}")  # Output: {Person(name=Alice, age=30): 'Person 2'}

# Note: If you modify the attributes of an object after it has been added to a hash-based collection,
# it can lead to unexpected behavior because the hash value might change. Therefore, it's generally
# a good practice to make objects immutable if they are intended to be used as keys in hash-based collections.

# For example, if we try to modify the name of person1 after adding it to the set:
# person1.name = "Bob"
# This would lead to inconsistent behavior because the hash value of person1 would no longer match
# the hash value used when it was added to the set.

# Therefore, it's important to ensure that objects used as keys in hash-based collections are immutable
# or that their attributes are not modified after being added to the collection.