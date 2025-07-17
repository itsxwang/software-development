- the basic idea behind the `rsync`(remote synchronization) command is to synchronize files and directories between two locations, which can be on the same machine or across different machines over a network.

- both **rsync** and **scp** use ssh underhood. 

- if ssh running on a different port, you can specify it with `rsync -e "ssh -p <port>" <source> <destination>`. Tells rsync to use SSH as the transport method, specifying a custom SSH port. 

Alernatively change `~/.ssh/config` file to specify the port for a specific host, so you don't have to specify it every time.
    ```shell
    Host remote_host
        Hostname remote_host.com # or IP address
        Port <port> # usually 22
        User username # you wanna login as
    ```
- now you can also use `rsync` without specifying the port and user every time.
    - `rsync source/ remote_host:/path/to/destination/`
  

- [Rsync Command](https://youtu.be/KG78O53u8rY?si=vIFlxpPozQU12siK&t=177)

- [copy files and directories](https://youtu.be/KG78O53u8rY?si=rChk7uZomGFqC_Np&t=447)
    - `rsync -rv --dry-run source destination`: This command performs a dry run of the synchronization process, showing what files would be copied without actually transferring any data. But it will make a connection to the remote server (if you are copying remotely). `-r` stands for recursive, meaning it will copy directories and their contents. `-v` stands for verbose, providing detailed output of the operation.

    - Note: `source/` means all content inside the source directory, while `source` means the directory itself.

- [one gotcha](https://youtu.be/KG78O53u8rY?si=xTckLzmzxe8BeEWs&t=897)
    - `rsync -r --delete source/ destination/`: delete anything in the destination that is not in the source. The trailing slashes are important here. 

`-a` flag is a archive mode which is equivalent to `-rlptgoD` (recursive, links, permissions, times, group, owner, devices).It means it will preserve the file attributes(metadata) and copy directories recursively.
    - one more feature, the `-a` flag provides that it will copy only the differences between the source and destination, making it efficient for subsequent transfers.

- `-D` flag is equivalent to `--devices --specials`, which means it will also copy device files and special files (like FIFOs and sockets`).

- `-z`: zip the data during transfer (to save bandwidth, if you transferring remotely).

- `--remove-source-files`: remove the source files after transfer.Work like cut and paste.


- when sending remotely, if you not give username, it will use the current logged user. If you want to use a different user, you can specify it like this: `rsync -rv source/ username@remote_host:/path/to/destination/`.  
- if you not give remote path, it by default will copy to the home directory of the user on the remote host. 
    - `rsync -r source/ username@remote_host:`

- `--progress`: show progress of the transfer.
