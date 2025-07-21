
- [`awk`, is very useful scripting language to manipulate text and etc](https://youtu.be/oPEnvuj9QrI?si=pLjnXAebGkuHfKaf&t=97)

- this command also take stdin

    - can use to write scripts to accept data from stdin and change it some way and then pass that to stdout. ex: stdin can be file and stdout will be screen. 

- awk default delimeter: space, means each field is separated by space

- [Syntax](https://youtu.be/F4Zo1NuE_rY?si=2dEivcgZxh9ePv3f&t=37) :  `awk {command} filename`

- ex: `awk '{print}' filename`, simply prints the file content.Means all fields of every row. By default `print` is `print $0`


- specific field : `awk '{print $7}' filename`: print the 7th field of every line(row).
Note: $0 for ever field
- multiple field: `awk '{print $7, $8}' filename`: print the 7th and 8th field of every line(row).



- `awk '{print $NF}' filename`: NF for last field, this come in predefined variables category, [see more](https://youtu.be/F4Zo1NuE_rY?si=k0uqAu1kTDQHUCyn&t=227) 
    - `NF` variable contains the number of fields in the current record (line).
    - `$` stands for the field no. of the current record (line).
    - Note: if field number is out of range, it will print nothing.


more generalize would be this: without `$n` we are saying command will operate on all field of every line(row). 

- `awk -F':' '{print $2}' filename`: print the 2nd field of every line(row) with ':' as delimiter.


- search any word using `awk`: `awk '/word/ {print}' filename`: print all lines containing 'word'.
will print the whole line(row) where 'word' is present.
    `|` to search multiple words: `awk '/word1|word2/ {print}' filename`: prints all fields containing either 'word1' or 'word2'.

- let's print row no. for every line: `awk '{print NR, $0}' filename`: NR is a predefined variable that contains the current record number (line number) where the awk command is currently processing.

- print only the specific row: `awk 'NR==7 {print}' filename`: prints only the 7th line(row) of the file.

- range of rows: `awk 'NR>=7 && NR<=10 {print}' filename`: prints lines from 7 to 10.
   - or `awk 'NR==7, NR==10 {print}' filename`: prints lines from 7 to 10.
    - use else and if cases to print all other lines: `awk 'NR==7, NR==10 {print} NR!=7 && NR!=10 {print}' filename`: prints lines from 7 to 10 and all other lines.

only blank lines: `awk 'NF==0 {print}' filename`: prints only the blank lines in the file.
   - `NF` is a predefined variable that contains the number of fields in the current record (line). If `NF` is 0(fields are 0), it means the line is empty.

- we can also use `field` in condition like this: `awk '$1==2 {print}' filename`: prints only lines with where field1 is 2.


- how to check if a given char present in a column or not: `awk '$2 ~ /c/ {print}' filename`: prints all lines where the 2nd field contains the character 'c'.
    - `~` is used for pattern matching in awk.

- ignorecase in awk: `awk 'BEGIN {IGNORECASE=1} /word/ {print}' filename`: prints all lines containing 'word' (case insensitive).
    - `BEGIN` block is executed before processing any input lines.
    - `IGNORECASE` is a predefined variable that makes the pattern matching case insensitive.
    - but some previous versions of awk not support this
    for that use: `tolower()`
        - `awk 'tolower($2) ~ /case/ {print}' filename`: prints all lines where the 2nd field contains the character 'case' (case insensitive).

    - exactly match: `awk '$2 ~ /^c$/ {print}' filename`: prints all lines where the 2nd field is exactly 'c'.
        - `^` means start of the string and `$` means end of the string.

- [Handling file with multiple delimiters](https://youtu.be/F4Zo1NuE_rY?si=04gIe8Z3X8eAcIX2&t=1247): `awk -F'[,:]' '{print $2}' filename`: prints the 2nd field of every line(row) with ',' or ':' as delimiters.
    - `-F` option is used to specify the field separator.
    - delimeter that is random amount of spaces: `awk -F'[[:space:]]+' '{print $2}' filename`: prints the 2nd field of every line(row) with any amount of spaces as delimiters.
        - `[[:space:]]+` `+` means matches one or more whitespace characters.
        - `[:space:]` this only work inside `[]` because it is a POSIX character class and any POSIX character class must be enclosed in square brackets. 

        - combine it with multiple delimeters: `[[:space:],]+` will match one or more whitespace characters or commas.
        - But we want only any no.of space or only one comma(not many commas) as delimeter: `awk -F'[[:space:]]|,' '{print $2}' filename`: prints the 2nd field of every line(row) with any amount of spaces or a single comma as delimiters. `|` is used to specify multiple delimiters.

- [log analysis in given range](https://youtu.be/F4Zo1NuE_rY?si=kbQAhojE6VCqbUUY&t=1617)