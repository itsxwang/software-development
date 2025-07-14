- [Server according to wikipedia](https://youtu.be/VXmvM2QtuMU?si=66d_jM_Pp0U5ni1E&t=57)

- [Server](https://youtu.be/UjCDWCeHCzY?si=fUxDV8eVWH0uDbqw&t=7)

    - A **server** is a centralized machine that multiple clients can connect to, either over the internet or a local area network (LAN), to access specific services.
        - Servers are usually dedicated to handling specific services only, such as a database (DB) server, web server, or email server.
        - However, servers can also be configured to handle multiple services.
        - **"A server is not just a physical computer; a server is actually a role that a computer takes. Any ordinary desktop computer can be set up as a server."**
    - Ordinary desktop computers are different from servers (although they can play the role of a server) because they cannot handle as large a workload as servers can. Due to software/hardware limitations, desktop operating systems can only handle a limited number of concurrent connections.
    - For example, servers and ordinary desktop computers have different processors: Intel Core series for desktops and Intel Xeon (designed to work with multiple processors) for servers. Server motherboards can support multiple processors.
        - Xeon processors support ECC (Error-Correcting Code) memory, which helps guard against memory errors that could cause server crashes. Intel Core processors typically do not support ECC memory, but some AMD processors do. Using ECC memory is an extra precaution to ensure server reliability. 
        - Xeon processors support larger amount of RAM .
        - Large cache memory
        - Higher core count
- A server should also have swappable hard drives in a RAID configuration because if one hard drive fails, the server would still by up and running. RAID is what copies data on multiple disks and if a hard drive fails it can be remove and replaced with other hard drive.
Then RAID will rebuild data in new hard drive.

- A server should also have [server OS](https://youtu.be/UjCDWCeHCzY?si=jJbXv_mb_BA1ijhF&t=331), like linux.

- [Different types of server based on the service they provides](https://youtu.be/UjCDWCeHCzY?si=qs-08MX4Ve2mgVwt&t=347)
    - Database server: This is a server which stores data on the backend and can be retrieve using frontend on the computer, like using SQL queries.  
    - An emil server: facilitates email sending and receiving, you can access email using browser, or email client using outlook or thunderbird, using email protocols such SMTP(Simple Mail Transfer Protocol), IMAP(Internet Message Access Protocol), POP3(Post Office Protocol 3).
     - Web Server: Is what host website on the internet. It provides website and services to users. It contains all website data like HTML, graphics, scripts etc. When users go to their browser over internet they really go for access web server because actually that is serving a website. 

- [Game Servers explain](https://youtu.be/VXmvM2QtuMU?si=4v5tWC1_akAbCbrV&t=107)
    - ***Server actually a role, purpose or behavoiour of what a program does.***  
- [Client and Server communication](https://youtu.be/VXmvM2QtuMU?si=EtCXbY0989XDsfEO&t=167)
    - Client is just another program that access that ask/request data from server. 
**In the end client and server are just programs and these different terms describe the role they have.** 

- [How does these two programs client and the server communicates](https://youtu.be/VXmvM2QtuMU?si=AWF7aWyF0PWJrLSZ&t=227)
    - Using tools like wireshark we can see all the  network packets sent and received.  

- [Web Servers](https://youtu.be/VXmvM2QtuMU?si=6Wu_zh4OOLwV_gxH&t=277)
    - Like game servers, web severs are also programs running on some system. NGINX and Apache are just programs implementing web servers. So You can use client like browser to access data from web servers.

- [A server is just a program](https://youtu.be/VXmvM2QtuMU?si=FnELvhpCFHZTHuG8&t=310)

- [What is a server software](https://youtu.be/VXmvM2QtuMU?si=tjKZoY7GA9WHdqf9&t=607)
    - socket is just a OS feature, its a function that listen for connections, and on the other side you have functionality you implement with that. Socket is just a technical feature and server actually describe the purpose and behaviour implement with that.  

- [A python program example to implement a web server, using flask module](https://youtu.be/VXmvM2QtuMU?si=lAV5CTEZjgXaBvz5&t=627)
    - using `strace` to look at all system calls. To list all os features/functions that the target program uses. 

- [VPN working example, Unix daemon socket file for IPC(Inter Process Communication)](https://youtu.be/VXmvM2QtuMU?si=shpyuyak6OOONJtZ&t=715)

- [Related terms that almost describe the same concept](https://youtu.be/VXmvM2QtuMU?si=MrnKLoHnPTgdRlAz&t=847)
    - [Master and slave or Server or Client or etc...](https://youtu.be/VXmvM2QtuMU?si=6yYBLkRtUjV9kdC0&t=857): Describe roles where one component controls another

