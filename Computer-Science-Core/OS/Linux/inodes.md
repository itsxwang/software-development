## Inodes in Linux Filesystems

An [**Inode**](https://youtu.be/zfSa-PEU3h4?si=sTiqrMpMdjO3WcrH&t=297) is a data object that stores metadata about a file in a Unix-like filesystem. It is a fundamental concept for managing files and directories efficiently.
`ls -i`: This command lists files and their inode numbers, allowing you to see the inode associated with each file.

- [the `stat` command](https://youtu.be/6KjMlm8hhFA?si=2fM8WCvI0MDQLvt-&t=197) basically do the sys (system) call to get the inode information of a file, which includes the inode number, file type, permissions, owner, group, size, and timestamps, creation time, etc.\
 And this is what shell does when you run the `ls -l`(long listing) command, it calls the `stat` system call to get the inode information of each file in the directory.Its kind of run loop for each file in the directory.

Modify and change fields are different, changed means the metadata of the file has changed, like permissions, ownership, etc. Modified means the content of the file has changed.

### Key Characteristics

- **Metadata Storage:**  
    Almost all information about a file is stored in its inode, except for the file name and path.

- **Contents of an Inode:**  
    - File type (regular file, directory, symbolic link, socket, character special file, block special file, FIFO Special File.)
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

---

Every storage medium has its own set of inodes, and the number of inodes is typically fixed at **filesystem**(***concrete format or program for storing files and directories on a data storage device***) creation time. This means that if you run out of inodes, you cannot create new files even if there is free space available on the disk.

For example: If we move file to a different storage device like from pc to usb flash drive, it may have a different inode number because the inode is specific to the filesystem of that storage device.

---

 [Inodes exhaustion issue explained](https://youtu.be/6KjMlm8hhFA?si=fQ7954tRSItWTLVS&t=297)

---


[How inodes are created depends on the fileSystem](https://youtu.be/6KjMlm8hhFA?si=ZugS5o_qALyLZYOf&t=377)

---


### Summary

The inode is a key component of filesystem metadata management, enabling efficient access and organization of files and directories in Linux and other Unix-like systems.