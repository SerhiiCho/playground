module Where where

appendLastTwos :: [Int] -> [Int] -> [Int]
appendLastTwos list1 list2 = lastTwo list1 ++ lastTwo list2
    where
        lastTwo :: [Int] -> [Int]
        lastTwo l = reverse (take 2 (reverse l))

count :: Int -> [Int] -> Int
count n list = go 0 list
    where
        go :: Int -> [Int] -> Int
        go result l =
            if null l
            then result
            else if (head l) == n
                then go (result + 1) (tail l)
                else go result (tail l)

main :: IO ()
main = do
    print (appendLastTwos [4, 5, 6] [8, 9, 10])
    print (count 3 [1, 2, 3, 3, 3, 4, 5, 6])
