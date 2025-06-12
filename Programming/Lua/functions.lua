-- in lua functions can have multiple return values, and we can catch them in multiple variables (https://youtu.be/CuWfgiwI73Q?si=Y96NP_jMpSDABPeQ&t=707)

-- as unpack moved from global namespace to table library, we have to use table.unpack, btw we can add polyfill -> `unpack = unpack or table.unpack`
local function k () 
    return 1,2,3,4
end
print(k()) -- 1  2   3   4

local a,b,c,d = k()
print(a,d)

-- passing multiple arguments to a function
local var_args = function(...)
    -- `...` used to get and pass multiple arguments 
    local arguments = {...}
    for i,v in ipairs(arguments) do
        print('index: '..i..' value: '..v)
    end
return ...
end

print('1:',var_args(7,'1st','red')) --  `1:      7       1st     red`
print('=======================================')
print('1:',var_args(7,'1st','red'),'<lost>') -- `1: 7 <lost>` because there is 🔥 The Lua Rule: "function calls as arguments return only one value unless they're the final argument" 
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