- [redirecting commands output](https://youtu.be/NUjpOLlYv7Q?si=WouLnvlMXKeStjFI&t=107)
    - `ls -l > file.txt`


- [take the unput of one command and serve as a input for other command](https://youtu.be/NUjpOLlYv7Q?si=Hspueti0kJGJHvAU&t=447)
    - example: `ls -l | wc -l`: will count the number of lines produce by `ls -l`
    - multiple redirection example: `cat file.txt | sort | uniq > file2.txt`


---
- [streams](https://youtu.be/RBKXY14VK8c?si=MKh_qNa-n126sj0b&t=67)
    - 3 types of streams: stdin, stdout, stderr(standard error) 
    - anything that returns an information that is then presented on the screen is called stdout(standard output)
    - anything that returns an output but an error is called stderr
    - anything that takes input is called stdin
    - file descriptor: file descriptor is a number that represents a stream
        - stdin : 0 (Note: Success exit status of a command is also 0, but they are in different contexts)
        - stdout : 1
        - stderr : 2

- [send standard error to different place( `/dev/null` ) to see stdout only](https://youtu.be/RBKXY14VK8c?si=SVk8iiOOZjmDOdX5&t=427)
    - anything you send to `/dev/null` will never be seen again
        - standard error is designated by 2
        - ex: `find / -name "*.txt" 2>/dev/null` 
        - for example we wanna see output (stdout) of command in some file: `cat file.txt 1> output.txt `
            - here standard (means normal) output is 1, that redirect to `output.txt`
