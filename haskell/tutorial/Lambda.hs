module Lambda where

-- Good example of a function that excepts the lambda
satisfies :: (Int -> Bool) -> Int -> String
satisfies check n
    | check n = "The number " ++ show n ++ " passes check"
    | otherwise = "The number " ++ show n ++ " doesn't pass"

main :: IO ()
main = do
    print (satisfies (\x -> x > 5) 6)
    print (satisfies (\x -> x > 5) 4)
