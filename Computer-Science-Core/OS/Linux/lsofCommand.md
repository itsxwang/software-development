- [`lsof`(list open files) command](https://youtu.be/n9nZ1ellaV0?si=Q6mcBLNor5BPIqrQ&t=47)
- In linux, everything is a file, including devices and processes. The `lsof` command lists all open files and the processes that opened them.

    - use to know open files and the processes that opened them, like example if on 5000 port a node website is listening, and you wanna find its pid with that port
and kill that pid `lsof` can be use also to find the pid of that node process.
    - [`lsof`](https://youtu.be/n9nZ1ellaV0?si=CdXtvvTrxuQceanb&t=317): `lsof` command can be used to list all open files and the processes that opened them. Every line here pretains to a file opened by a process.
    - Note: `lsof` command only displays information that user that executed that command has permission to see. If you want to see all open files, you may need to run `lsof` with `sudo`. 
    - `lsof -i :5000` will list all processes listening on port 5000.
    - `lsof -i` will list all open internet connections.
    - `lsof +D /path/to/directory` will list all files opened in that directory.
    - `lsof -u username` will list all files opened by a specific user.
    - `lsof -u ^username` will list all files not opened by a specific user.
    - `lsof /path/to/file` will show which process has a specific file open.
    - `lsof -t` will return only the process IDs of the open files.
    - `lsof -n` will show network addresses in numeric form, avoiding DNS lookups.
    - `lsof -p pid` will list all files opened by a specific process ID (pid).
    - `lsof -c command_name` will list files opened by processes with a specific command name.
    - `lsof -l` will show user IDs instead of usernames.
    - `lsof -r` will repeat the command every few seconds, useful for monitoring
   - [view open files that pertain to IPv4 or IPv6 addresses, use `lsof -i4` or `lsof -i6` respectively.](https://youtu.be/n9nZ1ellaV0?si=kNtRitWZ7wlEu4Zn&t=1277)