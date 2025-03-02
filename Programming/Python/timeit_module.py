import timeit

# timeit.timeit() measures the total execution time for the given code snippet

t = timeit.timeit('sum(range(1000))', number=100000)
print(t)  # Prints total execution time in seconds

# To get the average execution time per run
avg_time = timeit.timeit('sum(range(1000))', number=100000) / 100000
print(avg_time)  # Prints time taken for one execution

# Using timeit.repeat() to run multiple trials
# repeat=5 runs the test 5 times, returning a list of execution times
# number=100000 specifies how many times to run the code per trial

times = timeit.repeat('sum(range(1000))', repeat=5, number=100000)
print(min(times))  # Prints the best execution time among 5 runs

# Explanation of 'repeat' and 'number':
# - 'number': Specifies how many times the given code should be executed per trial.
# - 'repeat': Specifies how many times the test should be repeated to get multiple execution times.

# %timeit (Jupyter/IPython magic) runs multiple trials and returns the best time per loop. For particular line of code
# %%timeit in Jupyter/IPython Notebooks
# %%timeit is a cell magic command in Jupyter Notebook and IPython used to measure the execution time of an entire cell.

# Syntax

""" %%timeit
code_to_test """

# Runs the code multiple times and returns the best time per loop.
# It automatically determines a suitable number of iterations for accurate results.

# Example
"""
%%timeit
sum(range(1000))
"""

# Output:
# 15.2 µs ± 325 ns per loop (mean ± std. dev. of 7 runs, 100000 loops each)
# 15.2 µs → Best average execution time per loop.
# 7 runs → The test was repeated 7 times.
# 100000 loops each → Each run executed the code 100,000 times.

# Comparison with %timeit
# %%timeit → For multiple lines of code in a Jupyter cell.
# %timeit → For single-line statements.
