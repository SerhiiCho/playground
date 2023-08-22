module When where

import Control.Monad (when)

printWhenEqual :: Int -> Int -> IO ()
printWhenEqual num1 num2 = when (num1 == num2) $ putStrLn "Numbers are the same"

printWhenDifferentStrings :: String -> String -> IO ()
printWhenDifferentStrings str1 str2
    | str1 == str2 = putStrLn "Strings are the same"
    | otherwise = putStrLn "Strings are not the same"

main :: IO ()
main = do
    printWhenEqual 24 23
    printWhenDifferentStrings "nice" "cool"