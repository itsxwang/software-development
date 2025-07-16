# [**jouranctl**](https://youtu.be/0dG3vUYt7Uk?si=UOVr8yN9cFGRutXk&t=37) 
command used to view log files produced by the system processes and services. It provides log in almost real time.

- Only the distors that utilize [**systemd**](https://youtu.be/0dG3vUYt7Uk?si=qPHXo_fC5GF7E7rU&t=167)(Systemd is the first process started during system boot and is responsible for managing all other processes on the system.) has `journalctl` command available


- [what is `journalctl` command](https://youtu.be/0dG3vUYt7Uk?si=aLrFCBvO6q0VM08D&t=87)

- [Basic usage of `journalctl` command](https://youtu.be/0dG3vUYt7Uk?si=ggjwvnlkX2VYRL8b&t=257)

- [`journalctl` -f](https://youtu.be/0dG3vUYt7Uk?si=rlMRh20rylA7JYmn&t=257)
    - follow mode, basically it automatically scrolls down as new logs are added

- [Inspecting services with `jouranctl`](https://youtu.be/0dG3vUYt7Uk?si=VhS4Jt_vtxJOrf0z&t=327)

- [journalctl -u <service_name>](https://youtu.be/0dG3vUYt7Uk?si=VkrSs3NA0LGxjuwX&t=477) 
    - `journalctl -u <service_name>` will only show logs from that service

    - combine with follow mode: `journalctl -f -u <service_name>`

- [viewing log entries from a particular time](https://youtu.be/0dG3vUYt7Uk?si=r55lRTJyjbIoOdMX&t=717)
    - ```journalctl --since="2 hours ago"``` : logs from 2 hours ago

    - ```journalctl --since="yesterday"``` : logs from yesterday
    - ```journalctl --since="2025-01-21 00:00:00"``` :  logs from 2025-01-01 00:00:00

- [shrinking log size with `vacuum`](https://youtu.be/0dG3vUYt7Uk?si=MFnXfhjtTDj9IaJh&t=1017)
    - this can be used to make journal entries to take the size we specified, but it will delete the entiries to achieve that size  
    - `journalctl --vacuum-size=100M` : shrink log size to 100MB

---
- [`/var/log` and `/var/log/syslog`](https://youtu.be/Ei276TjyxCA?si=QX3McGj-z2rOU5gQ&t=67)
    - `/var/log` includes all kind of logging information, about your system, services, applications, etc.

- low level information like related to kernel, hardware, etc. are stored in `/var/log/dmesg` or `/var/log/kern.log`.