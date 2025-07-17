- Package management refers to ability to install and manage

- [updating repo index](https://youtu.be/yxc2ntmH9xY?si=ZwnP1ix0XD6Aj6IM&t=37)
    - repository is a online server which contains multiple packages
    - repo index(present in `/var/lib/apt/lists/`) contains list of packages available in repository
    - its good to make sure that package index is synchronize with online repo, so we get latest version of packages
    - `sudo apt update`: Syncs local package info with online repositories — it does NOT install or upgrade packages, but refreshes metadata about available packages.
        - It does:
            1. Contact package repositories listed in:
            - `/etc/apt/sources.list`
            - `/etc/apt/sources.list.d/*.list`
            2. Download latest package lists (indexes), including:
                - Available package versions

                - Dependency information

                - Sources
            3. Updates the local cache of packages — stored under `/var/lib/apt/lists/`.

            **📌 Why this is important**
            - Keeps your system aware of the latest versions of packages in the repositories.

            - If you skip `apt update` before running `apt upgrade` or `apt install`, you might:

                - Miss out on newer versions of packages.
                - Install outdated packages.
                - Encounter "package not found" errors.



- after updating repo index, we can install packages and update existing packages if update is available
    - ```sudo apt install package_name```
    - `-yes` flag can be used to automatically answer "yes" to prompts during installation
    - ```sudo apt upgrade```: for updating existing packages, that not require any packages to install or remove
    - ```sudo apt dist-upgrade```: for updating existing packages, that also require packages to install or remove
    - ```apt full-upgrade```: same as `dist-upgrade`, but more user-friendly and recommended for most users.

- Install and remove packages
- `sudo apt install <package_name>`
- `sudo apt remove <package_name>`
- `sudo apt purge <package_name>` -> remove package and its dependencies

- `sudo apt autoremove` -> remove unused packages after removing main package

- viewing log output from a specific user
    - `journalctl _UID=<user_id>`

    