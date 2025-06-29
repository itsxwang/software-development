- `whoami` : Shows the current user name.
- ```who```: Lists all currently logged in users.
- ```w```: Lists all currently logged in users, including those logged in from other terminals.


- see [date and time commands](https://youtu.be/Byx4sgLR88E?si=vYF4d-VmfXLq7B8T&t=207)  

- [`ls -lt` and `-r`, `-h`](https://youtu.be/Byx4sgLR88E?si=D6GVwo7dkL0NmX7w&t=277)
    - `-l`: Lists files in long format, which includes:
       - `-rw-r--r-- 1 x1 x1 2048 Jun 28 21:05 report.txt`
           - File type & permissions (`-rw-r--r--`)
           - Number of links (hard links) (usually 1 for regular files)  (For directories, it counts the number of subdirectories + the directory itself + its parent.)
           - Owner (user) (`x1`)
           - Group (`x1`) (Collection of users, a Unix group, user in group get the “group” permissions.)
           - File size (`2048` bytes)
           - Last modified date & time 
           - Filename 

    - 🕒 `-t` (sort by modification time) 
        - Sorts files by modification time, with the most recently modified files first. (`-r` to reverse the sort order)
    combined `ls -lt` : Lists files in long format, sorted by time, newest first. `-h` can be used fpr human-readable sizes.
        
    - Now let’s break down the permission string, we get through `-l` flag
    Example: This `drwxrwxr-x` means:
         ```
         [ d ][ rwx ][ rwx ][ r-x ]
        │     │     │     └───► Others (everyone else) permission
        │     │     └─────────► Group permission
        │     └───────────────► Owner (user) permission
        └─────────────────────► File type
        ```
        r: read, w: write, x: execute
        - ✅ 1. First character: (here : `d`) 
            - `d` : Directory
            - `-` : regular File
            - `l` : symlink
            - `c`, `b`, etc. : special device files
        - ✅ 2. Next 9 characters: permissions, grouped in triplets for:
            - Owner
            - Group
            - Others (everyone else)
              - 🔑 Who are Owner, Group, and Others?
            - 👤 Owner
                 - The user who owns the file/directory.

                 - Usually the one who created it.

            - 👥 Group
                - A Unix group — a collection of users.

                - The file belongs to one group.

                - Any user in this group gets the “group” permissions.

            - 🌐 Others
                - All other users who are not the owner and not in the group.

        ## 📁 Different permission explained?
        It depends on what kind of item you’re dealing with — a file or a directory.
        - 📁 On a file        
            - `r` - You can view the content of the file (e.g., `cat`, `less`, `nano`)
            - `x` (execute) -  You can run it as a program or script (e.g., `./my_script.sh`)

            - ✅ Example:
                - `--x` → You cannot view and neither write its contents, but can execute it (like a compiled binary or secret script).

        - 📁 On a directory
            - r : You can list the contents of the directory (ls folder/)
            - x: 	You can enter the directory (cd folder/) and access files inside, if you know the names
            - w: You can create/delete/rename files inside (but only if you also have x)

            - ✅ Example:
              - `r--` → You can list the files, but can’t cd into it or open files.
              - `--x` → You can enter the directory and open files only if you already know the names, but can’t list them.
              - `r-x` →  You can list and enter it. ✅ Common for shared folders.
              - `rw-` → You can list and write, but not enter = practically useless alone.


        - 🧠 Think of it this way:
            - r = See what's inside
            - x = Go inside
            - w = Make changes inside

- working with file system
   - Less: open editor to read file content and search things, basically use vim commands. 
   - more: read file one page at a time.
   - `cd -` : go to previous directory (from where you last time use cd) , its same as `cd $OLDPWD`

- cp: copy file, or make copy of file, like `cp report.txt report_copy.txt`
- mv: move file

