"""
This script downloads a file from a given URL while displaying a progress bar using tqdm.
It streams the file in chunks instead of downloading it all at once, reducing memory usage.
Streaming means that the file is downloaded in pieces, which is helpful if you're downloading large files. 

Key Concepts Covered:
- Streaming file downloads with requests
- Using `tqdm` for a progress bar
- Understanding `response.iter_content()`
"""

import requests
from tqdm import tqdm  # Import tqdm for progress bar functionality

def download_file(url, filename):
    """
    Downloads a file from the specified URL while showing a progress bar.
    The file is downloaded in chunks to prevent high memory usage.
    
    Parameters:
    - url (str): The URL of the file to download.
    - filename (str): The name to save the downloaded file as.
    """
    
    # Send a GET request to the URL with streaming enabled
    
    # basically stream=True let the flow of code to go below(instead of downloading the whole file first and then go to below section of code) and therefore run the code , of download the file in specific chunks
    """
    If stream=False (default), requests.get(url) downloads the entire file into memory before executing further code.
    If stream=True, the response body is not immediately downloaded. Instead, it is read incrementally as you iterate over response.iter_content()
    """
    response = requests.get(url, stream=True)
         # Just print the first chunk to see the content

    # Get the total file size in bytes from response headers
    total_size = int(response.headers.get('content-length', 0))
    # Open the file in binary write mode
    with open(filename, 'wb') as file, tqdm(
        desc=filename,  # The progress bar description (shown before the bar)
        total=total_size,  # Total size of the file (for calculating percentage)
        unit='B',  # Unit of measurement (bytes) , basically unit will be shown in at the end of progress bar
        unit_scale=True,  # Convert bytes to KB, MB, etc., for better readability , instead of like these numbers 8945229, use 8.53M 
        unit_divisor=1024,  # Convert units using 1024 (standard for file sizes) , basically 1024 bytes = 1 KB
    ) as bar:
        # Iterate over response content in chunks
        """
        Note: The default chunk_size in response.iter_content() is None. Means,
              If you don't specify a chunk_size, iter_content() will return whatever data the server sends in each chunk.
              This means chunk sizes can vary depending on network conditions and server settings.
        """
        for chunk in response.iter_content(chunk_size=1024): # downloading 1kb chunk at a time (1024 bytes = 1kb , by binary standard)
            if chunk:  # Filter out keep-alive chunks , basically we do this so it not gives streamConsumed error ,if chunk is empty
                file.write(chunk)  # Write chunk to file
                bar.update(len(chunk))  # Update progress bar with the size of `chunk` , that is coming in `chunk` , from server

# Define the file URL and output filename
url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
filename = "downloaded_song.mp3"

# Start the file download
download_file(url, filename)

"""
Explanation of tqdm parameters used:
1. desc: Displays the filename before the progress bar.
2. total: The total size of the file, so tqdm can calculate percentage.
3. unit: Specifies the unit (B = bytes) for readability.
4. unit_scale: Converts bytes to KB, MB, GB automatically.
5. unit_divisor: Uses 1024 as the base to convert bytes to KB/MB/GB (instead of 1000).

---- How They Work Together in tqdm ----
# Let's take an example of a 5MB file (5,242,880 bytes).
# 
# 1️⃣ Default Case (unit='B', unit_scale=False, unit_divisor=1024)
# tqdm(total=5242880, unit='B', unit_scale=False, unit_divisor=1024)
# 📌 Output:
# 0%|          | 0/5242880B [00:00<?, ?B/s]
# - Shows raw bytes (B) as progress.
# - No conversion happens (unit_scale=False).
# 
# 2️⃣ Enable Unit Scaling (unit='B', unit_scale=True, unit_divisor=1024)
# tqdm(total=5242880, unit='B', unit_scale=True, unit_divisor=1024)
# 📌 Output:
# 0%|          | 0/5.0MB [00:00<?, ?MB/s]
# - Now the size is converted to MB (5MB).
# - The B (bytes) unit is auto-converted to KB/MB/GB.
# 
# 3️⃣ Use Metric Divisor (unit='B', unit_scale=True, unit_divisor=1000)
# tqdm(total=5242880, unit='B', unit_scale=True, unit_divisor=1000)
# 📌 Output:
# 0%|          | 0/5.2MB [00:00<?, ?MB/s]
# - Now 5,242,880 bytes = 5.2MB, because 1KB = 1000B (metric system).
# 
# 🚀 Key Takeaways
# unit → Just a label (doesn’t affect calculations).
# unit_scale=True → Converts bytes to KB/MB/GB automatically for readability.
# unit_divisor=1024 → Uses binary standard (1KB = 1024B).
# unit_divisor=1000 → Uses metric standard (1KB = 1000B).


-------------------------------------------------------------------------------------

# 🔹 stream parameter in the requests library in Python
The stream parameter in the requests library in Python is an optional argument that you can pass to various request methods like get, post, put, delete, etc.
 When set to True, it alters the way the response is handled by the library.

By default, when you make a request with requests.get() or similar methods, the requests library will immediately download the entire content of the response from 
the server before it returns the Response object. This is because stream defaults to False.

However, when you're dealing with large files or slow connections, you might want to download the content in chunks rather than all at once. 
This is where the stream parameter comes in. Setting stream=True means that requests will not download the whole response immediately. 
Instead, it will provide a Response object and you can iterate over the response data in chunks as needed.
"""

# 🔹 .iter_lines() is different from .iter_content(), and it is specifically designed for handling text-based responses line by line.
# ------------------------------------------------------------------------------
"""
Differences:
Method	Purpose	Data Handling
.iter_content(chunk_size=...)	Reads binary data in chunks	Returns raw bytes
.iter_lines()	Reads text data line by line	Returns decoded text lines (if decode_unicode=True, otherwise returns bytes just like .iter_content())

---- When to Use .iter_lines()?

When handling text-based responses like logs, JSONL (JSON Lines, where each line is a separate JSON object, commonly used for streaming data, logs, and machine learning datasets.), or streaming APIs that return data line by line.
- As It avoids reading partial lines, which might happen if you use .iter_content() on text data.

Example of Using .iter_lines()

import requests

url = "https://example.com/streaming-api"
response = requests.get(url, stream=True)

# Process response line by line
for line in response.iter_lines():
    if line:  # Avoid empty keep-alive newlines
        print(line.decode("utf-8"))  # Decoding required if response is in bytes

Key Differences from .iter_content():
.iter_lines() automatically splits lines, while .iter_content() does not.
.iter_lines() handles text responses more efficiently, avoiding broken lines across chunks.
.iter_content(chunk_size=...) is better for binary files (like images, videos, and archives).
TL;DR:
Use .iter_content() for binary file downloads.
Use .iter_lines() for streaming text data efficiently.


                              BY THE WAY
# ------------------------------------------------------------------------------
.iter_content() can still be used to process text line by line, but it requires additional handling because it does not automatically split lines like .iter_lines().

Why .iter_lines() is Better for Text?
.iter_lines() handles line boundaries properly, ensuring you don't get half a line due to chunking.
.iter_lines() filters out keep-alive newlines, which can occur in streaming APIs.
Using .iter_content() to Process Lines:
You can achieve the same behavior as .iter_lines() with .iter_content() like this:

import requests

url = "https://example.com/streaming-api"
response = requests.get(url, stream=True)

# Manually handling lines using iter_content()

```
import requests

url = "https://example.com/streaming-data"
response = requests.get(url, stream=True)  # Fetch data in streaming mode

buffer = b""  # Initialize an empty byte buffer

for chunk in response.iter_content(chunk_size=1024):  # Read data in chunks (1024 bytes each)
    buffer += chunk  # Add the chunk to the buffer

    while b"\n" in buffer:  # Check if the buffer contains a full line (new line character `\n`)
        line, buffer = buffer.split(b"\n", 1)  # Extract one complete line, keep the remaining in buffer
        print(line.decode("utf-8"))  # Convert bytes to string and print the line

```

Why Use .iter_lines() Instead?
It automatically handles line buffering.
It avoids accumulating unnecessary data.
It filters out keep-alive newlines for streaming APIs.
TL;DR:
.iter_lines() is optimized for text streams (handles lines efficiently).
.iter_content() works but requires manual handling to split lines properly.

 
                                Buffering
# ------------------------------------------------------------------------------
- Buffer: A buffer is a temporary memory storage area used to hold data before processing or transferring it further. It helps manage data efficiently, especially when dealing with
large files, streaming, or network communication.

- Buffer in Networking & Streaming
When receiving data from a network (e.g., using requests in Python), data often comes in chunks. Instead of processing each small piece immediately, a buffer accumulates the data
until a complete unit (e.g., a full line of text or a JSON object) is ready
"""