- [symbolic links(symlinks)](https://youtu.be/zfSa-PEU3h4?si=GDqhYicNCs7uKqsZ&t=37)
    - Are also reffered to as soft links
    - Symbolic links is basically a way that we can link one object to another.

- [Creating symbolic links](https://youtu.be/zfSa-PEU3h4?si=mIITtKbxlfrox7gO&t=537) 
    - We can create symbolic links using the `ln` command with the `-s` option
    - Example: `ln -s /path/to/original /path/to/symlink`
    There are also hard links, which are different from symbolic links.
    - And the way how they actually reffered to inodes is different depending on the type of link .
    - And if we not include the `-s` option, we will create a hard link.

- A [hard link](https://youtu.be/zfSa-PEU3h4?si=oRKoigZ5MauNevhU&t=1067) is basically a duplicate entry in the file system that points to the same inode as the original file. 

- There's difference between symbolic links and hard links:
    - Symbolic links can point to files or directories, while hard links can only point to files.
    - [Symbolic links can cross file systems, while hard links cannot.](https://youtu.be/zfSa-PEU3h4?si=2I8RwjDI2pL5IX53&t=1607)
    - For example: You can link a file from other filesystem to your desktop directory using symbolic link, but you cannot do that with hard link.

- [Symbolic link can become invalid link in case](https://youtu.be/zfSa-PEU3h4?si=9AM0jwBAVias3e4w&t=1177):
    - The original file is deleted or moved.
    - The symbolic link points to a file that does not exist, may path is relative but symbolic link it not in same directory as original file.
    - [Hard links is different from soft links in this case](https://youtu.be/zfSa-PEU3h4?si=c8BsKwbNoPAu1oVf&t=1465)
        - If the original file is deleted or renamed, the hard link still points to the same inode and the data remains accessible.