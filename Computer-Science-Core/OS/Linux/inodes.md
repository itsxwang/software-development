## Inodes in Linux Filesystems

An [**Inode**](https://youtu.be/zfSa-PEU3h4?si=sTiqrMpMdjO3WcrH&t=297) is a data object that stores metadata about a file in a Unix-like filesystem. It is a fundamental concept for managing files and directories efficiently.

### Key Characteristics

- **Metadata Storage:**  
    Almost all information about a file is stored in its inode, except for the file name and path.

- **Contents of an Inode:**  
    - File type (regular file, directory, symbolic link, device, etc.)
    - Permissions (read, write, execute for owner, group, others)
    - Owner (user ID)
    - Group (group ID)
    - Size (in bytes)
    - Timestamps (creation, modification, access times)
    - Pointers to data blocks (addresses of the file's content)

- **File Name and Path:**  
    The inode does **not** store the file name or its path; these are kept in directory entries.

- **Inode Number:**  
    Each inode is identified by a unique inode number within the filesystem.

### How Inodes Work

1. **File Creation:**  
     When a file is created, the filesystem allocates an inode and assigns it a unique inode number.

2. **File Access:**  
     Accessing a file uses the inode number to locate the inode and retrieve metadata and data blocks.

3. **File Deletion:**  
     Deleting a file removes its directory entry and marks the inode as free for reuse.

### Summary

The inode is a key component of filesystem metadata management, enabling efficient access and organization of files and directories in Linux and other Unix-like systems.