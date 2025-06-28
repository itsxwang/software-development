### ***SSH***(Secure Shell) connection is used to access linux based server remotely, in that we can do configuration on remote machine without physical connection and can do many more things.

- There are various ways to access linux based server remotely.

- [From windows to centos(community version of Red hat enterprise linux), using putty terminal](https://youtu.be/5q6_w5Dk4UE?si=eNtwsgo5sn3McZjB&t=67)

- [From windows to ubuntu(debian based), using putty terminal](https://youtu.be/5q6_w5Dk4UE?si=2w-sRVKh4zAKSVto&t=327)

- [Access using cmd or linux terminal](https://youtu.be/5q6_w5Dk4UE?si=fYGGEiRo4ZFu282Y&t=527)

    - first: `systemctl start ssh` this will start the ssh server on your machine
        - Your system is now ready to accept incoming SSH connections (like from another machine).
        - This is not a client-side SSH connection — it's a service/daemon that listens on port 22.

    - second: `ssh username@ipaddress`
    - then to check if it is connected you can use `w` or `who` command 
      - this Shows who is logged in and from where.
    - You should see your current SSH session in the output with the IP of machine you are connected to.

    - `echo $SSH_CONNECTION`
    - This environment variable is set only in SSH sessions.
    - It will output something like:\
     `192.168.29.XX 52846 192.168.29.75 22`\
     (client-IP, client-port, server-IP, server-port)

    - Exit from ssh session    
        - ***use `exit`*** to close the ssh session or `Ctrl+D`
        - ✅ 3. Force kill the connection (only if needed)
            - If the session hangs or becomes unresponsive, in another terminal you can:
                ```bash
                pkill ssh
                ```
            - Or, from the local machine:
                ```bash
                ps aux | grep ssh
                ```
                `- ps` means "process status".\
                `- a` means show processes for all users.\
                `- u`  show process owner/user and other details. \
                 `- x` include processes not attached to a terminal (like background daemons or SSH).\
                 `- |` pipe: takes the output of `ps aux` and sends it as input to the next command.\
                `- grep ssh`  filters the output to only show lines containing "ssh".
                
                - Now Get the process ID (PID) of an SSH session, from this type of output:
                ```USER     PID  %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND```


                Find the SSH process and use `kill PID`. E.g: ```kill 3523```
        - 🧠 Pro tip:
After disconnecting, your prompt will switch back to your local machine's terminal — a good indicator that you're no longer connected to the remote one.

    - The ssh service is designed to be run in the background, so you don't have to close it. But if you still wanna close, consider this : 
    - `systemctl stop ssh`\
        This will:
        - Immediately stop the SSH server.

        - Disconnect any active SSH sessions.

        - Block any new SSH connection attempts.

    - Useful commands summary: 
        ```
            | Action                  | Command                      |
            | ----------------------- | ---------------------------- |
            | Start SSH server        | `sudo systemctl start ssh`   |
            | Stop SSH server         | `sudo systemctl stop ssh`    |
            | Restart SSH server      | `sudo systemctl restart ssh` |
            | Check SSH server status | `sudo systemctl status ssh`  |
            | Enable on boot          | `sudo systemctl enable ssh`  |
            | Disable on boot         | `sudo systemctl disable ssh` |
        ```
        `sytemctl stop ssh.socket` also stop listening on port 22 for any ssh connection attempt, and not start ssh connection even on ssh attempt.  
        So even if you stop the ssh.service(using ```systemctl stop ssh``` or ```systemctl stop ssh.service```) but not close the **ssh.socket**, the ssh.socket is still listening on port 22 and will re-activate ssh.service on demand.

This is a systemd feature called "socket activation", which helps save resources by only running services when needed.

- [using gitbash terminal](https://youtu.be/5q6_w5Dk4UE?si=4N4zv-JlJ-OHB2An&t=577)

- [Through mobaXterm multitab terminal](https://youtu.be/5q6_w5Dk4UE?si=45Y0-SUo0vfSNt07&t=617)




