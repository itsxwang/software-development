- [`find` command in linux](https://youtu.be/skTiK_6DdqU?si=TRo_6eIKJACBwDP1&t=157) used to search for files and directories in a directory hierarchy.
    - It can search by name, type, size, permissions, and other criteria.
    - The `find` command is very powerful and flexible, allowing you to perform complex searches.

- `find  /path/to/search  -name "filename" -type f` is used to search for files by name.
    - default path is the current directory (`.`).
    - Example: `find /home/user -name "file.txt"` will search for `file.txt` in the `/home/user` directory and its subdirectories.

- [exclude some patterns using grep](https://youtu.be/skTiK_6DdqU?si=-9iZork6ZykRXmjA&t=287)
    - Example: `find /home/user -name "*.txt" | grep -v "exclude_pattern"` will find all `.txt` files but exclude lines those that match `exclude_pattern` .

- [`-exec` option](https://youtu.be/skTiK_6DdqU?si=Eva2elsdpyDvGJPn&t=525) allows you to execute a command on the files found.
    - Example: `find /home/user -name "*.txt" -exec cat {} +;` will concatenate and display the contents of all `.txt` files found.
    - `+` at the end is used to terminate the find command when using with `-exec` option, `\;` can also be used. 

        ✅ What's the difference between `+` and `\;`?
            
        | Terminator | Behavior                                                        |
        | ---------- | --------------------------------------------------------------- |
        | `\;`       | Runs the command **once per file**                              |
        | `+`        | Runs the command **once for as many files as possible at once** |

        ✅ Example:
        Suppose `find` returns:
        ```
        file1.txt
        file2.txt
        file3.txt
        ```

        With `+`:
        ```shell
        find . -name "*.txt" -exec cat {} +
        ```
        This is equivalent to:
        ```shell
        cat file1.txt file2.txt file3.txt
        ```
        i.e., it batches the files together.

        ✅ How it works behind the scenes:

        - With `\;`, `find` starts a new `cat` process for **each file** found.
        - With `+`, `find` collects multiple files and runs `cat` **once** with as many files as possible as arguments (limited by system constraints like `ARG_MAX`).

        This batching makes the `+` form much faster and more efficient for large numbers of files.

        🧠 Summary:
        | Aspect           | `\;`                           | `+`                                |
        | ---------------- | ------------------------------ | ---------------------------------- |
        | Process creation | One per file                   | One for many files                 |
        | Efficiency       | Slow on large numbers of files | Fast, fewer process calls          |
        | Limitation       | None, but slow                 | Limited by OS's max command length (ARG_MAX)|


- [using `chmod` with `find` command to change permissions on all files inside directory at once](https://youtu.be/skTiK_6DdqU?si=Cb_VIRIhG1gN2bBd&t=1007)
    - using a `find` command to correct permissions is a good practice.

- [`find` for clear log files](https://youtu.be/skTiK_6DdqU?si=C8A_W0nONnpzZTle&t=1267)
    - Example: `find /var/log -type f -name "*.log" -exec truncate -s 0 {} +;` will clear all `.log` files in the `/var/log` directory.
    - This is useful for managing log files without deleting them.

- [find file that modified certain amount of time ago](https://youtu.be/zmlNuMKJSkc?si=lTlFgjn9tj58oOSk&t=567)
    - Example: `find /path/to/search -mtime +7` will find files modified more than 7 days ago.
    - `-mtime` can be used with `+` (more than) or `-` (less than) to specify the time range.