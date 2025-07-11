- [cron jobs are basically sheduling tasks](https://youtu.be/7cbP7fzn0D8?si=qPu_g5PgUnbNl2J4&t=67)

- check cron status: `service cron status` or `systemctl status cron.service`

- `crontab -l` : to list all cron jobs
- `crontab -e` : to edit cron jobs
- `crontab -r` : to remove all cron jobs

- [setting up a cron jobs](https://youtu.be/7cbP7fzn0D8?si=dTyKHxwTQnDlOqDh&t=147)

- [understand `m h dom mon dow command` notation of cron](https://youtu.be/7cbP7fzn0D8?si=MSyyl6owPlMDdm6b&t=167)


- [understand `@` notation of cron](https://youtu.be/7cbP7fzn0D8?si=PR06Au_U9G0e4twA&t=407)
    - `@reboot <command>` : will run the command at the time of system reboot

- `/` is used to specify interval : ex `*/5 * * * * <command>` : will run the command every 5 minutes`
- `0-59 * * * * <command>` : minutes means run when minute is 0 to 59
- `7,17 * * * * <command>` : means run when minute is 7 or 17



- [running cron jobs as a user](https://youtu.be/7cbP7fzn0D8?si=8ro_33euvHHV7r5R&t=477)
    - `crontab -u <username> -e`: run cron jobs for specific user

- check jobs logs did by cron: `cat /var/log/syslog | grep CRON`

- [running cron jobs on a web server](https://youtu.be/7cbP7fzn0D8?si=kQNCc1cDaoHGGfCr&t=807)

- [any time you using `cron` give full path of the executable or script you are running](https://youtu.be/7cbP7fzn0D8?si=BI2J1sQeXF4P0kxa&t=927)

- [website to generate cron jobs](https://youtu.be/7cbP7fzn0D8?si=csx-qw21uJ50_eA8&t=1027)
    - [crontab.guru](https://crontab.guru/)
    - [crontab-generator.org](https://crontab-generator.org)

- execute cron job in silent mode: `* * * * * **/script.sh >/dev/null 2>&1`