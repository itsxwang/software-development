# What is Hashing?
# Hashing is a process of taking an input (like a string, file, or data) and converting it into a fixed-size string of characters, which is typically a hash value or digest. 

# ---->    The key characteristics of hashing are: 

# Fixed Output Size: No matter the size of the input, the hash value is always the same length (e.g., 32 characters for MD5, 64 characters for SHA-256).

# Deterministic: The same input will always produce the same hash value.

# One-Way Function: It is computationally infeasible to reverse the process (i.e., you cannot get the original input from the hash value).

# Avalanche Effect: A small change in the input (even a single character) will produce a completely different hash value.

# Collision Resistance: It should be very difficult for two different inputs to produce the same hash value.

# Hashing is not encryption because encryption is reversible (you can decrypt the data back to its original form), whereas hashing is irreversible.

# Every file (even its particular state) has completely different hash . 

# --- > Reference :
# **Hashing in Python: Using Hashlib Library for Secure Hashing** by `NeuralNine` , see this yt video to revise about hashing in python .

# ----- Let's Code ----
# we can use hashlib module for doing hashing in python . 
""" hashlib is a built-in Python library that provides a common interface to many different secure hash and message digest algorithms, such as:

MD5 (Message Digest Algorithm 5)

SHA-1 (Secure Hash Algorithm 1)

SHA-256 (Secure Hash Algorithm 256-bit)

SHA-512 (Secure Hash Algorithm 512-bit) ..., and many more algorithms . 

These algorithms are used for cryptographic purposes, such as verifying data integrity, password storage, and digital signatures. """


#  Now what is Data Integrity?
""" 
Data integrity refers to the accuracy, consistency, and reliability of data throughout its entire lifecycle. It ensures that the data remains unchanged and uncorrupted from the moment it is created, stored, or transmitted, until it is accessed or used.

In other words, data integrity guarantees that the data you are working with is exactly the same as the data that was originally created or sent, without any unauthorized modifications, errors, or corruption. 
like example : Even you change the image size or crop it , the hash will be change completely for that image . 
"""

# print(hashlib.algorithms_available) gives set of all algorithms the hashlib provides
# print(hashlib.algorithms_guaranteed) gives set of all algorithms that are guaranteed to be work on every OS . 


#  ---- most secure algorithms are SHA 512 and SHA 256 for now . So use that . 

# a simple program to demonstrate hashing in python .
import hashlib

# Input data
input_data = input()

# Create a SHA-256 hash object , we can also use md5 , sha1 , sha224 , sha384 , sha512
hash_object = hashlib.sha256() 
# or you can also do in this way: 
# hash_object = hashlib.new('SHA256')

# Update the hash object with the input data (input_data must be bytes or should be converted to bytes , that is why we use encode('utf-8'))     
hash_object.update(input_data.encode('utf-8'))

# give us hash(of the input that we provided in hash object) in bytes.
# hash_object.digest() 

# `hexdigest` gives us hexadecimal representation of bytes , recommended way to do hashing is to use `hexdigest()` . 
hash_value = hash_object.hexdigest()
print(f"Input: {input_data}")
print(f"SHA-256 Hash: {hash_value}")


# file_digest() method , this method directly digest the file , and then we can simply use `digest()` / `hexdigest()` method on it , to get hash of that file . 
# with open (r'file_path_here' , 'rb') as f:
#     hash_object = hashlib.file_digest(f,'sha256')
#     print(hash_object.hexdigest())