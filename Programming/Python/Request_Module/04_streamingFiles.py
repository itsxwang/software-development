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
    response = requests.get(url, stream=True)
    
    # Get the total file size in bytes from response headers
    total_size = int(response.headers.get('content-length', 0))
    
    # Open the file in binary write mode
    with open(filename, 'wb') as file, tqdm(
        desc=filename,  # The progress bar description (shown before the bar)
        total=total_size,  # Total size of the file (for calculating percentage)
        unit='B',  # Unit of measurement (bytes)
        unit_scale=True,  # Convert bytes to KB, MB, etc., for better readability
        unit_divisor=1024,  # Convert units using 1024 (standard for file sizes)
    ) as bar:
        
        # Iterate over response content in chunks
        for chunk in response.iter_content(chunk_size=1024):
            if chunk:  # Filter out keep-alive chunks
                file.write(chunk)  # Write chunk to file
                bar.update(len(chunk))  # Update progress bar

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

Understanding `response.iter_content(chunk_size=1024)`: 
- This method iterates over the response body in chunks of 1024 bytes.
- It prevents loading the entire file into memory, making it memory-efficient.
- Each chunk is written to the file immediately after being received.
- The progress bar is updated after every chunk is written.

This approach is useful for downloading large files efficiently.
"""
