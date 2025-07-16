- the basic idea behind the `rsync`(remote synchronization) command is to synchronize files and directories between two locations, which can be on the same machine or across different machines over a network.

- [Rsync Command](https://youtu.be/KG78O53u8rY?si=vIFlxpPozQU12siK&t=177)

- [copy files and directories](https://youtu.be/KG78O53u8rY?si=rChk7uZomGFqC_Np&t=447)
    - `rsync -rv --dry-run source destination`: This command performs a dry run of the synchronization process, showing what files would be copied without actually transferring any data. But it will make a connection to the remote server (if you are copying remotely). `-r` stands for recursive, meaning it will copy directories and their contents. `-v` stands for verbose, providing detailed output of the operation.

    - Note: `source/` means all content inside the source directory, while `source` means the directory itself.

- [one gotcha](https://youtu.be/KG78O53u8rY?si=xTckLzmzxe8BeEWs&t=897)
    - `rsync -r --delete source/ destination/`: delete anything in the destination that is not in the source. The trailing slashes are important here. 

`-a` flag is a archive mode which is equivalent to `-rlptgoD` (recursive, links, permissions, times, group, owner, devices).It means it will preserve the file attributes(metadata) and copy directories recursively.

`z`: zip the data during transfer (to save bandwidth, if you transferring remotely).

`-remove-source-files`: remove the source files after transfer.Work like cut and paste.
