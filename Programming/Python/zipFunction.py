# The zip() function in Python is used to combine two or more iterables (like lists or tuples) element-wise into pairs or tuples.
# 📦 Basic Syntax:

# zip(iterable1, iterable2, ...)
# It returns an iterator of tuples, where each tuple contains one element from each iterable.


names = ['Alice', 'Bob', 'Charlie']
scores = [85, 90, 95]

zipped = zip(names, scores)
print(list(zipped))

# Output: [('Alice', 85), ('Bob', 90), ('Charlie', 95)]

# 🔁 Behavior with Different Lengths:
a = [1, 2, 3]
b = ['a', 'b']

print(list(zip(a, b)))

# Output: [(1, 'a'), (2, 'b')]
# 👉 It stops at the shortest iterable.

# Creating dictionaries:
print(dict(zip(names, scores)))  # {'Alice': 85, 'Bob': 90, 'Charlie': 95}

# It works because we can also create dict using list of tuples -> dict([('name',1),('g',2)]) # Output: {'name': 1, 'g': 2}

# Unzipping:

pairs = [('a', 1), ('b', 2)]
letters, numbers = zip(*pairs)
print(letters)  # ('a', 'b')
print(numbers)  # (1, 2)

# We can also zip dictionary keys with list values example
dict1 = {
    'name': None,
    'age': None
}

dict2 = {
    'name': 'John',
    'age': 30
}
print(dict(zip(dict1, dict2.values()))) # dict2.values() -> ['John', 30] , btw if we not do .values() it will take by default .keys()