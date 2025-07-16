- [bash(bourne-again shell) history](https://youtu.be/U7ODlrzF41s?si=N2s_s8Q2VtIU8LRl&t=57)
    - `history`: shows the list of commands you have executed in the current shell session.
    - `history <number>`: shows the last `<number>` commands you have executed in the current shell session.
    - `!<number>`: re-executes the command with the specified history number.
    - `!!`: re-executes the last command.

    - if you not want to save some specific command in history, you can prefix it with a space.

    - `HISTSIZE`: environment variable that controls the number of commands saved in the history
    - `HISTFILE`: environment variable that specifies the file where the history is saved, usually `~/.bash_history`.
