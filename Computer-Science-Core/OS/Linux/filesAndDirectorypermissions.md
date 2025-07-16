- [**Breaking Down the Permission String (`ls -l` output)**](https://youtu.be/4e669hSjaX8?si=2p-IPEn3VxX9OURk&t=97)

    Example: `drwxrwxr-x`

    ```
    [ d ][ rwx ][ rwx ][ r-x ]
    │     │     │     └───► Others (everyone else) permission
    │     │     └─────────► Group permission
    │     └───────────────► Owner (user) permission
    └─────────────────────► File type
    ```

    - `r`: read
    - `w`: write
    - `x`: execute

    **1. First character (file type):**
    - `d` : Directory
    - `-` : Regular file
    - `l` : Symlink
    - `c`, `b`, etc.: Special device files

    **2. Next 9 characters (permissions):**
    - Grouped in triplets for:
        - **Owner**: The user who owns the file/directory (usually the creator).
        - **Group**: A Unix group (collection of users); any user in this group gets the group permissions.
        - **Others**: All other users not in the owner or group.

    **Who are Owner, Group, and Others?**
    - 👤 **Owner**: The user who owns the file/directory.
    - 👥 **Group**: The group assigned to the file; users in this group share group permissions.
    - 🌐 **Others**: Everyone else.

    ## 📁 Permission Meanings

    Permissions differ for files and directories:

    - **On a file:**
        - `r`: View file contents (`cat`, `less`, `nano`)
        - `w`: Modify file contents
        - `x`: Execute as a program/script (`./my_script.sh`)
        - Example: `--x` → Cannot view or write, but can execute (e.g., a binary).

    - **On a directory:**
        - `r`: List directory contents (`ls folder/`)
        - `w`: Create/delete/rename files inside (requires `x` as well)
        - `x`: Enter the directory (`cd folder/`) and access files if you know their names
        - Examples:
            - `r--`: List files, but can’t enter or open them.
            - `--x`: Enter and open files (if you know names), but can’t list them.
            - `r-x`: List and enter (common for shared folders).
            - `rw-`: List and write, but not enter (rarely useful).

    **Summary:**
    - `r` = See what's inside
    - `w` = Make changes
    - `x` = Go inside (for directories) or execute (for files)

Note: If you want to execute a script, and without `x` permission, you can still run it using `bash script.sh` or `sh/<or any other shell name> script.sh`, but you cannot run it directly as `./script.sh`. What `bash`(interpreter) or `sh`(interpreter) does is read the script and execute those commands instead of running the script directly.


- [Bits score](https://youtu.be/4e669hSjaX8?si=UFF2S_wmtZ8U_DFJ&t=1307)

    - **Bits Score**: A way to represent permissions using binary. Each permission bit has specific number attached to it: 
        - `r` = 4
        - `w` = 2
        - `x` = 1
    - Example: `rwxr-xr--` → Owner: 7 (4+2+1), Group: 5 (4+0+1), Others: 4 (4+0+0) → `755`
       - rwx(only user) = 7 (4+2+1) = 700(7*100), we multiply by 100 because user is in the 100s place.

    - **Octal Representation**: Permissions can also be represented in octal (base 8) format, where each triplet of permissions corresponds to a single digit.
        - `rwx` = 7
        - `rw-` = 6
        - `r-x` = 5
        - `r--` = 4
        - `-wx` = 3
        - `-w-` = 2
        - `--x` = 1
        - `---` = 0

- [recursively changing permissions in directory](https://youtu.be/4e669hSjaX8?si=9K4m8xS4gF7ZwbIY&t=1647)

    - **Recursive Permission Change**: Use `chmod -R` to change permissions for all files and directories within a directory.
        - Example: `chmod -R 755 my_directory/`
        - This command sets permissions to `rwxr-xr-x` for all files and directories inside `my_directory`.Including my_directory itself.
           - If you want to change permission of inside content of directory instead of directory itself, skip `-R` and used this command: `chmod 755 my_directory/*` (* wildcard means all files and directories inside `my_directory`).

        - If you want to change permissions of only files or directories, you can use `find` command with `-type f` or `-type d`.
        

- `chown` : to change ownership of files and directories.
    - Example: `chown user:group file.txt`
        - Changes the owner to `user` and the group to `group`.
        - Example: `chown john:developers project.txt`: this changes the owner of `project.txt` to `john` and the group to `developers`.
    - To change ownership recursively, use `-R`:
        - Example: `chown -R user:group my_directory/` : this itself change ownership of `my_directory` and all files and directories inside it.