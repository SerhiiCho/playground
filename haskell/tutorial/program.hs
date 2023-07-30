sayTheWord :: String -> IO ()
sayTheWord word = putStrLn("The word is " ++ word)

main :: IO ()
main = do
    sayTheWord "NICE"

