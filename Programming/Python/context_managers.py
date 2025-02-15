import traceback # to use traceback in __exit__ method
"""
Context Managers in Python

A context manager is a powerful tool in Python that allows for proper resource management using the `with` statement.
It ensures that resources (such as files, database connections, or network sockets) are properly cleaned up, even if an error occurs.
"""

"""
Closing a file is crucial because:
1. It ensures that all data is properly written to disk (especially when you write or append something in the file and and after that code , you immmediately open that file in read mode
, in that case if you not close or flush that file before open that file in read mode then written and appended content will not be reflected when you read that file using that file object 
that you use to open that file in read mode).
2. It frees up system resources (file descriptors, memory, etc.).
3. It prevents data corruption or loss, especially in cases of unexpected crashes.

### Difference Between `close()` and `flush()`:
- `close()`: Closes the file, ensuring all data is written and the file is no longer accessible.
- `flush()`: Forces unwritten data from the buffer to be written to disk but does not close the file.
"""

# ======================================
# Method 1: Using __enter__ and __exit__ (Class-based)
# ======================================
# This approach is useful for managing complex resources where initialization and cleanup are required.
class FileManager:
    def __init__(self, filename, mode):
        """
        Initializes the FileManager class with a filename and mode.
        :param filename: Name of the file to be opened.
        :param mode: Mode in which the file should be opened (e.g., 'w', 'r').
        """
        self.filename = filename
        self.mode = mode
        self.file = None

    def __enter__(self):
        """
        This method is called when the `with` statement is executed.
        It opens the file and returns the file object.
        """
        print("Opening file...")
        self.file = open(self.filename, self.mode)
        return self.file  # Return the file object

    def __exit__(self, exc_type, exc_value, exc_traceback):
        """
        This method is called when exiting the `with` block.
        It ensures the file is closed properly and handles any exceptions.
        """
        print("Closing file...")
        if self.file:
            self.file.close()
        if exc_type:
            print('An error occurred trace:', traceback)
            print(f"An error occurred: {exc_type}, {exc_value}")
            print('in this way we can use traceback(4th) parameter of __exit__')
# The traceback object in Python contains detailed information about where an exception occurred, including the call stack (i.e., the sequence of function calls that led to the error). You can use it to debug errors effectively.
            traceback.print_tb(exc_traceback)  
            """
            traceback.print_tb(traceback_obj) → Prints the traceback details to the console.
            traceback.format_tb(traceback_obj) → Returns traceback details as a list of strings.
            traceback.format_exception(exc_type, exc_value, traceback_obj) → Returns full exception details.
            traceback.format_exc() → Captures and returns the most recent traceback as a string
            """

        """
        -> If __exit__ returns False → Python re-raises the exception, and the program crashes (unless caught elsewhere). 
            Basically code below that context manager not runs in case exception occurs in context manger if __exit__ returns false
        -> If __exit__ returns True → The exception is suppressed, and execution continues as if nothing happened.
            Basically code below that context manager runs still in case if exception occurs in context manger if __exit__ returns True
        """
        return True
# Usage Example
# we can also open multiple context managers at the same time , using this synatx : ``` with <class_name> as <object_name> , <other_or_same_class_name> as <another_object_name> ```
with FileManager("example.txt", "w") as f: # here in `f` that value comes that return by `__enter__`` , here its a file object that return by `__enter__` 
    f.write  ("Hello, World!")  
    # __exit__ run when last line of context manager is executed

print("File operation completed!")


# ======================================
# Method 2: Using contextlib.contextmanager (Function-based)
# ======================================
# The `contextlib` module provides utilities for writing context managers easily.
# The `contextmanager` decorator turns a generator function into a context manager.

from contextlib import contextmanager

@contextmanager
def file_manager(filename, mode):
    """
    A function-based approach to context managers using contextlib.
    :param filename: Name of the file to be opened.
    :param mode: Mode in which the file should be opened.
    """
    print("Opening file...")
    file = open(filename, mode)
    try:
        yield file  # Provide the file object
    except Exception as e :
        print('An error occurred' , e)
    finally:
        print("Closing file...")
        file.close()

# Usage Example
with file_manager("example.txt", "r") as f:
    f.read()
    

# ======================================
# Built-in Context Managers
# ======================================
# Python provides built-in context managers for common tasks.

# Example: File Handling
with open("file.txt", "w") as file:
    file.write("This is a test.")  # Automatically closes the file

# Example: Thread Locks
import threading
lock = threading.Lock()

with lock: # so instead of lock.acquire() and lock.release() we can use context mangers with locks,semaphores,etc...
    # Ensures thread-safe execution by acquiring and releasing the lock.
    print("Thread-safe execution")

# Example: Database Connection (SQLite)
import sqlite3 # will explore squlite3 soon ...
with sqlite3.connect("database.db") as conn:
    cursor = conn.cursor()
    cursor.execute("CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY, name TEXT)")


# ======================================
# Nested Context Managers
# ======================================
# You can use multiple context managers in a single `with` statement.

with open("file1.txt", "w") as f1, open("file2.txt", "w") as f2:
    f1.write("Hello")
    f2.write("World")


# ======================================
# Dynamic Resource Management using ExitStack
# ======================================
# `ExitStack` from `contextlib` is useful when managing multiple context managers dynamically.
from contextlib import ExitStack

# Using ExitStack to manage multiple context managers dynamically
with ExitStack() as stack:
    """
    ExitStack allows entering multiple context managers dynamically.
    This is useful when the number of context managers is unknown beforehand.
    
    It can also take custom context managers like we make FileManager class above. So FileManager class __enter__ and __exit__ methods will control context manager of `FileManager` , behavior when we do : 
    stack.enter_context(FileManager(file, "w")) , basically it same as `with FileManager(file, "w") as file:`
    """
    
    # List of files to open dynamically
    file_names = ["file1.txt", "file2.txt", "file3.txt"]
    file_handles = [stack.enter_context(FileManager(file, "w")) for file in file_names]
    
    # Writing to each file
    for i, file in enumerate(file_handles):
        file.write(f"Hello from {file_names[i]}\n")
    
    print("All files written successfully.")

"""
### How ExitStack Works ###

1. `ExitStack` acts like a flexible context manager that can handle multiple resources dynamically.
2. Example: Instead of using multiple `with open(...) as file:` blocks, we can use `stack.enter_context(open(...))`.
3. Each file is registered into the stack and will be closed automatically when exiting the `with` block. Basically __exit__ is called when exiting the `with` block.
4. This is useful when you don't know beforehand how many resources(context managers) you need to manage.

### Why is This Dynamic? ###
- The number of files (or other resources) is not hardcoded.
- You can add any number of context managers at runtime based on conditions, user input, etc.
- Works for files, network connections, database connections, etc.

### Real-World Example: Managing Multiple Resources Dynamically ###
Imagine handling multiple database connections or network sockets in a scalable way:
```python
with ExitStack() as stack:
    db_connections = []
    for db_url in ["db1.sqlite", "db2.sqlite"]:
        conn = stack.enter_context(sqlite3.connect(db_url))  # Dynamically adding DB connections
        db_connections.append(conn)
    
    # Use db_connections[0] and db_connections[1] safely here
    print("Databases connected dynamically.")
```
"""
