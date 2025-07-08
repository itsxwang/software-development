- `env` or `printenv` for list existing variables\

    The env command does not read from a specific file.

    Instead, it prints the current environment variables of the shell — which are typically set or exported from one or more of these files before the shell session starts:


## 📄 Common files where env vars may come from:
| File                                  | Used By                                             |
| ------------------------------------- | --------------------------------------------------- |
| `~/.bashrc` or `~/.zshrc`             | Interactive shell (your personal environment setup) |
| `~/.profile` or `~/.bash_profile`     | Login shells (sets PATH, LANG, etc.)                |
| `/etc/environment`                    | System-wide env variables                           |
| `/etc/profile`, `/etc/profile.d/*.sh` | System-wide login shell setup                       |

✅ Summary:
>  The `env` command does not read a file directly. It prints the **current environment**, which was populated by shell config files (.bashrc, .zshrc, /etc/environment, etc.) when the shell/session started.




- [creating a variable](https://youtu.be/qtcRpEHHuJI?si=XJw630NtOTH6t8fz&t=57)
    - variable_name="value"
        - this creates variable but specific to session

- removes the variable from the current shell session : `unset variable_name`
- make variable part of the environment: `export variable_name="value"`

- [reading a variable](https://youtu.be/qtcRpEHHuJI?si=Q_EQzZRYVTI840kP&t=137)
    - echo $variable_name