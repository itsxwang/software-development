## Some useful shortcuts

- `!!` repeat previous command
- `!$` last argument of previous command, if not called with any argument then that command itself
- `$?` is a special variable that holds the return value of the last command(or we can say the exit code of the last command) 
    - command that not produce 0 is an error, and any command with exit code 0 is success
- `Ctrl+C` to stop current command
- `Ctrl+Z` to pause current command
- `Ctrl+D` to signal end of input (EOF)
- `Ctrl+R` to search command history

- Use | to pipe commands: `command1 | command2`
- Chain commands with &&: `cmd1 && cmd2` (run cmd2 only if cmd1 succeeds)

- Run any command after n number of seconds: using `(sleep n; command)&`
    - example: ```(sleep 1; echo "hello") &```\
    ✅ This will execute echo "hello" after 1 second, asynchronously in the background.




## Commands start
- `whoami` : Shows the current user name.
- ```who```: Lists all currently logged in users.
- ```w```: Lists all currently logged in users, including those logged in from other terminals.

- Redirect any command output in file : `command > file.txt`
    - ex: `ls > file.txt` or `ls -l > file.txt`
    - `>` this will write the output of the command to the file
    - `>>` this will append the output of the command to the file, in new line

- change shell : `chsh -s /bin/<shell_name>`
- list all available shells : `cat /etc/shells`
- show current shell : `echo $SHELL`


- see [date and time commands](https://youtu.be/Byx4sgLR88E?si=vYF4d-VmfXLq7B8T&t=207)  

- [`ls -lt` and `-r`, `-h`](https://youtu.be/Byx4sgLR88E?si=D6GVwo7dkL0NmX7w&t=277)
    - ls stands for list storage
    - `-l`: Lists files in long format, which includes:
       - `-rw-r--r-- 1 x1 x1 2048 Jun 28 21:05 report.txt`
           - File type & permissions (`-rw-r--r--`)
           - Number of links (hard links) (usually 1 for regular files)  (For directories, it counts the number of subdirectories + the directory itself + its parent.)
           - Owner (user of the resource) (`x1`)
           - Group (group name which have group permission on the file) (Collection of users, a Unix group, user in group get the “group” permissions.)
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
   - `cd<enter>`: go to home directory

- cp: copy file, or make copy of file, like `cp report.txt report_copy.txt`
- mv: move file (used for cut-paste, rename file/folder, move dir(also comes in cut-paste))

- head and tail: read first and last few lines of file, ex: `head -7 report.txt` will print first 7 lines of file, `tail -n 7 report.txt` will print last 7 lines of file

- [sort the content of the file](https://youtu.be/Byx4sgLR88E?si=uLBZKnLyetvd_9nY&t=1997)

- only unique lines: `uniq report.txt` or `sort -u report.txt` or using this command [`sort(or any file read command) report.txt | uniq`](https://youtu.be/Byx4sgLR88E?si=9bZ3JO12zyJm-lZg&t=2137)
The pipe way explanation: the output of the `sort` command is piped to the `uniq` command, means become input for `uniq` command.
And this pipe way `|` can be used to combine multiple commands

- [split file in linux](https://youtu.be/Byx4sgLR88E?si=we5MHjGmEtMjbGBc&t=2207)

- [search word and show matching content(show line in which pattern is present) from a file](https://youtu.be/Byx4sgLR88E?si=f6yQUC1hCcfV5lQP&t=2307)
    - `grep -v "pattern" <filename>`: will show lines in which pattern is not present
    - use `egrep` command, for more complex regex patterns, like for search multiple words in file
    - We can also Use `egrep` (and `grep`)  without pipe , `egrep "pattern" <filename>`
    
- [use wild card in linux, basically *, ?, {n..n} , can with ls, touch, cp, mv, and etc command](https://youtu.be/Byx4sgLR88E?si=WbSRwjPqPPjC5c2B&t=2517)
    - `touch file{1..7}` create 7 files, 
    - ls x* show all folders/files start with `x`

- [shuffle content of the file](https://youtu.be/Byx4sgLR88E?si=K5AQoMEJmHBqRB7-&t=2707)

- [Count no.of lines in file](https://youtu.be/Byx4sgLR88E?si=aCUSM6V5QliKBwMY&t=2747)
    - `wc -l report.txt`

- [Compare two files](https://youtu.be/Byx4sgLR88E?si=CSGdTZM_4eIEBoXM&t=2817)(identical or not, it answer like boolean): `cmp file1.txt file2.txt` 
   - `diff fileA fileB` or use `-u` flag also for unified diff 

- [find file in linux using `find` command](https://youtu.be/Byx4sgLR88E?si=cQr2CdxgDeY5aaL6&t=2957)
        `file /path/from/where/it/start/searching -type f  -name "*.md"` 
    - [find with `locate` command](https://youtu.be/Byx4sgLR88E?si=n0VUzEyrSMbkO0pY&t=3117)
        - `locate <filename>`   

- Utility commands
    - [history command](https://youtu.be/Byx4sgLR88E?si=LGcLDEV4c-0LD5DQ&t=3247)
    - [see syntax and options for command](https://youtu.be/Byx4sgLR88E?si=yLVkDMQkgcApCorH&t=3327)
       - use `man <command>` to read command manual 
       - use `whatis <command>` to read what command does

- [`which` command, basically use to find executable file of commands,apps, etc](https://youtu.be/Byx4sgLR88E?si=niaLSZex-5dBjhcw)

- [check server uptime, and how many users logged in](https://youtu.be/Byx4sgLR88E?si=w-1Bbmm9H_C7gZ8t&t=3597)

- [record your activity on terminal in a file](https://youtu.be/Byx4sgLR88E?si=2y47n7s7wOC7-LNl&t=3697)

- [how to create a shortcut of a long command using `alias`](https://youtu.be/Byx4sgLR88E?si=23xYWaVyh58kYy8V&t=3857)
    - `alias <nameOfCommand> ="command"`
    - `unalias <nameOfCommand>` : for remove alias
    - [Some helpful aliases](https://youtu.be/ehKAIWJWI8Y?si=FbuhhWdWyF7Cvxa0&t=107)

- [zip and unzip files and folders](https://youtu.be/Byx4sgLR88E?si=Yu4z86WvB2G6ZILz&t=3967)
    - zip is the compression version of file or folder, that can be faster transfer and save space
    - compress file in linux : `gzip -k`(keep the original file also, make another compressed file) `file`
    - decompress file - `gunzip file.gz`
    - [compress folder in linux](https://youtu.be/Byx4sgLR88E?si=f4cpvMPy3gvPm1y-&t=4137)
    - `tar(tape archive) -czf archiveName.tar.gz folderName`
        - ***c***: compress, ***z***: gzip, ***f***: file
    - decompress folder
    - `tar -xzf archiveName.tar.gz`
        - ***x***: extract, ***z***: gzip, ***f***: file

    - [compress and uncompress multiple files](https://youtu.be/Byx4sgLR88E?si=ZvHsir7hZTULzy7H&t=4317)
    - `zip archiveName.zip file1.txt file2.txt`
    - `unzip archiveName.zip ` 
    - list those multiple files in zip -> `unzip -l archiveName.zip`

- [download files in linux `wget` and `curl`](https://youtu.be/Byx4sgLR88E?si=cUr07RXZ0RKhbsTx&t=4477)
    - `wget -O namefile.zip https://example.com/file.zip`
    - [call api on linux](https://youtu.be/Byx4sgLR88E?si=Ax-YODJhwmQJA9si&t=4577)

- [install an app in linux](https://youtu.be/Byx4sgLR88E?si=qmRpoTIcp86Hiu2S&t=4697)

- [check app is installed or not](https://youtu.be/Byx4sgLR88E?si=ADKk8mqpV97GQfRL&t=4897)
    - `which package` command: If the package is installed, it will return the full path to the executable. If not, there will be no output.
    - `apt list --installed`: This command lists all installed packages in Debian-based systems
    - `apt-cache policy package`: This command checks the installation status of a package in Debian-based systems.

- check apps for installed in package managers: 
        - `apt search package`: will list all packages by the name of the package, and also tell which packages are installed 
        - `snap search package`

- [how to start/stop/list service on linux](https://youtu.be/Byx4sgLR88E?si=A3eib70KbguyO4vq&t=5137)
    - `systemctl start/stop/restart/enable/disable service_name`
    - `service service_name start/stop/restart/enable//disable`
    - list all services: `systemctl li/restart/enable/disablest-units --type=service --all`
    - check service status: `systemctl status service_name` or `service <service_name> status`

- [how to list all environement variables in linux](https://youtu.be/Byx4sgLR88E?si=un8qbRruFPyZV9M1&t=5357)
    - `printenv` or `env`

- [how to add new environement variable in linux](https://youtu.be/Byx4sgLR88E?si=x18ongUoANNlF59P&t=5467)
    - `export <nameOfVariable>=<valueOfVariable>`
- [add a new environemnt variable permanently on linux](https://youtu.be/Byx4sgLR88E?si=_2hY_bs5VADlCHxo&t=5677)
    - simply add environemnt variable in ```~/.bashrc``` or ```~/.zshrc``` file, or what ever terminal you are using
        ```bash
        export <nameOfVariable>=<valueOfVariable>
        ```
        ```source ~/.bashrc``` and
      check: `printenv | grep <nameOfVariable>`

- [print specific column from csv file](https://youtu.be/Byx4sgLR88E?si=8ma_p9WMu9BlITf4&t=5877)
    ```awk -F , '{print $2}' <filename.csv>```

- [display specify number of characters of all line](https://youtu.be/Byx4sgLR88E?si=87PzQPudwhMMYcYj&t=6067)
  - `cut -c1-10 <filename.txt>` : will display first 10 characters of all line 

- [display a specific line from a file](https://youtu.be/Byx4sgLR88E?si=3JTec27v3GFZ_DlF&t=6157)
    - `sed -n '5p' filename.txt` : will display 5th line of file 

- [replace specific word in a file](https://youtu.be/Byx4sgLR88E?si=zGBjk_aN2lcHPxgE&t=6227)
    - `sed  's/oldWord/newWord/g' filename.txt`
- [convert content to uppercase from lowercase and vice versa and  etc, with `tr`(translate characters) command](https://youtu.be/Byx4sgLR88E?si=6fajw5rEbXTVFpDw&t=6337)
    - `tr '[:lower:]' '[:upper:]' < filename.txt`
    - to save changes: `tr '[:lower:]' '[:upper:]' < filename.txt > upper.txt`
    - delete specific word from file : `tr -d 'word' < filename.txt`
    - change specific word from file : `tr 'word' 'newWord' < filename.txt`
- [extend or shrink size of the file](https://youtu.be/Byx4sgLR88E?si=FIZZo9nCBEC_kESm&t=6487)

- [ fold command `fold -w<n>` ](https://youtu.be/Byx4sgLR88E?si=rvdZMxcECTngZ_gM&t=6617) 
    - this command used generally with other commands like echo 
        - `echo "hello world" | fold -w5 ` will display 5 character per line

- [How to change user or login as different user in linux](https://youtu.be/Byx4sgLR88E?si=7lx1-g3LuIaOsIZd&t=6667)
    - `sudo su -` : to go to root account, `sudo -i` can also be used
    - `sudo su - <username>` : to go to other user account


    - `su <root_passwd>` this command only works if root account password is set `sudo passwd root` then set new root password (Note:  enabling the root account can make your system more vulnerable if misused.)
    - and you can simply still use sudo to run root commands like installing packages`sudo apt install <packageName>`

- [close termianl and switch between user using `ctrl+D`(for switching) and exit (for both)](https://youtu.be/Byx4sgLR88E?si=YGFXLpeJ2oxqY-E3&t=6727)

- [access remote servers](https://youtu.be/Byx4sgLR88E?si=xzcUhakzu52ja55J&t=6807)
    - `ssh <username_of_remote_server>@<ip_address_of_remote_server>`

- [How to copy a file to remote linux server, and from local to remote](https://youtu.be/Byx4sgLR88E?si=d7PerFPOpQUt7i1O&t=6947)
    - `scp /path/where/file/is/located user@hostname:/tmp/` -> from local to remote

    - `scp user@hostname:/path/where/file/is/located /tmp/` -> from remote to local

- [permissions in linux demestified](https://youtu.be/T269zebUSj8?si=zav0xpAy04iRhuCf&t=57)

- [Change resouce(file/folder/etc) permission with `chmod`](https://youtu.be/Byx4sgLR88E?si=h4tuU5rIJIQMCZ_W&t=7387)
    - `chmod a+rwx <filename.txt>` : will add read, write and execute permission to file for all users (user, group and others)
    - `chmod u+rwx <filename.txt>` : will add read, write and execute permission to file user 
    - `chmod g+rwx <filename.txt>` : will add read, write and execute permission to file group
    - `chmod o+rwx <filename.txt>` : will add read, write and execute permission to file for other users that not comes in user and group
   -  `-` instead of `+` can be use to remove permission from user or group or others or all (using `a`)

- [how to change ownership of the resource(`chown`)](https://youtu.be/Byx4sgLR88E?si=tItGWQDcTAKxgfwg&t=7557)
    - `chown <new_owner_username> <filename.txt>` : will change ownership of the file to new owner
- [how to change group ownership of the resource(`chgrp`)](https://youtu.be/Byx4sgLR88E?si=2bqQ8WlNXjBnqpjN&t=7627)
    -  `chgrp <group_name> <filename.txt>`: anyone in the `<group_name>` will get group level access to the resource

- [Memory info commands in linux](https://youtu.be/Byx4sgLR88E?si=Hx0MoZediIfkz-34&t=7657)
    - Check free RAM space: The full form of RAM is **Random Access Memory**.
 It is a type of computer memory that provides temporary storage for the operating system, software programs, and data in current use, allowing them to be quickly accessed by the computer's processor.
 RAM is volatile, meaning it retains data only as long as the computer is powered on.
    
    - `free` : will show memory info
    - `free -h` : will show memory info in human readable format
    - `free -th` : will show total memory info in human readable format
    - `free -m` : will show memory info in megabytes
    - For understand `free` command more, read dedicated markdown on memory in linux

- [`top` command](https://youtu.be/Byx4sgLR88E?si=DnFhdUPfWdtTwFN7&t=7767)
    - `top` command will check % memory and cpu utilization 

- change user password with `passwd <username>`(will ask for user previous password) , or just `sudo passwd <username>`(will not ask for user previous password) because `sudo` give us root privileges . 
If just type `passwd` or `sudo passwd` it assumes you wanna change password for current logged user(the home directory of user you are in)

- [How to check disk utilization of folder/file using `du`(disk utilization) command](https://youtu.be/Byx4sgLR88E?si=X9yz-JgFIlkvGlpD&t=7817)
    - `du <folder/file (you wanna check file utilization of)>`: 

- [How to check file system available and disk space allocated](https://youtu.be/Byx4sgLR88E?si=jsKrMXZfjLUeSCYY&t=7887)

- [How to check hostname(root) name of your linux server](https://youtu.be/Byx4sgLR88E?si=jsKrMXZfjLUeSCYY&t=7887)

- [How to check cpu/core/thread info of your linux server, using `lscpu` command, it will give cpu information](https://youtu.be/Byx4sgLR88E?si=bkrRkUzE3TKWBYRU&t=8017)


- [How to check architecture of linux server using `arch` command](https://youtu.be/Byx4sgLR88E?si=lT_mMWzQhzHTML9I&t=8051) 

- [How to see list of storage devices, disk parition on a linux server, `lsblk` command, Block device information](https://youtu.be/Byx4sgLR88E?si=rkRCOFny5vlOSTcf&t=8067)


- see your os name with `uname -a`, wanna see more info about your os `cat /etc/os-release`
- `hostnamectl` : will show os,system,firmware,hardware info

- ## [***Process Management***](https://youtu.be/Byx4sgLR88E?si=vqVpdn6bV8cI40wD&t=8207)
- How to check if some process is running or not 
    - ps -ef | grep <process_name> (`-e`: show all process, `-f`: show full info, `grep`: search for process name)
    - get pid of a process: `pgrep <process>`
- [stop a process by process id](https://youtu.be/Byx4sgLR88E?si=G1zfGu6L9HA7O3-2&t=8507) 
    - kill -p <process_id>
    - stop a process by its name: `pkill <process_name>`

- [see all active jobs](https://youtu.be/Byx4sgLR88E?si=G_CVmPyos0EBuuwP&t=8707)
    - start process in the background: `process &`
    - then resume a job in the background (after pausing using `CTRL+Z`) : `bg` for resume in the background
    - resume in the foreground: `fg`
        - if you have multiple jobs in the background, you can resume a specific number of jobs fot resume `fg/bg %n` 
    - `kill %<job_number>`: to kill a job
    - `kill -STOP <PID>` : to pause a process
    - `kill -CONT <PID>` : to resume a process   
    - jobs -l : list all jobs with their `pid`
        - `jobs -l | awk '{print $3}' `: list all jobs with their `pid` only
        - `jobs -l | awk '{print $3}' | xargs kill (-9 for force kill)`


- run any bash script : `bash script.sh &`

- Networking commands:
- `ip a` : ip can be found here , and `hostname -I` 
- check if server or website is accesible or not : `ping <websiteOrIP>`

- [how to check if ip port is accesible and open or not](https://youtu.be/Byx4sgLR88E?si=o3TV06eBWSODj9wv&t=9157) 
    - `telnet IP PORT`

- [How to check if port is open or not on our server](https://youtu.be/Byx4sgLR88E?si=tTNP8M6679mexje5&t=9207)
    - `netstat -putan | grep <port_you_wanna_check_open_or_not>`
    - `netstat -tuln` : List listening ports


- [Check all hubs in network to reach a website](https://youtu.be/Byx4sgLR88E?si=R-l5MwkSbg3F7yAh&t=9317)

- `reboot`: for restart linux server
- `shutdown`: for shutdown linux server
 
- at command for scheduling task
    - `at <time>`: run a command at a specific time
    - You need to pass the command via standard input, like this:
        `echo "echo 'Hello World!'" | at 10:00 PM`

        ✅ OR, interactively:
        ```at 10:00 AM```
        (It will open a prompt where you type your command)

        `echo "Hello World!"`(or any other command, you wanna execute) 
        Then press `Ctrl+D` to finish.

    -  run command after certain minutes or hour, using `at` command:        
      - examples:
        ```bash
        echo "hello" | at now + 1 minute
        echo "hello" | at now + 2 hours
        echo "hello" | at now + 1 day  
        ```