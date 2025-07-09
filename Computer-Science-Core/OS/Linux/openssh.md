### [***SSH***(Secure Shell)](https://youtu.be/YS5Zh7KExvE?si=a4wIoawCQOeaWhoe&t=267) connection is used to access linux based server remotely, in that we can do configuration on remote machine without physical connection and can do many more things.

- open shh by default use port 22
- the package is: `openssh-client`, which you have to install, because this requires ssh client
- There are various ways to access linux based server remotely.
- you can use `apt search openssh-client` : it will list all packages by name `openssh-client` and also tell if installed or not

- [`know_hosts` file in ~/.ssh folder](https://youtu.be/YS5Zh7KExvE?si=Mssnq_uuNmE6Aieu&t=867)

  - this file stores the fingerprints of all known hosts
  - this file helps to avoid man-in-the middle attack, where a third party can intercept the communication between client and server

- `/var/log/auth.log`: this file stores all the authentication logs, and update when someone normal login or ssh into server  

- [From windows to centos(community version of Red hat enterprise linux), using putty terminal](https://youtu.be/5q6_w5Dk4UE?si=eNtwsgo5sn3McZjB&t=67)

- [From windows to ubuntu(debian based), using putty terminal](https://youtu.be/5q6_w5Dk4UE?si=2w-sRVKh4zAKSVto&t=327)

- [Access using cmd or linux terminal](https://youtu.be/YS5Zh7KExvE?si=YTP7uMRe9xSic6sk&t=757)

    - [Configuring the OpenSSH client with config file](https://youtu.be/YS5Zh7KExvE?si=u4dMY-6-v80EQ4Y-&t=1297)
  - ~/.ssh/config
    ```
    Host myserver
        HostName 237.84.2.178
        Port 22 -- by default port is 22
        User root
    ```
     - you have to do to in ssh client, so whenever you write `ssh myserver` the client will connect to server `237.84.2.178` as root user at specified PORT

 
  - `ssh root@<machine_ip>`: means we ssh into linux server that has ip `<machine_ip>`, as root user, use `-v` flag if you wanna all see all info about ssh connection
---

- First: `systemctl start ssh` this will start the ssh server on your machine
    - Your system is now ready to accept incoming SSH connections (like from another machine).
    - This is not a client-side SSH connection — it's a service/daemon that listens on port 22.

- Second: `ssh username@ipaddress`
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

        *This is a systemd feature called "socket activation", which helps save resources by only running services when needed.*

- [using gitbash terminal](https://youtu.be/5q6_w5Dk4UE?si=4N4zv-JlJ-OHB2An&t=577)

- [Through mobaXterm multitab terminal](https://youtu.be/5q6_w5Dk4UE?si=45Y0-SUo0vfSNt07&t=617)

---
[To connect via SSH or use scp(secure copy protocol) without entering a password every time, and using keys which is more secure](https://youtu.be/YS5Zh7KExvE?si=6hKHVWtHyTYnzFED&t=1867).
This is achieved using SSH key-based authentication.

## ✅ 1. `ssh-keygen -t ed25519`
`-t` specify the type of key to generate.\
This command generates a **new SSH key pair** on your system.
**What it does**:
- Creates two files:
    - Private key → `~/.ssh/id_ed25519`
    - Public key → `~/.ssh/id_ed25519.pub`
- The private key stays secret on your machine.
- The public key is something you can share with others (or remote servers).

Why **ed25519** type key?
- It’s faster and more secure than older RSA keys.
- Shorter in size but strong in encryption. 

Output example:
```shell
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/yourname/.ssh/id_ed25519): [Press Enter]
Enter passphrase (optional): [Press Enter or type one]
```
- What is passphrase? \
    - A passphrase is like a password for your private key.
    - It adds an extra layer of security on top of your key pair.
    - ✅ If you type a passphrase:
      - Your private key (in `~/.ssh/id_ed25519`) gets encrypted with that passphrase. 
      - Every time you use this key (e.g., to SSH or SCP), you'll be asked to type the passphrase to decrypt it and use it.
    - 💡 This protects your key even if someone steals your file (`id_ed25519`). They can’t use it without your passphrase.
    - 🚫 If you press Enter (leave it empty):
        - The key is not protected by a passphrase.

        - SSH will not prompt for anything — it will just use the key.

        - It’s more convenient, but less secure.
    - This is OK if:
        - You’re the only user on the machine.

        - You have disk encryption.

        - It’s for automation/scripts where typing a passphrase every time isn't practical.
    - So if you enter a passphrase, you should remember it. As it will ask everytime you will do ssh or scp. You can use `ssh-agent` to cache the passphrase, ask gpt how to do that. 

## ✅ 2. `ssh-copy-id username@remoteMachineIp`
- [Another way of `ssh copy id` using `-i`(input file) flag](https://youtu.be/YS5Zh7KExvE?si=yZR5PpTEJyX6IiOU&t=2587)
    ```ssh-copy-id -i ~/.ssh/<idYouWannaCopyToremoteMachine.pub> username@remoteMachineIp```
    - This allows to copy specific public key to remote server, which is recommended if you have multiple public keys on your machine.

- This command installs your public key on the remote machine under the `<username>` user. Only if you have ssh access to the remote machine. And that's why you should always secure your username and password, so only trusted users can use `ssh-copy-id`.


What it does:
- Copies your public key (`~/.ssh/id_ed25519.pub)` to the remote machine in `authorized_keys` folder.
- Adds it to `~<UserYouSSHAs>/.ssh/authorized_keys` on the remote system.
- This means the remote SSH server now trusts your private key to log in.

What happens on the remote machine when you do `ssh-copy-id`?:
```bash
scp ~/.ssh/id_ed25519.pub username@remoteMachineIp:/home/user/.ssh/authorized_keys
``` 
Although this is not the same as `ssh-copy-id`, it's the same thing. As it write to file, but in actual `ssh-copy-id` append public key to `authorized_keys` file not write, so it use some other command.


✅ Now what?
After this setup:

- When you do:
```bash
ssh username@remoteMachineIp
```
- Instead of asking for a password, your system sends the private key.

- The remote machine verifies it using the authorized public key.

- If it matches, you're in — no password needed otherwise it will ask for password(but you can stop this password auth behaviour by disabling password authentication)!

### 🧠 How It Works Internally (Simplified)
1. SSH client tries to connect to ex: 192.168.29.75.

2. Server says: "Do you have a key I recognize?"

3. Client sends a signature made using your private key(`~/.ssh/id_ed25519`).

4. Server uses the stored public key to verify it.

5. If valid → access granted. ✅

`authorized_keys` -> Is a file in `~/.ssh/` on the remote machine, that lists trusted public keys(one public key per line)(when you use `ssh-copy-id` command you add your public key to this file in remote machine). 

- [Manage ssh keys](https://youtu.be/YS5Zh7KExvE?si=E1LvNllS1D24GixG&t=2737)
    - Add comment to the key: `ssh-keygen -t ed25519 -C "Comment"`
        - it automatically add default comment to be your username and machine name.