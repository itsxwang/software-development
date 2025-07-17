- How to show only a given line or range of lines?
    - `sed -n '1p' file_name`
    - `sed -n '1,5p' file_name`
    - `sed -n '$p' file_name` # show last line

    - the `p` in last means print, so it will print the specified line(s). 

`-n` flag is used to suppress automatic printing of pattern space, so only the specified lines will be printed.

- How to see all the lines containing a specific string?
    - `sed -n '/US/p' file_name`

- How to use multiple expression in sed command?
Example: If you wanna only see 2 and 5th line
   -  `sed -n -e '2p' -e '5p' file_name`

- How to see next 4 lines from 2nd line?
    - `sed -n '2,+4p' file_name` : print 5 lines including the 2nd line.


- How to jump every other line?
    - `sed -n '1~2p' file_name` : its like a jump index, it will skip 1 line, or we can say where it standing from there +n(here 2) line. 

- How to read expression from external file?
    - `sed -f expr_file file_name`: read sed commands from expr_file and apply to file_name

- How to replace a word in a file and show?
   - `sed 's/<string_to_change>/<new_string>/g' file_name`: if you exclude `g`, it will only replace the first occurrence in each line.

- How to replace a word in a file and show except a given line or only in given line?
   - `sed '5 s/<string_to_change>/<new_string>/g' file_name`: replace in 5th line only.
   - `sed '5! s/<string_to_change>/<new_string>/g' file_name`: replace in all lines except 5th.

- Replace the changes in the file itself
    - `sed -i 's/<string_to_change>/<new_string>/g' file_name`: `-i` flag is used to edit the file in place, instead of just printing the changes. Basically, the output we would see in the terminal will be written to the file itself.

- Delete line 
    - `sed '5d' file_name`: delete 5th line.
    - `sed '5,10d' file_name`: delete lines from 5 to 10.
    - `sed '$d' file_name`: delete last line.`
    - `sed '/ex/d' file_name`: delete all lines containing "ex".
    - `sed '5!d' file_name`: delete all lines except 5th line.
    - `sed '/^$/d' file_name`: delete empty lines. : `/^$/` matches empty lines, and `d` deletes them.

- Make file that contains lines only that match a specific pattern
    - `sed -n '/pattern/p' file_name > new_file`: this will create a new file with only the lines that match the pattern.
    - with sed only: `sed '/pattern/ w new_file' file_name`: this will write the lines that match the pattern to new_file.

- append data after ceratin line
    - `sed '7 a Hello' file_name`: this will append "Hello" after the 7th line in file_name.
    - after pattern `sed '/pattern/ a Hello' file_name`: this will append "Hello" after the first line that matches the pattern.

