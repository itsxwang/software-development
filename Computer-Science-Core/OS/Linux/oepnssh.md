- [what is openssh](https://youtu.be/YS5Zh7KExvE?si=a4wIoawCQOeaWhoe&t=267)
  - openssh is a remote management tool, that gives you access to run commands on another machine
  - open shh by default use port 22
- the package is: `openssh-client`, which you have to install, because this requires ssh client

  - you can use `apt search openssh-client` : it will list all packages by name `openssh-client` and also tell if installed or not

- [connecting to server via ssh](https://youtu.be/YS5Zh7KExvE?si=YTP7uMRe9xSic6sk&t=757)

  - `ssh root@<machine_ip>`: means we ssh into linux server that has ip `<machine_ip>` as root user

- [`know_hosts` file in ssh folder](https://youtu.be/YS5Zh7KExvE?si=Mssnq_uuNmE6Aieu&t=867)

  - this file stores the fingerprints of all known hosts
  - this file helps to avoid man-in-the middle attack

- `/var/log/auth.log`: this file stores all the authentication logs, and update when someone normal login or ssh into server

- [Configuring the OpenSSH client with config file](https://youtu.be/YS5Zh7KExvE?si=u4dMY-6-v80EQ4Y-&t=1297)
  - ~/.ssh/config
    ```
    Host myserver
        HostName 237.84.2.178
        Port 22 -- by default port is 22
        User root
    ```
    - you have to do to in ssh client, so whenever you write `ssh myserver` the client will connect to server `237.84.2.178` as root user at specified PORT
