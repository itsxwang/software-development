local foo = require('Programming/Lua/modulesInLua')
foo.coolF()

local code = "return 2 + 3"
local f = load(code)   -- compiles the string into a function
print(f())             -- runs the compiled function => prints 5
