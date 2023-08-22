# Functional programming

Function is the main building block in functional programming. In Object-Oriented programming it should be easy to work with objects. In Functional programming it should be easy to work with functions, define, call, compose, pass as arguments, and return as values.

FP Concepts:

- Higher-Order Functions (HOF)
    - Functions that take other functions as arguments or return functions as results
- Algebraic Data Types (ADT)
    - Ability to create complex data types
- Pattern Matching
    - Ability to describe patterns for your inputs and conditionally execute code based on those patterns
    - It's when we define a function multiple times with different parameters, whichever will match the input, will be executed. Similar to constructor in Java.
- Purity
    - Functions that have no side effects
    - This makes functions makes them closer to mathematical functions
- Immutability
    - Data that cannot be changed
    - Immutability is encouraged in FP, but not required
- Totality
    - Functions work on all inputs (defined for all possible inputs)
- Laziness
    - Delaying evaluation of expressions until their results are needed