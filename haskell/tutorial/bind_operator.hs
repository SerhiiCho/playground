getName :: IO String
getName = putStrLn "What is your name?" >> getLine

-- The `>>` chaining operator is used to chain multiple IO actions together.
-- We first put string "What is your name?" to the console and then
-- we get the user input and return it.

main :: IO ()
main = do
    getName >>= \n -> putStrLn ("Hello " ++ n ++ "!")