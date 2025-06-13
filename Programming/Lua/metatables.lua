-- MetaTables (https://youtu.be/CuWfgiwI73Q?si=OtybRwOggLGyHrAR&t=1037)

-- 🔧 What are metatables?
--[[ In simple words:

A metatable is like a table that controls the behavior of another table.

You can attach a metatable to any Lua table.
The metatable can define special behaviors via metamethods. ]]

-- 🔧 What are metamethods?
-- Metamethods are special keys inside the metatable that Lua recognizes to override behavior.

-- 🔧 What are metamethods?
-- Metamethods are special keys inside the metatable that Lua recognizes to override behavior.
-- Example:
    -- __add → how tables behave when you do table1 + table2

    -- __index → how to handle missing keys

    -- __tostring → how to convert table to string when printed

-- they are like dunder methods of python
 
--[[ 🔥 Why do we need metatables?
Because normal Lua tables are very simple → no operator overloading, no default behaviors.

Metatables allow you to:

- Customize behavior of tables

- Simulate classes/objects (OOP)

- Implement operator overloading

- Create powerful DSLs (domain-specific languages)

- Handle missing keys (default values)

- Build custom string representations

 ]]

--  🔧 Let’s go step-by-step.
-- 🔸 1️⃣ Creating a simple metatable
local t = {1, 2, 3}

local meta = {}

setmetatable(t, meta)

--[[ 
- meta is attached to t via setmetatable().

- Now any metamethods inside meta will control behavior of t.
 ]]

-- 🔸 2️⃣ __tostring metamethod, so __tostring method invoke 
meta.__tostring = function(t)
    return "This table contains: " .. table.concat(t, ", ")
end

print(t) -- so when we print `t` the string method going to invoke 
-- so, Lua normally prints tables like: table: 0x555a...
-- But with __tostring, you control what print() outputs.

-- 3️⃣ __add metamethod 
local vec_mt = {}
vec_mt.__add = function(a, b) 
     return setmetatable({a[1] + b[1], a[2] + b[2], a[3]+b[3]},vec_mt) -- setmetatable returns new table which has 2nd arg as metatable
end

local vec1 = setmetatable({7,5,7},vec_mt)
local vec2 = setmetatable({7,7,1},vec_mt)
print((vec1+vec2)[1])

-- 4️⃣ __index metamethod (inheritance, default behavior)
-- This is the most important one. Only runs when key is invalid

local t2 = {['a'] = 1}

local meta2 = {
    __index = function(tbl, key)
        print('Whole table: ',tbl)
        return 'key `'..key..'` not found'
    end 
}

setmetatable(t2,meta2)
print(t2['b'])

-- You can return default values, or even chain to another table (inheritance).

-- like for example:
local parent = {x = 10, y = 20}

local child = {}
setmetatable(child, { __index = parent })

print(child.x)  --> 10

-- If child doesn’t have x, Lua looks in parent.
-- 👉 This is the foundation of how you can simulate classes and objects in Lua.

-- 🔥 🔧 Real life example — Class-like behavior
local Person = {}

Person.__index = Person

function Person:new(name)
    local self = setmetatable({}, Person)
    self.name = name
    return self
end

function Person:greet()
    print(self.name)
    print("Hello, my name is " .. self.name)
end


-- let's make catched febannoci with metatables
local feb_mt = {
    __index = function(self, key)
       print('key: ', key)
       if key == 1 then return 1 elseif key == 0 then return 0  end
       self[key] = self[key-1] + self[key-2] 
       return self[key]
    end
}

local feb = setmetatable({}, feb_mt)
print(feb[5])
print(feb[7])
print(feb[5])
-- so what we just do is : we make table who generate febannoci numbers, and catched febannoci sequence to the largest number table index with !!

