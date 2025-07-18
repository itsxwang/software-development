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
    - after pattern `sed '/pattern/ a Hello' file_name`: this will append "Hello" after a line where the pattern will be found.

- How to add new line before a given string, so it will add text before Paul?
    - `sed '/Paul/ i new_text' file_name` : it basically like opposite of `a`. Add new_text above all line contain pattern `Paul`.

- How to edit existing line instead of adding new line?
    - `sed '5 c new_text' file_name`: and existing line will be replaced.

- How to read content from a file and use in our command?
   - `sed '3 r externalfile' file_name`: this will read the content of externalfile and put the content of that after 3rd line in file_name.

- How to see the hidden characters?
    - `sed -n 'l' file_name`: this will show the hidden characters like end of the `$` for end of the line .


- How to wrap your file content with given no. of characters?
    - `sed 'w7' file_name`: 7 characters per line

- How to stop execution of sed command as soon as first occurance found or in given line?
    - `sed ‘/India/ q’ file_name`: stop execution as soon as India found
    - `sed ‘5 q’ file_name`  (stop execution at line 5)


- put specific command output on certain line 
    - `sed '7 e command' file_name` : this will put command output on 7th line.(if anything present on 7th line will go above)



- How to see the line number in file?
    - `sed '=' file_name`

- [regex in sed](https://youtu.be/ETF6CapGAvc?si=15WXsPLQH34xrcvc&t=1947)
    - ^   start of line
    - $   end of line
    - .   single character
    - []  match character set
    - [^] exclusive Set 
    - \*   zero or more occurance
    
    - give every line where pattern found in start of the line
        - `sed -n '/^pat/p' file_name`  
        - `sed -n '/[AG]/p' file_name`  : match any lines start with A and G
        - - `sed -n '/[A-G]/p' file_name`: match any lines start with A to G
        
    - give every line where pattern found in end of the line
        - `sed -n '/pat$/p' file_name`
        
- POSIX Classes
    - `sed -n  '/[[:digit:]]/p' file_name` : match any digit
    - `sed -n  '/[[:alpha:]]/p' file_name` : match any alphabet
    - `sed -n  '/[[:alnum:]]/p' file_name` : match any alphabet or digit
    - `sed -n  '/[[:lower:]]/p' file_name` : match any lowercase letter
    - `sed -n  '/[[:upper:]]/p' file_name` : match any uppercase letter
    - `sed -n  '/[[:punct:]]/p' file_name` : match any punctuation symbol
    - `sed -n  '/[[:space:]]/p' file_name` : match any whitespace character    