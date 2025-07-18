- [`xargs` takes the stdin as command line arguments](https://youtu.be/rp7jLi_kgPg?si=NOtc1b5Kt1JsYMe9&t=7)
    - useful for comamnd that only accepts command line arguments, not stdin
    - example: ls -l | xargs echo 
    - `-i` or `-I` : 	Replace `{}` in the command with each input item. By default, `xargs` appends the input items at the end of the command. So if 
        - input needs to be inserted in the middle of a command
        - Or when multiple instances of a placeholder are needed
        - Or when the command can't accept multiple arguments together

        - `echo -e "file1\nfile2" | xargs -I {} mv {} /backup/{}`
        becomes:
        ```sh
        mv file1 /backup/file1
        mv file2 /backup/file2
        ```

- `-t`: Print the command(in `stderr`) that `xargs` is going to execute, before actually running it.
    - This is useful for:
        - Debugging: See exactly what command is being constructed.
        - Understanding how input is transformed into arguments.
    - `echo -e "file1.txt\nfile2.txt" | xargs -t rm`: output: `rm file1.txt file2.txt` then executed the command





