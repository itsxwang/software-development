- [Linux - managing users](https://youtu.be/19WOD84JFxA?si=RBEDEqSvf_opIMm0)
- [`useradd` command for creating user](https://youtu.be/19WOD84JFxA?si=nS5l7un4JKx9R7HP&t=197)

- [Check existing users](https://youtu.be/19WOD84JFxA?si=kveM8ys7TVsi0iRM&t=257)
    - ls /home - will list home directories, and generally each user has their own home directory underneath /home
    - [but checking the contents of the hoem directory is not really the best way to check out how many users are on the server](https://youtu.be/19WOD84JFxA?si=4q0RTibpJqUg_ZNL&t=287) 

    - [/etc/passwd file - etsy password file](https://youtu.be/19WOD84JFxA?si=9diqvN0W1EAayxUJ&t=307)
        - `cat /etc/passwd | wc -l `, is a correct command to see all users present on the linux server, as in `/etc/passwd` file every user on the system has its own line in the file
        - [etsy passwd file in detail](https://youtu.be/19WOD84JFxA?si=o8PlG0ZvSIR7h5Pu&t=1477)
- [user id](https://youtu.be/19WOD84JFxA?si=TOZhD8AJpvBwb2nw&t=437)
    - most distros ask you to create user account during installation, and first user generally given `1000` user id by default
    And genrally id greater than `1000` and `1000`  given to user accounts(accounts that use by humans), uids below `1000` are considered system accounts, and `useradd` command by default normal user accounts

- [adding users, with `useradd` command](https://youtu.be/19WOD84JFxA?si=baP_1tjktzZnJSiN&t=477)
    - `id <username>`: to check user, its id, and its groups and their id
    - `id -u <username>`: to check only user id
    
    - by default this command may not create home directory for new user in some distributions, so it recommend to be explicit, and run this command with `-m` flag `sudo useradd -m username`

    - `sudo useradd -u 1001 user`: for creating user with specific user id, here `1001` is the user id
    - `sudo -i -u username`: to switch to the user, this will give you a root shell as that user, example `sudo -i -u john`. Same as `su username` 
        - `-u`: run command or edit file as a specific user
        - `-i`: Open an interactive login shell as `username`, which means it will load the user's environment variables and run the user's shell profile scripts. 
    - `sudo -u username <command>`: Run a single command as `username`.

- [there is also `adduser` command](https://youtu.be/DmdyxEJdt3k?si=O1iSl7YJaU4tRAOK&t=497)
    - `adduser` is a more user-friendly command for adding users, it prompts for additional information like password, full name, etc.

    - `su <username>`: to switch between users
        - `logout` : to log out from the current user session
        - `exit` : same, to exit the current shell session
        - `CTRL + D` : same, to exit the current shell session
    
- [Default user accounts](https://youtu.be/19WOD84JFxA?si=L5n-ye0dzJBNBkIH&t=607)
    - `cat /etc/default/useradd` - this file sets the default values for the `useradd` command

- [removing user with `userdel` command](https://youtu.be/19WOD84JFxA?si=3LFr_xxvPe2ZSVqW&t=797)
    - NOTE: if user has home directory it will not be removed by `userdel` command by default: so to remove home directory use `-r` flag
    `sudo userdel -r username`

- [adding password for user that you created, with `passwd` command](https://youtu.be/19WOD84JFxA?si=k_ZD_nA_rHCup1yO&t=1047)
    - `sudo passwd username`(not ask for user previous paassword) or just `passwd username`(will ask for user previous password)


- [creating system user, and why in first place](https://youtu.be/19WOD84JFxA?si=Tv1PDB5zCmrqVgXK&t=1247)
    - system user is useful when you have some sort of task that you wanna run in the background, shedule tasks/processes (like for automation)
    - `sudo useradd -r system_user`: for creating system user     
    

- [etsy shadow file '/etc/shadow' file](https://youtu.be/19WOD84JFxA?si=papv8V_2XhE4xX9F&t=1687)