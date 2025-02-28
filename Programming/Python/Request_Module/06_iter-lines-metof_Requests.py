"""requests.iter_lines() is used to iterate over a streamed response line by line, instead of processing raw bytes or chunks. It is useful when dealing with text-based streaming data, such as logs, chat messages, or real-time API responses.(and that's the difference between iter_lines() and iter_content() because iter_lines() is used for text-based streaming data, while iter_content() is used for binary data, such as images, videos, or files.)"""

"""🔹 How It Works:
It decodes the streamed response into lines (default encoding is utf-8).
It ensures lines are properly split even if they are received in multiple chunks.
Handles buffering internally, meaning it waits until a complete line is received before yielding it.
🔹 Example: Streaming a Text-Based API"""

import requests

url = "https://stream.wikimedia.org/v2/stream/recentchange"  # Wikipedia live edits stream
response = requests.get(url, stream=True)
# Read and print each line as it's received
# in this method also like `iter_content()` you can define chunk_size value
for line in response.iter_lines():
    if line:  #  Ignore empty lines 
        print(line.decode('utf-8'))  # Decode from bytes to string , by default also it is utf-8
        break  # Just print the first received line
# 🔹 Key Parameters:


""" response.iter_lines(
    chunk_size=512,  # The amount of data read per iteration (default: 512 bytes)
    decode_unicode=False,  # If True, decodes bytes into text (UTF-8) (default: False)
    delimiter=None  # Custom line delimiter (default: `b'\n'`) , Once it finds the delimiter, it yields (returns) the complete chunk up to that point(till which it reads). Then, it continues waiting for the next chunk.
)
🔹 When to Use iter_lines() Instead of iter_content()?
Use Case	Method
Streaming binary data (images, videos, files)	iter_content()
Streaming text-based data (logs, APIs, real-time chat)	iter_lines()
🚀 TL;DR: Use iter_lines() when dealing with streamed text data, ensuring proper line handling."""