# The `read` Command in Linux/Unix

The `read` command is a shell built-in used to read input from stdin (usually the keyboard, but can be redirected) and store it in shell variables. It’s commonly used in shell scripts for user input, parsing data, or processing redirected input.

---

## What is the `read` Command?

- **Purpose:** Reads a line from stdin and assigns it to one or more variables.
- **Shell:** Primarily used in Bash, Zsh, and other POSIX-compliant shells.

### Syntax

```bash
read [options] [variable1] [variable2] ...
```

---

## Key Features and Options

- **Basic Usage:** Reads a single line and stores it in a variable (default: `REPLY` if no variable is specified).
- **Common Options:**
    - `-p "prompt"`: Displays a prompt before reading input (Bash-specific).
    - `-r`: Prevents backslash escaping (raw input, recommended for most cases).
    - `-s`: Silent mode (hides input, useful for passwords).
    - `-n num`: Reads only `num` characters instead of a full line.
    - `-d delim`: Uses `delim` as the delimiter instead of a newline.
    - `-t timeout`: Sets a timeout (seconds) for input.
    - `-a`: Reads into an array (Bash-specific).
- **Input Source:** Reads from stdin, which can be the keyboard, a file, or piped data.

---

## Basic Examples

### Reading User Input

```bash
read -p "Enter your name: " name
echo "Hello, $name!"
```

**Example output:**
```
Enter your name: Alice
Hello, Alice!
```

---

### Reading Without a Variable

```bash
read
echo $REPLY
```
Stores input in the default variable `REPLY`.

---

### Reading Multiple Variables

```bash
read first second
# Input: Alice Bob
```
Assigns `Alice` to `first`, `Bob` to `second`.

---

## Stdin Redirection with `read`

### From a File

```bash
read line < input.txt
echo "First line: $line"
```
Reads the first line of `input.txt` into `line`.

> **Note:** `read` only processes one line at a time unless looped.

---

### From a Pipe

```bash
echo "Alice 25" | read name age
echo "Name: $name, Age: $age"
# Output: Name: Alice , Age: 25
```
> **Note:** When using pipes, variables may not persist in the parent shell (see "Subshell Issue" below).

---

### Reading a File Line-by-Line

```bash
while read -r line; do
        echo "Line: $line"
done < input.txt
```
Reads each line of `input.txt` into `line` until EOF.

---

## Advanced Examples

### Silent Input (e.g., Password)

```bash
read -s -p "Enter password: " pass
echo -e "\nPassword stored."
```
Hides typed characters (useful for sensitive input).

---

### Custom Delimiter

```bash
read -d ',' name <<< "Alice,Bob"
echo $name
# Output: Alice
```
Reads up to `,` into `name`.

---

### Reading into an Array

```bash
read -a colors <<< "red blue green"
echo ${colors[1]}
# Output: blue
```
Second element of the array.

---

### Timeout

```bash
read -t 5 -p "Enter input (5s): " input || echo "Timed out"
```
Waits 5 seconds; if no input, prints "Timed out".

---

## Key Notes

- **IFS (Internal Field Separator):** Controls how input is split into variables. Default is whitespace (`IFS=" \t\n"`).

    ```bash
    IFS=: read user pass <<< "alice:secret"
    # user=alice, pass=secret
    ```

- **Subshell Issue:** When using pipes (`|`), `read` runs in a subshell, so variables may not persist in the parent shell. Workaround:

    ```bash
    read name age < <(echo "Alice 25")
    ```

- **Use `-r`:** Prevents issues with backslashes (e.g., `read -r` treats `\n` as literal `\n`).
- **Exit Status:** Returns 0 on success, non-zero on EOF or error.

---

## Practical Use Cases

- **Interactive Scripts:** Prompt users for input (e.g., names, choices).
- **Parsing Files:** Process configuration files or logs line-by-line.
- **Piped Data:** Handle output from other commands (e.g., `ps | read`).
- **Secure Input:** Use `-s` for passwords or sensitive data.
