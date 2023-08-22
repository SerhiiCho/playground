module Where where

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
    print (count 3 [1, 2, 3, 3, 3, 4, 5, 6])
