main = do
    putStrLn "Who do you like?: "
    name <- getLine

    putStrLn "How beautiful is she? From 1 to 10: "
    beauty <- getLine

    putStrLn (name ++ " is a beautiful name for a " ++ beauty ++ "/10 girl")