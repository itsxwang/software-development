-- Learn lua in minutes, sort of revision kind of (https://learnxinyminutes.com/lua/)

-- This clip tells about lua in detail -> https://youtu.be/CuWfgiwI73Q?si=E2OuJNHccV--A_2M


--[[
These are multiline comments
]]


-- Simple literals (https://youtu.be/CuWfgiwI73Q?si=-VrQPSQ_aKNwHPcA&t=127)
-- Like for example to make a string
local string = "Hello World"

-- Or to make a number
local number = 123

-- Or to make a boolean
local boolean = true

local string2 = 'also valid'
-- Or to make a nil, nil simply means nothing
local nothing = nil

-- Multiple variables at a single time
local a, b, c, truth = 1, 2, 3, true

-- MultiLIne string

local multiline_string = [[
This is a multiline string
!!]]     
     

-- Functions in lua (https://youtu.be/CuWfgiwI73Q?si=LqsqgM0Dr4ZJF5Ch&t=167)

--[[
Functions in lua are first class objects which means you can use them as values.
There are two ways to define functions in lua.
]]

-- First way

local function example ()
end

example()

-- Second way (use function as a value)
local myfunction = function ()
    print("Hello World")
end
myfunction()

-- higher order function 
local decorator = function (f)
    return function ()
        print("**Decorated**")
        f()
        print("**End**")
    end
end

local decoratedfunc = decorator(function ()
    print("The main function")
end)

decoratedfunc()

-----------------------------------------------------------------------
-- lua only data structure(Tables) https://youtu.be/CuWfgiwI73Q?si=L4OgN9U-NlZEGUcr&t=257

-- lua list can be heterogenous
local mytable = {1, 2,'string_val', 3, 4, 5, function () print("Hello") end}
mytable[1] = 10 

print(mytable[1]) 
-- to see array items we can iterate over it 

-- it simply going from 1 to #mytable(length of mytable, 6 here) no (n-1) thing like python
-- for i=1, #mytable do 
--     print(mytable[i])
-- end

print(#mytable) -- #mytable gives us the length of the mytable, note: we get length of that table only that act as a array only

-- the above we see is table as list, but we also have table as maps
f = function () print("Hello") end
local t = {
    literal_key = "a string",
    [1] = "a number key value",
    ["a string"] = "another string",
    [f] = "a function key value"
}

print(t[1])
print(t["a string"])
print(t.literal_key)
print(t[f])

-------------------------------------------------------------------------------
-- Control flow in lua

-- for loop 
-- There are 2 types of for loops in lua
-- 1️⃣ Numeric for loop 
    -- Syntax

    --[[
        for var = start, stop [, step] do
            -- body
        end
    ]]
        
-- 2️⃣ Generic for loop
    -- Syntax

    --[[   
    for key, value in pairs(table) do
    -- body
end
]]

-- Example (Numeric for loop)
-- in this initialization is required 
for i = 1, 10  do
    print(i)
end

-- Example (Generic for loop)
-- for key, value in pairs(t) do
--     print(key, value)
-- end
-- `ipair` function returns index and value, note ipair stop iterating when it hits first nil(means encounter first non array item in table)  -> 
for ind,val in ipairs(mytable) do
    print([[index-]] .. ind .. [[=]] .. tostring(val)) -- this is just string concatenation
    print("and type of val is: "..type(val))
end

local table1 = {1,2,3,
he= "hello",
5,6

}
print(#table1) -- 5, as it only consider array part of a table

-- `if` in lua  (https://youtu.be/CuWfgiwI73Q?si=hTfEqOUASPyfWwSF&t=567)
-- note: in lua there are `nil` and `false` are falsey values

if false then
    print("true")
elseif nil then
    print("nil")
else 
    print("else block")
end