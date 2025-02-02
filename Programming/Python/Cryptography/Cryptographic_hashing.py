# What is Hashing?
# Hashing is a process of taking an input (like a string, file, or data) and converting it into a fixed-size string of characters, which is typically a hash value or digest. The key characteristics of hashing are:
# Fixed Output Size: No matter the size of the input, the hash value is always the same length (e.g., 32 characters for MD5, 64 characters for SHA-256).

# Deterministic: The same input will always produce the same hash value.

# One-Way Function: It is computationally infeasible to reverse the process (i.e., you cannot get the original input from the hash value).

# Avalanche Effect: A small change in the input (even a single character) will produce a completely different hash value.

# Collision Resistance: It should be very difficult for two different inputs to produce the same hash value.

# Hashing is not encryption because encryption is reversible (you can decrypt the data back to its original form), whereas hashing is irreversible.


# **Hashing in Python: Using Hashlib Library for Secure Hashing** by NeuralNine , see this video to revise about hashing . 

# ----- Let's Code ----
# we can use hashlib module for doing hashing in python . 
""" hashlib is a built-in Python library that provides a common interface to many different secure hash and message digest algorithms, such as:

MD5 (Message Digest Algorithm 5)

SHA-1 (Secure Hash Algorithm 1)

SHA-256 (Secure Hash Algorithm 256-bit)

SHA-512 (Secure Hash Algorithm 512-bit)

These algorithms are used for cryptographic purposes, such as verifying data integrity, password storage, and digital signatures. """


#  Now what is Data Integrity?
""" 
Data integrity refers to the accuracy, consistency, and reliability of data throughout its entire lifecycle. It ensures that the data remains unchanged and uncorrupted from the moment it is created, stored, or transmitted, until it is accessed or used.

In other words, data integrity guarantees that the data you are working with is exactly the same as the data that was originally created or sent, without any unauthorized modifications, errors, or corruption. 
"""

