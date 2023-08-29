module ReadFile where

main :: IO ()
main = do
    contents <- readFile "test.txt"
    print contents
