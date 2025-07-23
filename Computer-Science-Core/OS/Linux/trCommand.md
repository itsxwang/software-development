- [tr command](https://youtu.be/4qP5xA_epXo?si=3DMiVIMMyQY2Mo3_&t=37) translate or delete characters

- can also take stdin as input

- replace character:  
     - echo "Hello" | tr 'H' 'J' will replace 'H' with 'J' in the string "Hello".
    - `echo "Hello" | tr '[a-z]' '[A-Z]'` will convert lowercase letters to uppercase in the string "Hello". [a-z] specifies the range of characters to translate, and [A-Z] specifies the target characters. \
Means first set replaced by the second set.
    - `echo "Hello" | tr '[:lower:]' '[:upper:]'` : also did the same work as above command


- [tr -d](https://youtu.be/4qP5xA_epXo?si=_SN6vjROxHjyyRcs&t=387) :  ex : `tr -d '[[:space:]]'` : remove all spaces  
    - `-d`: delte specified characters

- [tr squeeze feature to remove duplicate characters](https://youtu.be/4qP5xA_epXo?si=SKgh15EP7w0l6V1w&t=467) : `tr -s ' '`
    - `-s`: squeeze repeated characters into a single character
    - `tr -s ' '` will replace multiple spaces with a single space in the input text.
    - so it will remove multiple occurences to a single occurence of the character.
