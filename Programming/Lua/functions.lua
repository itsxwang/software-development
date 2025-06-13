-- in lua functions can have multiple return values, and we can catch them in multiple variables (https://youtu.be/CuWfgiwI73Q?si=Y96NP_jMpSDABPeQ&t=707)
-- as unpack moved from global namespace to table library, we have to use table.unpack, btw we can add polyfill -> `unpack = unpack or table.unpack`
local function k()
    return 1, 2, 3, 4
end
print(k()) -- 1  2   3   4

local a, b, c, d = k()
print(a, d)

-- passing multiple arguments to a function
local var_args = function(...)
    -- `...` used to get and pass multiple arguments 
    local arguments = {...}
    for i, v in ipairs(arguments) do
        print('index: ' .. i .. ' value: ' .. v)
    end
    return ...
end

print('1:', var_args(7, '1st', 'red')) --  `1:      7       1st     red`
print('=======================================')
print('1:', var_args(7, '1st', 'red'), '<lost>') -- `1: 7 <lost>` because there is 🔥 The Lua Rule: "function calls as arguments return only one value unless they're the final argument" 
-- > When a multi-return function call appears anywhere except at the very end of an argument list, Lua only takes its first returned value.

-- Simplified version for explanation
--[[ function f() return 1, 2, 3 end

print(f())          --> 1   2   3
print(10, f())      --> 10  1 2 3
print(f(), 20)      --> 1   20 ]]

-- Second way of calling a function (only if function takes only 1 argument only or not only fixed number of arguments)
-- https://youtu.be/CuWfgiwI73Q?si=U6h3zynYZMS10LHa&t=857

var_args "hi" -- but we can only pass string and table as arguments like this

-- function in table -- (https://youtu.be/CuWfgiwI73Q?si=t-CxNxmB-1PMu-eW&t=977)
local MyTable = {}

function MyTable.func()
    print("hello")
end
-- its equal to 

-- function MyTable:func() end

-- `:` explained
--  The difference between : and . when calling functions.
--[[ 
| Syntax           | Meaning                                   |
| ---------------- | ----------------------------------------- |
| `obj:func(args)` | *Sugar for* `obj.func(obj, args)`         |
| `obj.func(args)` | Normal function call, no automatic `self` |
 ]]

 --[[ 
 1️⃣ The colon :
When you write:
Person.new("John")

It means:
Person.new(Person, "John")

When you write:
Person:new("John")

It means:
Person.new(self, "John")

Here, Lua automatically passes the table itself (Person) as the first argument (self).
 
]]

 

local Person = {}

Person.__index = Person

function Person:new(name)
    print(self) -- `John` if new called with . `Person` table if called with : 
    local self = setmetatable({}, Person)
    print(self)
    self.name = name
    return self
end

function Person:greet()
    print(self) -- table that called this greet method(note: that table should set to be metatable of `Person` table) if called with `.` otherwise nil or any arg passed to `greet`
    print("Hello, my name is " .. self.name)
end

local k = Person:new("John") 
k:greet()

-- 2️⃣ Why colon : works in your code
-- Your method `new` is defined as:

-- function Person:new(name)

-- This is method definition using colon syntax, which is sugar for:
-- function Person.new(self, name)
    -- So Lua expects that self will be passed automatically.

--[[ 
🔥 Simple rule:
- If you define with :, you must call with :
- If you define with ., you must call with .
 ]]

 --[[ 
 ✅ TL;DR
- : means → Lua automatically passes the table as self
- . means → you pass all arguments manually 
]]