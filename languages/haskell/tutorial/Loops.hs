module Loops where

printTo100 :: Int -> IO ()
printTo100 num = do
    if num <= 100
        then do
            print num
            printTo100 (num + 1)
        else putStrLn("Completed the loop")

count :: Int -> [Int] -> Int
count n list = go 0 list
    where
        go :: Int -> [Int] -> Int
        go acc [] = acc
        go acc (x : xs)
            | x == n = go (acc + 1) xs
            | otherwise = go acc xs


listHasTwoElements :: [Int] -> Bool
listHasTwoElements list = case list of
    [_, _] -> True
    _ -> False

main :: IO ()
main = do
    printTo100 1
    print (count 2 [2, 4, 5, 6, 8, 9, 2, 4, 9, 2]) -- returns 3
    print (listHasTwoElements [2, 3]) -- returns True
