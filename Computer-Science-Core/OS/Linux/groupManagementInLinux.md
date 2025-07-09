- [Linux - group management](https://youtu.be/GnlgAD8-GhE?si=nlBWl78SDgx97jw6&t=117)

- [Group commands](https://youtu.be/GnlgAD8-GhE?si=X_GgmJFV9qYimHO2&t=217)
    - This is command useful to see groups membership of the user
    - `groups`: will show which group the log user memeber of
    - `groups <username>`: which groups the user is a member of 
    - `id` also show which group user in + it also show the id of the user and the id of each group and name in which that user is.

- ['/etc/group'](https://youtu.be/GnlgAD8-GhE?si=N31GYeDIfGMt2rNu&t=347): will show all the groups in the system
    - On most distros: 
        - The system creates a **user private group** (UPG) with the same name as the user (i.e., xwang).
        - The user is set as the primary group member of that group.
        - This primary group membership is stored in `/etc/passwd`, not `/etc/group`.
 

- [add group](https://youtu.be/GnlgAD8-GhE?si=n8BpGD2dfGZs4Cte&t=577)
    
- deleting a group : `sudo groupdel groupname` 

- [2 different types of groups, primary and supplementary(aka secondary group)](https://youtu.be/GnlgAD8-GhE?si=yYb8Jz-ziGhmOALd&t=667)   
    - check primary group for user: `cat /etc/passwd | grep username`
    - and there is only one primary group assigned to each user, what make difference between these 2 types of groups is how they assigned now how they created
    - and the files/folder or any resource that user create will get permissions of the primary group 

- [add user in groups](https://youtu.be/GnlgAD8-GhE?si=ShCRHBOM2fsIg8NG&t=837) 

- [change group memebership with `usermod` command](https://youtu.be/GnlgAD8-GhE?si=lGbDzP8ocFyL264n&t=847)
    - `sudo usermod -aG <group_name> <username>` : `-a` flag for append (means changing you wanna make changes to user) `-G` means to specify supplementary groups
    - `sudo usermod -g <group_name> <username>` : `-g` for primary group
    - and after adding a user to group it requres log out + log in again to see the changes (means if he wanna see changes just by type `groups` (and utilize that group) instead of `groups <their_username>`, what's happening is just `groups` command with no options look at login session)


- [`usermod` not only command to modify group memberships, but `gpasswd` also](https://youtu.be/GnlgAD8-GhE?si=sLdcnJHdeeTpicNQ&t=1057)

    - `sudo gpasswd -<a|d> <username> <group_name>` : `add` add user to group, `del` remove user from group

- [more practical example of group management, for modify a openssh server](https://youtu.be/GnlgAD8-GhE?si=Q1a2I1lRJZ-ucbZZ&t=1117)
    - for modify config file for ssh server `sudo <your_editor> /etc/ssh/sshd_config`

- create system group: `sudo groupadd -r <group_name>`

- create group with specific gid `sudo groupadd -g 1007 <group_name>` 