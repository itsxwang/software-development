- Package management refers to ability to install and manage

- [updating repo index](https://youtu.be/yxc2ntmH9xY?si=ZwnP1ix0XD6Aj6IM&t=37)
    - repository is a online server which contains multiple packages
    - repo index contains list of packages available in repository
    - its good to make sure that package index is synchronize with online repo, so we get latest version of packages
    - `sudo apt update`: for updating repo index

- after updating repo index, we can install packages and update existing packages if update is available
    - ```sudo apt install package_name```
    - ```sudo apt upgrade```: for updating existing packages, that not require any packages to install or remove
    - ```sudo apt dist-upgrade```: for updating existing packages, that also require packages to install or remove

- Install and remove packages
- `sudo apt install <package_name>`
- `sudo apt remove <package_name>`
- `sudo apt purge <package_name>` -> remove package and its dependencies

- `sudo apt autoremove` -> remove unused packages after removing main package

- viewing log output from a specific user
    - `journalctl _UID=<user_id>`

    