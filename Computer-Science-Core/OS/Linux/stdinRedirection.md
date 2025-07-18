**Standard input (stdin)** redirection in Linux/Unix is a technique used to change the source of input for a command or program. By default, stdin comes from the keyboard, but redirection allows you to feed input from a file, another command, or other sources. 

- It’s represented by file descriptor 0.
- Commands like `cat`, `grep`, or `sort` typically read from stdin when no input file is specified.


- Redirection changes where a command gets its input. The primary operators for stdin redirection are `<` and `|`.


1. Using `<` for File Redirection

The `<` operator redirects input from a file to a command. Instead of waiting for keyboard input, the command reads from the specified file.


`sort < in.txt`
- Here, the `sort` command reads the contents of `in.txt` and sorts them alphabetically.

2. Using `|` for Pipeline Redirection

The pipe operator `|` redirects the output of one command (stdout) to the stdin of another command.

- Example:
`echo -e "banana\napple\ncherry" | sort`

    - The echo command outputs text, which is piped (|) to sort as its stdin.

3. Here Document (`<<`)
A here document allows you to provide inline input to a command until a specified delimiter is reached.

```sh
cat << EOF
Hello
World
EOF
```
`cat` reads input until it sees `EOF` (you can use any delimiter, not just `EOF`).

4. Here String (`<<<`)
A here string redirects a single string to a command’s stdin.

`grep "apple" <<< "banana apple cherry"`
The string `"banana apple cherry"` is fed to grep as stdin.
Output: `banana apple cherry`

---
## Key Points

- **File Descriptor:** Stdin is file descriptor `0`. You can explicitly redirect using `0<`, but `<` alone is sufficient (e.g., `wc -l 0< input.txt` is the same as `wc -l < input.txt`).
- **Common Commands:** Tools like `wc`, `grep`, `awk`, `sed`, and `read` frequently use stdin redirection.
- **Combining with Other Streams:** You can combine stdin and stdout redirection (e.g., `sort < input.txt > output.txt`).
    - Example: `cat < input.txt | grep "apple" > output.txt` reads from `input.txt`, filters lines containing "apple," and writes the result to `output.txt`.

## Practical Use Cases

- **Automating Input:** Feed predefined input to interactive commands (e.g., `mysql < script.sql`).
- **Data Processing Pipelines:** Chain commands to process data (e.g., `cat log.txt | grep "error" | sort`).
- **Scripting:** Use here documents to provide multi-line input to scripts or commands.

## Notes

- If a command expects stdin but doesn’t receive it (e.g., no file or pipe provided), it may wait indefinitely for keyboard input unless designed to exit.
- Some commands (like `echo`) don’t read from stdin, so redirection to them has no effect.
