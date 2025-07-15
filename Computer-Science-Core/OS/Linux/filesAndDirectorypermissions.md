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
