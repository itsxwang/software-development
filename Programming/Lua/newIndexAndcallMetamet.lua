-- https://youtu.be/CuWfgiwI73Q?si=a9pIfBVEWxykKB7N&t=1285

-- Note : rawset and rawget are used to set and get value of table,  without invoking any metamethod
--  rawset(t,k,v) and rawget(t,k) 

-- __call
local meta = {}
meta.__call = function(t, a, b)
    print(t) -- callablet comes
    return a + b
end

local callablet = setmetatable({}, meta)
print(callablet(7, 5))
