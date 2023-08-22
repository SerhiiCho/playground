module FunctionWithReturn where

-- In this example we use the return keyword
getName :: IO String
getName = do
    putStrLn "What is your name?"
    name <- getLine
    return name

main :: IO ()
main = getName >>= \n -> putStrLn ("Hello " ++ n ++ "!")

{-
    The `\` symbol before the variable `n` is called a lambda.
    It signifies that we are defining an anonymous function.
    It is a way to define an anonymous function.

    The `>>=` operator is called bind. It is used to bind
    the result of an IO action to a variable.
-}