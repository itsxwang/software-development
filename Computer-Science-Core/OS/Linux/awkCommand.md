
- [`awk`, is very useful scripting language to manipulate text and etc](https://youtu.be/oPEnvuj9QrI?si=pLjnXAebGkuHfKaf&t=97)

- this command also take stdin

    - can use to write scripts to accept data from stdin and change it some way and then pass that to stdout. ex: stdin can be file and stdout will be screen. 

- awk default delimeter: space, means each field is separated by space

- [Syntax](https://youtu.be/F4Zo1NuE_rY?si=2dEivcgZxh9ePv3f&t=37) :  `awk {command} filename`

- ex: `awk '{print}' filename`, simply prints the file content.


- specific field : `awk '{print $7}' filename`: print the 7th field of every line(row).
Note: $0 for ever field
- multiple field: `awk '{print $7, $8}' filename`: print the 7th and 8th field of every line(row).

- `awk '{print $NF}' filename`: NF for last field, this come in predefined variables category, [see more](https://youtu.be/F4Zo1NuE_rY?si=k0uqAu1kTDQHUCyn&t=227) 


more generalize would be this: without `$n` we are saying command will operate on all field of every line(row). 

- `awk -F':' '{print $2}' filename`: print the 2nd field of every line(row) with ':' as delimiter.



