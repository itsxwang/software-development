# [systemd](https://youtu.be/Kzpm-rGAXos?si=T8P0ld_QQlUEVXlG&t=157) 
is a first process start during boot, and manage all other processes and services on the system. 
It is a common [Init system](https://youtu.be/Kzpm-rGAXos?si=W4h3EvkYXOxPEf0n&t=47)(**Init system** is a type of process, process is anything that runs in the background) in most of distros 

- init system has process id of 1
- when you start,reload,stop the process the request goes to init system and init system is what does the job of starting, stopping, reloading 


- [working with units](https://youtu.be/Kzpm-rGAXos?si=MST6WcLMwWkqlgoG&t=297)
    - units in systemd are resources that it's able to manage, includes services, timers, mounts, automounts
    - so Units are something that systemd is able to manage, and service is a type of unit
    - so we can manage all the packages that service file, like: nginx, apache, postgres, mysql, ssh etc. 

- [`systemctl`(system control) command is also a part of systemd, used to start,stop,restart,enable and disable services and see status of services](https://youtu.be/ZhW6mzzyqlM?si=7aXFzg_Vwy_MdA6f&t=1377)

- [`systemctl status` output explain](https://youtu.be/ZhW6mzzyqlM?si=ZyB-1srTmzUgSlXB&t=197)
    - preset:enables/disables in `systemctl status <service_name>` means system configure the systemd as it enable/disable new service by default   

- [Where are Systemd's Unit files stored?](https://youtu.be/Kzpm-rGAXos?si=7R5unKn8_sFYo36x&t=957)
    - [service file](https://youtu.be/Kzpm-rGAXos?si=Obg7TpWZNgMJ-ZXF&t=987)
        - service files are file that contain 