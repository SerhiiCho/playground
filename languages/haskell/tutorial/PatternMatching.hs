module PatternMatching where

-- This is pattern matching, we can do case of
getName :: String -> String
getName name = case name of
    "Serhii" -> "Great"
    "Anna" -> "Awesome An"
    _ -> "Some other name"

-- The alternative will be to define a function multiple times
getAge :: Int -> String
getAge 1 = "Only 1 year old"
getAge 2 = "Only 2 years old"
getAge age = "Wow! You are already more than " ++ show age ++ " years old"

-- We can do something even crazier with lists
-- If the list has exactly 3 items, we want to get the sum of first and last
sumOfTwoInThree :: [Int] -> Int
sumOfTwoInThree [x, _, y] = x + y
sumOfTwoInThree _ = 0

oneOrTwoZeros :: [Int] -> Bool
oneOrTwoZeros l = case l of
    [0] -> True
    [0, 0] -> True
    _ -> False

main :: IO ()
main = do
    print (getName "Anna") -- returns "Awesome An"
    print (getAge 18) -- returns "Wow! You are already more than 18 years old"
    print (sumOfTwoInThree [1, 2, 3]) -- returns 4
    print (oneOrTwoZeros [0, 0]) -- returns True

