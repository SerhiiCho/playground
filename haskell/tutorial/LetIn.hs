module LetIn where

-- Define a variable that is equal to some expression,
-- you can now use those after `in` keyword.
-- let var = x + y in var == result

-- Takes list and returns True if the first three
-- elements are equal to the last 3 elements of the list
sameThreeAround :: [Int] -> Bool
sameThreeAround list =
    let firstThree = take 3 list
        lastThree = reverse (take 3 (reverse list))
    in firstThree == lastThree

main :: IO ()
main = do
    print (sameThreeAround [1, 2, 3, 9, 2, 0])