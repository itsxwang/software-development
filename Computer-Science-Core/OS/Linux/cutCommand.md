- [cut command](https://youtu.be/GYP2T34v56E?si=wyrSkh3owFBtknnH&t=37)
  - used to remvove section from each line of a files

- `cut` command also take stdin

- `cut -b 1-5 file.txt`
  - `-b` option is used to specify the byte range
  - `1-5` means from byte 1 to byte 5
  - `file.txt` is the input file
  - will print the first 5 characters of each line
  - specific bytes only: `cut -b 7,1,5 file.txt`: prints bytes 7, 1, and 5 bytes of each line
  - combine ranges: `cut -b 1-5,7 file.txt`: prints bytes 1 to 5 and 7 bytes of each line

-c : select by character, work like -b, but some chars are multi-byte for that -c is recommended over -b if you want only certain characters
-d : select by delimiter
-f : select by field, you have to specify a delimiter with -d option (by default it is tab)
    - `cut -d : -f 1 file.txt`
      - `-d` specifies the delimiter, in this case, a colon `:`
      - `-f 1` selects the first field of each line based on the specified delimiter
      - if you want to select multiple fields, you can use `-f 1,3` or `-f 1-3` for a range
