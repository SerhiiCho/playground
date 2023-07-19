getName :: IO String
getName = do
    putStrLn "What is your name?"
    name <- getLine
    return name

main :: IO ()
main = getName >>= \n -> putStrLn ("Hello " ++ n ++ "!")