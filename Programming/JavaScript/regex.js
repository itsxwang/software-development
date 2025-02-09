// Great resource to revise regex: 

// **`RegEx Core Concepts: The Ultimate Guide | RegEx in One Video` by `Anurag Singh ProCodrr` See this video to learn / revise about how regex works and some concepts** (English Captions Available) 
// (Note: That above video not cover all regex topics) like how to make & use regex in js and more topics related to regex(that written in below given documentation) , so to cover that topics also , you can :
// 1. Read below documentation , the things that are complex , you can search them on internet .
// 2. Simply Start using regex and ask Ai or Google about the things/concepts where you stuck .(Best approach)
// 3. ** Watch this video : `Learn Regular Expressions (Regex) - Crash Course for Beginners` by `freeCodeCamp` ** , which covers regex all main and important topics and in JavaScript too .




// read this documentation to direct revise main topics,syntax,and the topics that not covered in above video etc..., related to regex : https://regex-pro.netlify.app/


// Helpful website to test and make regex: 1. https://regex101.com/(more features as compare to regexr.com , so its recommended to use mostly this website for regex purposes)
                                        //    2. https://regexr.com/
// And trust me Practice is all make you perfect in regex , example if you working frequently with regex you will be able to make yourself perfect in regex.


// ---- Let's code ----

// let's make a program that only match special characters in a string (metacharacters)
const my_string = `Hello World, \n \r I am a ProCodrr\.|
\ 123iiii
 . ^ $ * + ? {} [] \ | () \n \r`
// `matchAll()` gives us a iterator , in which we can use for of loop to get all the matches (basically we can iterate over it)
console.log(my_string.match(/\\[nr]|\.*[^A-Za-z0-9\n ,]|\\/g)); // (/  /) are delimiters(read docs to know what is the meaning of delimeters) and `g` is global flag (you can use different types of flags listed in docs)

// Explanation:
// `\\[nr]` → Matches literal \n or \r (since \\ matches a literal backslash, and [nr] matches n or r).
// `\.*[^A-Za-z0-9\n ,]` → Matches any non-alphanumeric character except spaces, commas, and newlines.(as we use ^(inside square brackets) , so its means negation)
// `|\\` → Ensures standalone \ is also matched.  (as (\)backslash is a metacharacter so we need to escape it by \\ to make (\)backslash a literal \)

//  We can also use `replace()` or `replaceAll` (already written in docs) to replace specific pattern
const str = 'Hello w-orld , whats up w,orld , w;orld is doing good ,  orld'
const pattern = /\w?[-,;]?orld/g 
console.log(str.replace(pattern,'world')); // Hello world , whats up world , world is doing good ,  world


// to check if our regex pattern in given string or not
console.log(pattern.test(str))  // return true as the pattern comes in given string


// regex patten for matching absolute and relative URLs
let new_str = `
https://goggle.com/path-to/?q=url#fragment
goggle.com
reddit.com
https://developer.mozilla
https://developer.mozilla.org/en-US/docs/Learn_web_development/
https://developer.mozilla.org/en-US/search?q=URL
`

console.log(new_str.match(/https?:\/\/\S+|[a-z0-9._-]+\.[a-z]{2,}/gi)) // match all urls in `new_str` string , `i` flag is for case insensitive match


// ---- Lazy matching and greedy matching ----
/* https://youtu.be/ZfQFUJhPqMM?si=-CPHOR4m--TKi9xI&t=933 , go to this video (time-frame is embedded in url of this video) and learn/revise about `lazy` and `greedy` matching ,
Btw the main difference between lazy and greedy matching is , in greedy matching it try to match pattern further & further , even it find the pattern at the current position , but in lazy
matching if it find the pattern at current position then it stop and complete that spcific match, if it not find the pattern at current position then only it try to match pattern at next position */


//  https://youtu.be/c9HbsUSWilw?si=uznux-0pjgzMUaZZ by `The Coding Train`, go to this video to learn about capturing groups `()` (if you not understand from that docs) 
// * And one important thing to note: in JavaScript, there is no $0 for accessing the whole matched group. Instead, you can use $& to do that 

/*  Learn about `Back References in capturing groups(\k syntax)`  by go to link `https://youtu.be/Z66TeSTcP-Q?si=YEmfUwbmFSPJ4pvq` , although this is also told in freeCodeCamp video ,
 you can also use this type of syntax , `(?<nameofgroup>\w+) \k<nameofgroup> ,(where k is important to tell its backrefernce) `, in backreferences if you wanna select with group name
 */



// ----     Lookahead and Lookbehind (lookarounds) ----
// https://youtu.be/l7GIFU6VKB8?si=xiqB7mUUfgACDoHg , go to this link to study about positive and negative lookahead .
// https://youtu.be/xX4xtlgC1Vw?si=Epk2cChgDh1XiLn9 , go to this link to study about positive and negative lookbehind . 


// NOTE: Let's understand that i wanna tell with example
/* [https]? it's saying if there is any character in a string either its `h` or `t` or `p` or `s` and if one of that character has occurence of  0 or 1 in that given string , match that string ,  
instead of saying match 0 or 1 occurence of `https` as a whole */
// But if you wanna do that , you can do this :` (https)? ` it saying match 0 or 1 occurence of `https` set(as ` () ` makes a set/group of characters as one) as a whole


// https? , is saying match a pattern in which there is http consecutively comes and `s` has occurence of 0 or 1     ---- And these cases applicable to all Quantifiers



// its a bit of complex one , this pattern match every phone no: And convert all numbers after Area code to XXX XXXX Ex: this `799.654.9234` to this `799.XXX.XXXX`
phPatt = /(?<first>\(?)(?<areacode>\d{3})(?<second>[-.)]?)(?<hide>\d{3})(?<third>[-.]?)(?<hide2>\d{4})/g
phone = `(212)555-1234
917-867-5309
799.654.9234
6579067894`
sr = phone.replace(phPatt , '$<first>$<areacode>$<second>XXX$<third>XXXX')
console.log(sr)

// Program to replace every markdown file link to html anchor tag link
let mdToHtmlinPatt = /\[(.*)\]\((https?:\/\/\w+.\.[a-zA-Z].*)\)/g
let mdLinks = `
[google](https://google.us) 
[reddit](https://reddit.eu)
[discord](https://discord.com)
[amazon](https://amazon.de)
`
htmlLinks = mdLinks.replace(mdToHtmlinPatt,'<a href="$2">$1</a>')
console.log(htmlLinks)


// you can learn about word boundaries (\b) by seeing this video `https://youtu.be/0ORBOTYPANA?si=iRuPxGNrGmVA59wf` by `Deeecode The Web` , and non word boundary(\B) is opposite of (\b) word boundary

// learn about `matchAll()` from this video https://youtu.be/5iR2zgGNu1I?si=XdF7rZawOclxEMX1&t=153 by `Code Explained` , its not very different from `match()`

// fast revison of match, exec and test methods , see this video `https://youtu.be/vDCPteAb4hE?si=NoWDbSlYmbOPNxY3` by `Leela Web Dev`

// The `search()` method: This method returns the index of the first match of the regular expression(pattern) in the given string. If there's no match, it returns -1.

// we can also use regex pattern in `split()` , to split a string by a specified regex pattern 

