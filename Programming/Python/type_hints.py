# all you need to watch this video by `Tech With Tim` for revise type hints in python , if you wanna revise
# https://youtu.be/QORvB-_mbZ0?si=jc9IkR2Z2nQavmAN

# ` pip install mypy ` , mypy module is a static type checker for Python. Run below command to check your program is following type annotations ot not
# ` mypy <filename>`
# Example code:
a:str = 's'
# `mypy type_hints.py`(run this command on terminal and replace file_name with actual path of the file) outputs to :  Success: no issues found in 1 source file
# But if we do 
# b:str = 1
""" `mypy type_hints.py` outputs to: error: Incompatible types in assignment (expression has type "int", variable has type "str")  [assignment]
 Found 1 error in 1 file (checked 1 source file) 
"""

# 1 more example
# this means arr must have type list and the list should conatin only `int` type values
arr :list[int] = [7,5,6,2] # Success: no issues found in 1 source file

# 1 example related to dictionaries and tuples 

# dictionaries
# means key should be string and value should be integer
di : dict[str, int] = {'p':1,'r':2} # Success: no issues found in 1 source fil

# tuples , in tuples you have to specify type for every index explicitely
tup1 : tuple[str,str,int,int] = ('s','r',1,2) # Success: no issues found in 1 source file


# 1 example with functions 


# file in progress ...