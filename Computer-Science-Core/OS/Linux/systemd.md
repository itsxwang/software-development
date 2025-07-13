# [systemd](https://youtu.be/Kzpm-rGAXos?si=T8P0ld_QQlUEVXlG&t=157) 
is a first process start during boot, and manage all other processes and services on the system. 
It is a common [Init system](https://youtu.be/Kzpm-rGAXos?si=W4h3EvkYXOxPEf0n&t=47)(**Init system** is a type of process, process is anything that runs in the background) in most of distros 

- init system has process id of 1
- when you start,reload,stop the process the request goes to init system and init system is what does the job of starting, stopping, reloading 


- [working with units](https://youtu.be/Kzpm-rGAXos?si=MST6WcLMwWkqlgoG&t=297)
    - units in systemd are resources that it's able to manage, includes services, timers, mounts, automounts
    - so units are something that systemd is able to manage, and service is a type of unit
    - so we can manage all the packages that service file, like: nginx, apache, postgress, mysql, ssh etc. 

- [`systemctl`(system control) command is also a part of systemd, used to start,stop,restart,enable and disable services and see status of services](https://youtu.be/ZhW6mzzyqlM?si=7aXFzg_Vwy_MdA6f&t=1377)

- [`systemctl status` output explain](https://youtu.be/ZhW6mzzyqlM?si=ZyB-1srTmzUgSlXB&t=197)
    - `preset:enables/disables` in `systemctl status <service_name>` means system configure the systemd as it enable/disable new service by default   

- [Where are Systemd's Unit files stored?](https://youtu.be/Kzpm-rGAXos?si=7R5unKn8_sFYo36x&t=957)
    - [service file](https://youtu.be/Kzpm-rGAXos?si=Obg7TpWZNgMJ-ZXF&t=987)
        - service files are just text files that contains instructions that tell `systemd` how it needs to manage particular service
        - end with `.service` extension
        - [Different systemd unit directories(directories that contains systemd unit files)](https://youtu.be/Kzpm-rGAXos?si=GjmLwuLa6RxjNIv8&t=1037)

        - The systemd service files in Ubuntu/debain systems are located in several directories, each serving a specific purpose. The primary locations for system services are `/lib/systemd/system/` and `/etc/systemd/system/`.
 The `/lib/systemd/system/` directory contains the default unit files provided by system packages, while `/etc/systemd/system/` is used for user-defined or overridden service configurations
 `/run/systemd/system` : contains runtime systemd units
- [Units Directory Priority](https://youtu.be/Kzpm-rGAXos?si=fkPI-hezP4lE-kiH&t=1247), means any directory that will be on top the systemd will give that directory more priority
 1. `/etc/systemd/system/`
 2. `/run/systemd/system/`
 3. `/lib/systemd/system/`
 - And this is the reason **the package manager by default add unit files of installed packages(that have unit files) in `/lib/systemd/system/`(lowest priority) directory** So you have option to override the unit files by adding your configure unit files in higher priority directories. 
 
    - Again difference between unit files and services files(specific), service files are part of unit files, unit file can be of extension `.service` or `.socket` or `.scope` or `.target` or `.mount` or `.automount` or `.path` or `timer` but service files are just have `.service` extension 

    ls -l /lib/systemd/system | grep .swap | awk '{print $9}' | xargs -I{} cat /lib/systemd/system/{}

    - [why we have several different directories in which these unit file are stored: the reason they server different purposes](https://youtu.be/Kzpm-rGAXos?si=60ACk0zzpcWNliRL&t=1147)

- [Take a closer look at a systemd unit files](https://youtu.be/Kzpm-rGAXos?si=W_y68xuO33w8d8-Y&t=1507)
    - [Unit, Service, Install sections explain in service type unit file](https://youtu.be/Kzpm-rGAXos?si=T2VL9aDf_KKmD9yZ&t=1567)
    - [Unit section](https://youtu.be/Kzpm-rGAXos?si=5nSphks-XhVCuq1C&t=1573)
        - The unit contains more general information about the service
    - [Service section](https://youtu.be/Kzpm-rGAXos?si=icey4Rv6rnfGTxZo&t=1701)

- [what is reload and how it differs from restart in systemd service units](https://youtu.be/Kzpm-rGAXos?si=QXkW-g_ghP2DDPwk&t=1827) 
    - relaod is similar to restart but not similar to fully re start the service
    - reoload will cause the process to reload its configuration files which enables new setting to take effect without user getting disconnected. 
    - But not every configuration change supports reload over restart

    - [Install section](https://youtu.be/Kzpm-rGAXos?si=2rjC82My_GLxlw0k&t=1897)

- [Editing and Overiding systemd unit files](https://youtu.be/Kzpm-rGAXos?si=oZ7IFjJma_hHiRmu&t=1977)
    - ```sudo systemctl edit <service_name>```
    - [another method of editing service files, by adding `-full` flag](https://youtu.be/Kzpm-rGAXos?si=z3fJbL7UvbLqMeWZ&t=2347)

- [reloading systemd with `systemctl daemon-reload`(and why you should)](https://youtu.be/Kzpm-rGAXos?si=YK-Ue3Kvm9o8H7ZW&t=2527)
    - it reload systemd and ensure it account all the changes we made to systemd unit files
- [tips of creating your own unit files](https://youtu.be/Kzpm-rGAXos?si=AwxtckJrdo-J02-L&t=2587)