"""
This module provides a reference for understanding iterators and generators in Python.
It explains how objects can be made iterable, how iteration works internally, and how `yield from` simplifies generator functions.
"""

# Custom Iterator Class
class cu_type:
    def __init__(self, *args):
        self.allvals = list(args)  # Store values in a list
    
    def __iter__(self):
        return self  # Returning self indicates this object is an iterator
    
    def __str__(self):
        return f"<{', '.join(map(str, self.allvals))}>"
    
    def __len__(self):
        return len(self.allvals)
    
    def __next__(self):
        if not self.allvals:
            raise StopIteration  # Stop iteration when list is empty
        return self.allvals.pop(0)  # Return and remove the first element

# Example Usage:
m1 = cu_type(1, 2, 3, 4)
print(next(m1))  # Output: 1
print(next(m1))  # Output: 2
print(m1)        # Output: <3, 4>
for i in m1:     # Iterating over remaining elements
    print(i)     # Output: 3, 4

"""
Understanding Iterables & Iterators:
------------------------------------
- An object is iterable if we can iterate over it using a for-loop.
- An iterable object must have an `__iter__` method that returns an iterator.
- An iterator must implement `__next__`, which returns the next item or raises `StopIteration`.
- Being iterable does not necessarily mean being an iterator. 

  Example:
  - A list is iterable but not an iterator because calling `next()` directly on a list will fail.
  - `iter(list)` returns an list_iterator, which supports `next()`.

"""

# Sentence Iterator Class
class Sentence:
    def __init__(self, string):
        self.words = string.split()  # Split sentence into words
    
    def __iter__(self):
        return self 
    """Returning self makes it an iterator , as it supports `next()` 
       Note: We return here self instead of any other iterator object because , when we use for loop , it internally calls __next__ method
       of that iterator object that we return in `__iter__` method not that __next__ method , that belongs to that class , so its all
       depends on what we return in `__iter__` method in for loop case.
    """
    
    def __next__(self):
        if not self.words:
            raise StopIteration  # Stop iteration when words list is empty
        return self.words.pop(0)  # Return and remove first word

# Example Usage:
f = Sentence("hello im fine")
for word in f:
    print(word)  # Output: hello, im, fine

"""
Using Generators for Iteration:
-------------------------------
- Generators are a more concise way to create iterators.
- They automatically implement `__iter__` and `__next__`.
- The `yield` keyword produces values one by one without storing all in memory.
- `yield from` simplifies delegation when yielding from another iterable.
"""

def sentence(string):
    yield from string.split()  # Delegates iteration over split words

# Equivalent to:
# def sentence(string):
#     for word in string.split():
#         yield word

# Example Usage:
for word in sentence("hello im fine"):
    print(word)  # Output: hello, im, fine

"""
Why Use `yield from`?
---------------------
- Avoids explicit looping inside the generator.
- Works with any iterable (lists, tuples, other generators, etc.).
- Useful when working with nested generators.

Example with Nested Generators:
------------------------------
def sub_generator():
    yield from ["one", "two", "three"]

def main_generator():
    yield "Start"
    yield from sub_generator()
    yield "End"

for item in main_generator():
    print(item)  # Output: Start, one, two, three, End
"""
