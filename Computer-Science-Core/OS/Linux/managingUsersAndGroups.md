- [Linux - managing users](https://youtu.be/19WOD84JFxA?si=RBEDEqSvf_opIMm0)
- [`useradd` command for creating user](https://youtu.be/19WOD84JFxA?si=nS5l7un4JKx9R7HP&t=197)

- [Check existing users](https://youtu.be/19WOD84JFxA?si=kveM8ys7TVsi0iRM&t=257)
    - ls /home - will list home directories, and generally each user has their own home directory underneath /home
    - [but checking the contents of the hoem directory is not really the best way to check out how many users are on the server](https://youtu.be/19WOD84JFxA?si=4q0RTibpJqUg_ZNL&t=287) 

    - [/etc/passwd file - etsy password file](https://youtu.be/19WOD84JFxA?si=9diqvN0W1EAayxUJ&t=307)
        - `cat /etc/passwd | wc -l `, is a correct command to see all users present on the linux server