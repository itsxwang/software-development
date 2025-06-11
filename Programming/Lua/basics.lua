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

-- lua only data structure(Tables) https://youtu.be/CuWfgiwI73Q?si=L4OgN9U-NlZEGUcr&t=257

local table = {1, 2, 3, 4, 5}
table[1] = 10


print(table[1]) -- only give us address where the value is stored
-- to see array items we can iterate over it 

for i = 1, #table do
    print(table[i])
end
