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



How `requests.get(url, stream=True)` and `response.iter_content()` Work Together

1. `requests.get(url, stream=True)` is called
   - This sends a request to the server.
   - Unlike `stream=False`, it **does not download the full response body immediately**.
   - Instead, it **only downloads the response headers** (like `content-length`, status, etc.).
   - The actual file content is **not yet received** in full.

2. `response.iter_content(chunk_size=1024)` starts iterating
   - This **fetches the first chunk (1024 bytes)** from the server.
   - The first chunk is **processed and written to the file immediately**.
   - Then, it **requests the next chunk**, processes it, writes it, and repeats until the file is fully downloaded.

✅ Key Understanding
- `requests.get(url, stream=True)` **does NOT fetch even the first chunk immediately**.  
- It just **opens the connection** and **waits** until you start iterating over `iter_content()`.  
- `response.iter_content(chunk_size=1024)` then **controls the fetching process**, one chunk at a time.

❌ Incorrect Understanding
> *"`requests.get(url, stream=True)` fetches the first chunk, and then `iter_content()` fetches the rest."*  
**Wrong!** `requests.get(url, stream=True)` does **not fetch any part of the file until** `iter_content()` is called.

🎯 Correct Analogy
Imagine downloading a book:
- **`requests.get(url, stream=True)`** = Opening the book cover (but not reading yet).
- **`response.iter_content(chunk_size=1024)`** = Reading one page at a time (downloading each page when needed).

This approach is useful for downloading large files efficiently.
"""