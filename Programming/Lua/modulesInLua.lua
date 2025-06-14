-- Modules (https://youtu.be/CuWfgiwI73Q?si=vt4MQo8NxiCOhFbD&t=627)
-- Modules are basically the result whatever return from a file
local M = {}

function M.coolF()
    print("Cool function called!")
end
print('Hello from modules `modules.lua`')

function k()
    print('Hello from `')
end
return M

-- now to import `M` in another file, you can use:

-- require, value will be cached so file run at most once                                                                 

-- dofile, value not cached, so file run again if dofile is called again


-- loadfile ->  takes a filename and Compiles Lua code from file, and reads the file contents, returns a function in which the compiled code is stored



    
-- load() 
-- load() takes Lua code (as a string or function) and compiles it into a Lua function, without running it.
-- You can run that compiled function later.
-- It's basically like creating Lua code dynamically at runtime.

-- Example: 
--[[ 

local code = "return 2 + 3"
local f = load(code)   -- compiles the string into a function
-- behind the scences this happens: 
        ``` 
        local f = function()
            return 2 + 3
        end
        ```
- so the code you give in load, enclosed inside a funtion and return by load         

print(f())             -- runs the compiled function => prints 5

     ]] 
    -- load() returns nil and error message if there was a syntax error.

