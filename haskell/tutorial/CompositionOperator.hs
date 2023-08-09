module CompositionOperator where

-- 1. map takes a list and maping each number to its square
-- 2. sum takes a list and sum all the numbers
calculate :: [Int] -> Int
calculate = sum . map (^2)

main :: IO ()
main = do
   print (calculate [1, 4, 5])


